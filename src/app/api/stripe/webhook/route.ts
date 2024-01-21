import { headers } from "next/headers";
import stripe, { Stripe } from "@/lib/stripe";

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
      console.error(err.message);
      return Response.json({ message: err.message }, { status: 400 });
    }
  }

  switch (event?.type) {
    case "payment_intent.succeeded":
      console.log("PaymentIntent was successful!");

      console.log("🧊🧊🧊🧊🧊🧊🧊");
      break;
    default:
      console.log(`Unhandled event type ${event?.type}`);
  }

  return Response.json({ status: 200 });
}
