import { ClaimFreeTokensForm } from "@/components/ClaimFreeTokensForm";
import { PaymentQueryStatusToast } from "@/components/PaymentQueryStatusToast";
import { StripeCheckoutButton } from "@/components/StripeCheckoutButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FREE_TOKENS_NUMBER } from "@/lib/constants";
import { auth } from "@clerk/nextjs";
import React, { Suspense } from "react";

export default function TokensPage() {
  const { userId } = auth();

  return (
    <>
      <div className="pt-1">
        <div className="flex justify-center gap-6">
          <Card className="bg-accent flex w-[350px] flex-col justify-between shadow-lg transition-all hover:scale-105">
            <div>
              <CardHeader>
                <CardTitle className="mb-4 flex gap-2">
                  <GiftIcon className="text-blue-500" />
                  {FREE_TOKENS_NUMBER} tokens
                </CardTitle>
                <h3 className="mt-4 text-3xl font-bold">Free</h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <CheckIcon className="text-green-500" />
                  <span>Grab a bonus</span>
                </div>
              </CardContent>
            </div>
            <CardFooter>
              <Suspense>
                <ClaimFreeTokensForm />
              </Suspense>
            </CardFooter>
          </Card>
          <Card className="bg-accent flex w-[350px] flex-col justify-between border-2 border-purple-400 shadow-lg transition-all hover:scale-105">
            <div>
              <CardHeader>
                <CardTitle className="mb-4 flex gap-2">
                  <StarIcon className="text-yellow-400" />
                  5000 tokens
                </CardTitle>
                <h3 className="mt-4 text-3xl font-bold">$3.99</h3>
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
              {userId && (
                <StripeCheckoutButton
                  userId={userId}
                  priceInCents={399}
                  productName="Pack of 5000 generation tokens 🪄"
                />
              )}
            </CardFooter>
          </Card>
          <Card className="bg-accent flex w-[350px] flex-col justify-between shadow-lg transition-all hover:scale-105">
            <div>
              <CardHeader>
                <CardTitle className="mb-4 flex gap-2">
                  <DeleteIcon className="text-gray-500" />
                  15000 tokens
                </CardTitle>
                <h3 className="mt-4 text-3xl font-bold">$9.99</h3>
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
              {userId && (
                <StripeCheckoutButton
                  userId={userId}
                  priceInCents={999}
                  productName="The biggest pack of 15000 generation tokens 🦾"
                />
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
      <PaymentQueryStatusToast />
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
