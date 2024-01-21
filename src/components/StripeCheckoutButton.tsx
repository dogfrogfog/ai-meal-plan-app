"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";

export function StripeCheckoutButton({
  priceInCents,
  productName,
}: {
  priceInCents: number;
  productName: string;
}) {
  const redirectToCheckout = async () => {
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY as string
      );

      if (!stripe) throw new Error("Stripe failed to initialize.");

      const checkoutResponse = await fetch("/api/stripe/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName,
          priceInCents,
        }),
      });

      const { sessionId } = await checkoutResponse.json();
      const stripeError = await stripe.redirectToCheckout({ sessionId });

      if (stripeError) {
        console.error(stripeError);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button className="w-full" onClick={async () => await redirectToCheckout()}>
      Get tokens
    </Button>
  );
}
