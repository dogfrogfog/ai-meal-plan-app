import { redirect } from "next/navigation";
import { checkAuth, getUserAuth } from "@/lib/auth/utils";
import { updateWallet } from "@/lib/api/wallets/mutations";
import { getWalletByClerkUserId } from "@/lib/api/wallets/queries";
import { FREE_TOKENS_NUMBER } from "@/lib/constants";
import { SubmitButton } from "./SubmitButton";

export async function ClaimFreeTokensForm() {
  await checkAuth();
  const { session } = await getUserAuth();
  const { wallet } = await getWalletByClerkUserId(session?.user.id as string);

  if (wallet?.isBonusCollected) {
    return (
      <div className="w-full text-center">
        <p className="text-xl font-bold leading-10">Claimed 🎉</p>
      </div>
    );
  }

  async function handleClaimFreeTokens() {
    "use server";
    const { wallet } = await updateWallet(session?.user.id as string, {
      updatedAt: new Date(),
      tokens: FREE_TOKENS_NUMBER,
      isBonusCollected: true,
    });

    if (wallet) {
      redirect("/");
    }
  }

  return (
    <form action={handleClaimFreeTokens} className="w-full">
      <SubmitButton className="w-full px-6 py-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
        Claim FREE tokens
      </SubmitButton>
    </form>
  );
}
