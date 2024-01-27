import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { createWallet } from "@/lib/api/wallets/mutations";

import { error, Tag, info } from "@/lib/logger";

const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

export async function POST(req: Request) {
  if (!CLERK_WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    error("No svix headers found", [Tag.Clerk, Tag.WH]);

    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(CLERK_WEBHOOK_SECRET);
  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    error("Error verifying webhook", [Tag.Clerk, Tag.WH]);
    throw new Error("Error verifying webhook");
  }

  const clerkUserId = evt.data.id as string;
  const eventType = evt.type;

  if (!clerkUserId) {
    error("No clerkUserId found", [Tag.Clerk, Tag.WH, Tag.UserId]);

    return new Response("api", { status: 400 });
  }

  switch (eventType) {
    case "user.created":
      try {
        await createWallet({
          clerkUserId,
        });

        info("💳 wallet created for the user", [Tag.Clerk, Tag.WH]);
      } catch {
        error(
          `Error occured while creating wallet for the userId(${clerkUserId})`,
          [Tag.Clerk, Tag.WH]
        );
        return new Response(``, {
          status: 400,
        });
      }
      break;
    default:
      console.log(`Unhandled clerk event type ${eventType}`);
  }

  info("Finished wotk succesfuly ✅", [Tag.Clerk, Tag.WH]);

  return new Response("", { status: 200 });
}
