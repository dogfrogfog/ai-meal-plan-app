import { getWalletByClerkUserId } from "@/lib/api/wallets/queries";
import { getUserAuth } from "@/lib/auth/utils";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export async function TokensCount() {
  const { session } = getUserAuth();

  if (session?.user.id) {
    const { wallet } = await getWalletByClerkUserId(session?.user.id as string);

    return (
      <span className="mr-1 inline-block rounded bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-2 py-1 text-sm text-transparent text-white">
        <Suspense fallback={""}>{wallet?.tokens || 0} tokens</Suspense>
      </span>
    );
  }

  return null;
}
