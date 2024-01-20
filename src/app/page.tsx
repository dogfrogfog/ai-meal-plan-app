import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { DataTable } from "@/components/DataTable";
import { GenerationTab, TokensTab } from "@/components/tabs";

export default function Home() {
  return (
    <>
      <Tabs defaultValue="generation">
        <div className="flex justify-between mb-24">
          <h1 className="text-4xl font-semibold">Dashboard</h1>
          <TabsList>
            <TabsTrigger value="generation">
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Generation
              </span>
            </TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="tokens">Tokens</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="generation">
          <GenerationTab />
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Recent Recipe Generations</CardTitle>
              <CardDescription>
                AI generated 265 recipes this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tokens">
          <TokensTab />
        </TabsContent>
      </Tabs>
    </>
  );
}
