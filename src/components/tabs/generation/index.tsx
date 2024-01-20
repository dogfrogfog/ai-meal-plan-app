import { getUserAuth, checkAuth } from "@/lib/auth/utils";
import { createGeneration } from "@/lib/api/generations/mutations";
import { GenerationForm } from "./GenerationForm";
import { FormValuesType } from "@/components/tabs/generation/GenerationForm";

const ALLOWED_USERS = ["maksim.hodasevich@gmail.com", "platemateai@gmail.com"];

export function GenerationTab() {
  async function onSubmit(values: FormValuesType) {
    "use server";
    await checkAuth();

    const { session } = await getUserAuth();

    if (ALLOWED_USERS.includes(session?.user.email || "")) {
      const data = await createGeneration({
        clerkUserId: session?.user.id as string,
        ...values,
      });

      return data;
    } else {
      throw new Error("We are testing the system. Please, try later.");
    }
  }

  return <GenerationForm onSubmit={onSubmit} />;
}
