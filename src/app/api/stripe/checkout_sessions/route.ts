import { headers } from "next/headers";
import { getAuth } from "@clerk/nextjs/server";
import stripe from "@/lib/stripe";
import { NextRequest } from "next/server";

export async function POST(req: Request) {
  const origin = headers().get("origin");
  const { priceInCents, productName } = await req.json();
  const { userId } = getAuth(req as NextRequest);

  console.log(`userId in /api/stripe/checkout_session: ${userId}`);

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

  if (!userId) {
    return Response.json(`User id: ${userId}`, {
      status: 401,
    });
  }

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      submit_type: "pay",
      payment_method_types: ["card"],
      line_items: [item],
      mode: "payment",
      success_url: `${origin}/`,
      cancel_url: `${origin}/`,
      metadata: {
        clerkUserId: userId,
      },
    });

    return Response.json({ sessionId: checkoutSession.id });
  } catch (err) {
    console.log(err);
    return Response.json({ error: "Error creating checkout session" });
  }
}
