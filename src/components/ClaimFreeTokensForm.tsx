import { checkAuth, getUserAuth } from "@/lib/auth/utils";
import { getWalletByClerkUserId } from "@/lib/api/wallets/queries";
import { createWallet } from "@/lib/api/wallets/mutations";
import { SubmitButton } from "./SubmitButton";
import { redirect } from "next/navigation";

export async function ClaimFreeTokensForm() {
  await checkAuth();
  const { session } = await getUserAuth();
  const { wallet } = await getWalletByClerkUserId(session?.user.id as string);

  async function handleClaimFreeTokens() {
    "use server";
    const { wallet } = await createWallet({
      clerkUserId: session?.user.id as string,
    });

    if (wallet) {
      redirect("/");
    }
  }

  return (
    !wallet && (
      <form action={handleClaimFreeTokens} className="w-full">
        <SubmitButton className="w-full px-6 py-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
          Claim FREE tokens
        </SubmitButton>
      </form>
    )
  );
}
