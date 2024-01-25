import { headers } from "next/headers";
import stripe, { Stripe } from "@/lib/stripe";
import { updateWallet } from "@/lib/api/wallets/mutations";
import { getWalletByClerkUserId } from "@/lib/api/wallets/queries";

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

  // @ts-ignore
  const { clerkUserId } = event?.data.object?.metadata || {};

  if (!clerkUserId || !event) {
    return Response.json({ status: 401 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const moneyReceived = event.data.object.amount_total;

      console.log("✅ checkout.session.completed ✅");

      let tokens = 0;
      if (moneyReceived === 399) {
        tokens = 5000;
      }

      if (moneyReceived === 999) {
        tokens = 15000;
      }

      // делаем лишний запрос, надо переписать чтобы делать только 1 запрос
      const { wallet } = await getWalletByClerkUserId(clerkUserId);

      await updateWallet(clerkUserId, {
        tokens: wallet.tokens + tokens,
        updatedAt: new Date(),
        isBonusCollected: false,
      });
      break;
    default:
      console.log(`Unhandled stripe event type ${event?.type}`);
  }

  return Response.json({ status: 200 });
}
