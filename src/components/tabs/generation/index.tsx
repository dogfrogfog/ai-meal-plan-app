import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function GenerationTab() {
  return (
    <>
      {/* <div className="grid grid-cols-3 gap-6 mb-6"> */}
      {/* <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Tokens left</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">2000</p>
            {/* <p className="text-sm text-gray-500">~ 10 recipes</p> */}
      {/* </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Generated recipes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">7</p>
            {/* <p className="text-sm text-gray-500">and additional 45</p> */}
      {/* </CardContent> */}
      {/* </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Saved time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold mb-1">300 minutes</p>
            <p className="text-sm text-gray-500">+19% from last month</p>
          </CardContent>
        </Card> */}
      {/* </div> */}
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
    </>
  );
}
