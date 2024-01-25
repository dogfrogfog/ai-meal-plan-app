import { getWalletByClerkUserId } from "@/lib/api/wallets/queries";
import { getUserAuth } from "@/lib/auth/utils";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export async function TokensCount() {
  const { session } = await getUserAuth();

  if (session?.user.id) {
    const { wallet } = await getWalletByClerkUserId(session?.user.id as string);

    return (
      <span className="text-sm mr-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 inline-block text-transparent text-white py-1 px-2 rounded">
        <Suspense fallback={""}>{wallet?.tokens || 0} tokens</Suspense>
      </span>
    );
  }

  return null;
}
