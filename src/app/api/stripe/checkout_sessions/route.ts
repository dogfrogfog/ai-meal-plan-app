import { headers } from "next/headers";
import stripe from "@/lib/stripe";
import { getUserAuth } from "@/lib/auth/utils";

export async function POST(req: Request) {
  const origin = headers().get("origin");
  const { priceInCents, productName } = await req.json();
  const { session: userSession } = await getUserAuth();

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

  if (!userSession) {
    return Response.json({
      userSession,
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
        clerkUserId: userSession?.user.id as string,
      },
    });

    return Response.json({ sessionId: checkoutSession.id });
  } catch (err) {
    console.log(err);
    return Response.json({ error: "Error creating checkout session" });
  }
}
