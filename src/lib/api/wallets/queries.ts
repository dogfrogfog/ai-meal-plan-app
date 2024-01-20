import { db } from "@/lib/db/index";
import { eq } from "drizzle-orm";
import {
  wallets,
  WalletClerkUserId,
  walletClerkUserIdSchema,
} from "@/lib/db/schema/wallet";

// export const getWallets = async () => {
//   const g = await db.select().from(wallets);
//   return { generations: g };
// };

export const getWalletByClerkUserId = async (id: WalletClerkUserId) => {
  const { clerkUserId: walletClerkUserId } = walletClerkUserIdSchema.parse({
    clerkUserId: id,
  });
  const [w] = await db
    .select()
    .from(wallets)
    .where(eq(wallets.clerkUserId, walletClerkUserId));

  return { wallet: w };
};
