/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ztCDb4rMljn
 */
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import React from "react";

export function TokensTab() {
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Tokens left</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-semibold">2000</p>
          {/* <p className="text-sm text-gray-500">~ 10 recipes</p> */}
        </CardContent>
      </Card>

      <div className="flex justify-center gap-8 mt-12">
        <Card className="w-[350px] shadow-lg bg-accent flex justify-between flex-col">
          <div>
            <CardHeader>
              <CardTitle className="flex gap-2 mb-4">
                <GiftIcon className="text-blue-500" />
                750 tokens
              </CardTitle>
              <h3 className="text-3xl font-bold mt-4">Free</h3>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Sign Up bonus</span>
              </div>
            </CardContent>
          </div>
          <CardFooter>
            <Button className="w-full">Pay</Button>
          </CardFooter>
        </Card>
        <Card className="w-[350px] shadow-lg bg-accent border-2 transition-all hover:scale-105 border-purple-400 flex justify-between flex-col">
          <div>
            <CardHeader>
              <CardTitle className="flex gap-2 mb-4">
                <StarIcon className="text-yellow-400" />
                3000 tokens
              </CardTitle>
              <h3 className="text-3xl font-bold mt-4">$3.49</h3>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Benefit</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Benefit</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Benefit</span>
              </div>
            </CardContent>
          </div>
          <CardFooter>
            <Button className="w-full">Pay</Button>
          </CardFooter>
        </Card>
        <Card className="w-[350px] shadow-lg bg-accent flex justify-between flex-col">
          <div>
            <CardHeader>
              <CardTitle className="flex gap-2 mb-4">
                <DeleteIcon className="text-gray-500" />
                10000 tokens
              </CardTitle>
              <h3 className="text-3xl font-bold mt-4">$9.99</h3>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Benefit</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Benefit</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Benefit</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Benefit</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Benefit</span>
              </div>
            </CardContent>
          </div>
          <CardFooter>
            <Button className="w-full">Pay</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function DeleteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function GiftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
