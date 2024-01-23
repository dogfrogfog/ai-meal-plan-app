import { db } from "@/lib/db/index";
import {
  insertWalletSchema,
  wallets,
  NewWallet,
  WalletClerkUserId,
  walletClerkUserIdSchema,
  updateWalletSchema,
  UpdateWallet,
} from "@/lib/db/schema/wallet";
import { eq } from "drizzle-orm";

export const createWallet = async (wallet: NewWallet) => {
  const newWallet = insertWalletSchema.parse(wallet);
  try {
    const [w] = await db.insert(wallets).values(newWallet).returning();
    return { wallet: w };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const updateWallet = async (
  clerkUserId: WalletClerkUserId,
  wallet: UpdateWallet
) => {
  const { clerkUserId: walletClerkUserId } = walletClerkUserIdSchema.parse({
    clerkUserId,
  });
  const updatedWallet = updateWalletSchema.parse(wallet);
  try {
    const [w] = await db
      .update(wallets)
      .set(updatedWallet)
      .where(eq(wallets.clerkUserId, walletClerkUserId!))
      .returning();
    return { wallet: w };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};
