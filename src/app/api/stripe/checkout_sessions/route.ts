import { headers } from "next/headers";
import stripe from "@/lib/stripe";
import { error, Tag, info } from "@/lib/logger";

export async function POST(req: Request) {
  const origin = headers().get("origin");
  const { priceInCents, productName, clerkUserId } = await req.json();

  const item = {
    price_data: {
      currency: "EUR",
      product_data: {
        name: productName,
      },
      unit_amount: priceInCents,
    },
    quantity: 1,
  };

  if (!clerkUserId) {
    error("No userId found to /api/stripe/checkout_sessions", [
      Tag.Stripe,
      Tag.WH,
      Tag.UserId,
    ]);

    return new Response("", {
      status: 401,
    });
  }

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      submit_type: "pay",
      payment_method_types: ["card"],
      line_items: [item],
      mode: "payment",
      success_url: `${origin}/tokens?success=true`,
      cancel_url: `${origin}/tokens?success=false`,
      metadata: {
        clerkUserId,
      },
    });

    info(
      `Checkout session created successfuly for userId(${clerkUserId}), redirecting to stripe... ﹩`,
      [Tag.Stripe, Tag.WH]
    );
    return Response.json({ sessionId: checkoutSession.id });
  } catch (err) {
    error("Error creating stripe checkout session", [Tag.Stripe, Tag.WH]);

    return new Response("", { status: 400 });
  }
}
