import { DataTable } from "@/components/DataTable";
import { getGenerationsByClerkUserId } from "@/lib/api/generations/queries";
import { getUserAuth, checkAuth } from "@/lib/auth/utils";

export default async function HistoryPage() {
  checkAuth();
  const { session } = getUserAuth();
  if (!session) return null;

  const { generations } = await getGenerationsByClerkUserId(session.user.id);

  console.log("passing to dataTAbel", generations);
  return (
    // @ts-ignore
    <DataTable data={generations.sort((a, b) => b?.createdAt - a?.createdAt)} />
  );
}
