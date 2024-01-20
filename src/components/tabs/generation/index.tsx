import { redirect } from "next/navigation";
import { getUserAuth } from "@/lib/auth/utils";
import { createGeneration } from "@/lib/api/generations/mutations";
import { GenerationForm } from "./GenerationForm";
import { FormValuesType } from "@/components/tabs/generation/GenerationForm";

export function GenerationTab() {
  async function onSubmit(values: FormValuesType) {
    "use server";
    const { session } = await getUserAuth();

    if (!session) {
      redirect("/sign-in");
    }

    const data = await createGeneration({
      clerkUserId: session?.user.id,
      ...values,
    });

    return data;
  }

  return <GenerationForm onSubmit={onSubmit} />;
}
