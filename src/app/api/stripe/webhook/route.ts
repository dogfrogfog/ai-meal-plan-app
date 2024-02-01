import { headers } from "next/headers";
import stripe, { Stripe } from "@/lib/stripe";
import { updateWallet } from "@/lib/api/wallets/mutations";
import { getWalletByClerkUserId } from "@/lib/api/wallets/queries";
import { error, Tag, info } from "@/lib/logger";

const webhookSecret =
  process.env.STRIPE_WEBHOOK_SECRET ||
  "whsec_b4785990e0211498ba75aa2dd2e89575a7a28ab821de9258d42f6dd45bdb9b79";

export async function POST(req: Request) {
  const payload = await req.text();
  const signature = headers().get("stripe-signature");

  let event: Stripe.Event | null = null;
  try {
    event = stripe.webhooks.constructEvent(payload, signature!, webhookSecret);
  } catch (err) {
    if (err instanceof Error) {
      error("Stripe webhooks constructEvent failed", [Tag.Stripe, Tag.WH]);

      return Response.json({ message: err.message }, { status: 400 });
    }
  }

  // @ts-ignore
  const { clerkUserId } = event?.data.object?.metadata || {};

  if (!clerkUserId || !event) {
    error("No clerkUserId found", [Tag.Stripe, Tag.WH, Tag.UserId]);
    return new Response("", { status: 401 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        const moneyReceived = event.data.object.amount_total;

        let tokens = 0;
        if (moneyReceived === 99) {
          tokens = 5000;
        }

        if (moneyReceived === 249) {
          tokens = 15000;
        }

        info(`Checkout session completed for userId(${clerkUserId})`, [
          Tag.Stripe,
          Tag.WH,
          Tag.UserId,
        ]);

        // делаем лишний запрос, надо переписать чтобы делать только 1 запрос
        const { wallet } = await getWalletByClerkUserId(clerkUserId);

        await updateWallet(clerkUserId, {
          tokens: wallet.tokens + tokens,
          updatedAt: new Date(),
          isBonusCollected: false,
        });

        info(
          `Increased ballance on ${tokens} for userId(${clerkUserId}) successfuly`,
          [Tag.Stripe, Tag.WH, Tag.UserId]
        );
        break;
      default:
        console.log(`Unhandled stripe event type ${event?.type}`);
    }
  } catch (e) {
    error(`Error occured while updating wallet for userId(${clerkUserId})`, [
      Tag.Stripe,
      Tag.WH,
      Tag.UserId,
    ]);
    return new Response(``, {
      status: 400,
    });
  }

  return Response.json({ status: 200 });
}
