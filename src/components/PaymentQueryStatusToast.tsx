"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export function PaymentQueryStatusToast() {
  const success = useSearchParams().get("success");
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (success) {
      toast({
        title: "🎉 Thank you for the trust!",
        description: "Enjoy the planning and have a nice meal 🤗",
      });
    } else {
      //   toast({
      // title: "Are you sure you want to miss out on this opportunity?",
      // description: "Use free tokens to try it out!",
      //   });
    }

    router.replace("/tokens");
  }, []);

  return null;
}
