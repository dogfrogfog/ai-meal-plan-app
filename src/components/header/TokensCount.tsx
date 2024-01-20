import { getWalletByClerkUserId } from "@/lib/api/wallets/queries";
import { checkAuth, getUserAuth } from "@/lib/auth/utils";
import { Suspense } from "react";

export async function TokensCount() {
  await checkAuth();
  const { session } = await getUserAuth();
  const { wallet } = await getWalletByClerkUserId(session?.user.id as string);

  return <Suspense>{wallet?.tokens || 0} tokens</Suspense>;
}
