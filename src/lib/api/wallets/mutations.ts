import { db } from "@/lib/db/index";
import { insertWalletSchema, wallets, NewWallet } from "@/lib/db/schema/wallet";

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
