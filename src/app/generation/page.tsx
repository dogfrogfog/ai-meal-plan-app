import { getUserAuth } from "@/lib/auth/utils";
import { createGeneration } from "@/lib/api/generations/mutations";
import { FormValuesType, GenerationForm } from "@/components/GenerationForm";
import { getWalletByClerkUserId } from "@/lib/api/wallets/queries";
import { updateWallet } from "@/lib/api/wallets/mutations";
import { revalidatePath } from "next/cache";
const ALLOWED_USERS = ["maksim.hodasevich@gmail.com", "platemateai@gmail.com"];

export default async function GenerationPage() {
  const { session } = getUserAuth();
  const { wallet } = await getWalletByClerkUserId(session?.user.id as string);

  async function onSubmit(values: FormValuesType, tokensRequired: number) {
    "use server";
    if (ALLOWED_USERS.includes(session?.user.email || "")) {
      const data = await createGeneration({
        clerkUserId: session?.user.id as string,
        createdAt: new Date(),
        updatedAt: new Date(),
        ...values,
      });

      await updateWallet(session?.user.id as string, {
        tokens: wallet.tokens - tokensRequired,
        updatedAt: new Date(),
        isBonusCollected: wallet.isBonusCollected,
      });

      revalidatePath("/");

      return data;
    } else {
      throw new Error("We are testing the system. Please, try later.");
    }
  }

  return <GenerationForm onSubmit={onSubmit} tokensAvailable={wallet.tokens} />;
}
