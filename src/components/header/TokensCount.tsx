import { getWalletByClerkUserId } from "@/lib/api/wallets/queries";
import { checkAuth, getUserAuth } from "@/lib/auth/utils";

export async function TokensCount() {
  const { session } = await getUserAuth();

  if (session?.user.id) {
    const { wallet } = await getWalletByClerkUserId(session?.user.id as string);

    return <>{wallet?.tokens || 0} tokens</>;
  }

  return null;
}
