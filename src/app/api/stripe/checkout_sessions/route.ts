import { headers } from "next/headers";
import stripe from "@/lib/stripe";

export async function POST(req: Request) {
  const origin = headers().get("origin");
  const { priceInCents, productName } = await req.json();

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

  try {
    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      payment_method_types: ["card"],
      line_items: [item],
      mode: "payment",
      success_url: `${origin}/thank-you`,
      cancel_url: `${origin}/`,
    });

    return Response.json({ sessionId: session.id });
  } catch (err) {
    console.log(err);
    return Response.json({ error: "Error creating checkout session" });
  }
}
