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

export default function Dashboard() {
  return (
    <>
      <Tabs defaultValue="new-recipe">
        <div className="flex justify-between mb-24">
          <h1 className="text-4xl font-semibold">Dashboard</h1>
          <TabsList>
            <TabsTrigger value="new-recipe">New recipe</TabsTrigger>
            <TabsTrigger value="generations">Generations</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="new-recipe">
          <div className="grid grid-cols-3 gap-6 mb-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Tokens left</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">2000</p>
                {/* <p className="text-sm text-gray-500">~ 10 recipes</p> */}
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Generated recipes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">7</p>
                {/* <p className="text-sm text-gray-500">and additional 45</p> */}
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Saved time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold mb-1">300 minutes</p>
                <p className="text-sm text-gray-500">+19% from last month</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Form</CardTitle>
            </CardHeader>
            <CardContent>
              form fields
              <br />
              <br />
              form fields
              <br />
              <br />
              form fields
              <br />
              <br />
              form fields
              <br />
              <br />
              <Button>Generate recipe</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="generations">
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
        <TabsContent value="settings">Stripe page</TabsContent>
      </Tabs>
    </>
  );
}
