import PresentingMan from "@/components/icons/PresentingMan";
import GirlHuggingPlate from "@/components/icons/GirlHuggingPlate";
import HappyMan from "@/components/icons/HappyMan";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default async function GenerationPage() {
  return (
    <div>
      <div className="flex gap-6 m-6 md:m-12 md:flex-row items-center flex-wrap justify-center">
        <div>
          <PresentingMan className="w-48 h-48 mx-auto md:w-64 md:h-64" />
          <p className="m-3 text-center">
            Save your <strong>MONEY</strong>
          </p>
        </div>
        <div>
          <GirlHuggingPlate className="w-48 h-48 mx-auto md:w-64 md:h-64" />
          <p className="m-3 text-center">
            Eat <strong>AWESOME FOOD</strong>
          </p>
        </div>
        <div>
          <HappyMan className="w-48 h-48 mx-auto md:w-64 md:h-64" />
          <p className="m-3 text-center">
            Have your <strong>TIME BACK</strong>
          </p>
        </div>
      </div>
      <SignedOut>
        <div className="flex">
          <Link
            href="/sign-up"
            className="btn relative inline-block font-medium group p-6 text-2xl mx-auto"
          >
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-red-300"></span>
            <span className="relative text-black group-hover:text-white">
              Sign Up in seconds and get FREE tokens 🎉!
            </span>
          </Link>
        </div>
      </SignedOut>
    </div>
  );
}
