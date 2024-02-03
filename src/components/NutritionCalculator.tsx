"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

import { calculateNutricionNumbers } from "@/lib/utils";

export default function NutritionCalculator({ onSubmit }: any) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);

  return (
    <div className="rounded scale-90">
      <h1>Nutrition Calculator</h1>
      <div className="my-4 flex">
        <span className="rounded-xl bg-red-100 p-2">
          This is only an estimate, and could not be 100% accurate.
          <br />
          If this information is important, consult with your doctor!
        </span>
      </div>
      <form className="flex flex-wrap gap-4 items-end mb-12">
        <div className="w-48 space-y-2">
          <Label>Weight</Label>
          <Input
            type="number"
            value={weight}
            required
            min={30}
            max={200}
            onChange={(e) => setWeight(parseInt(e.target.value))}
          />
        </div>
        <div className="w-48 space-y-2">
          <Label>Height</Label>
          <Input
            required
            max={250}
            min={150}
            type="number"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
        </div>
        <div className="w-48 space-y-2">
          <Label>Age</Label>
          <Input
            required
            max={80}
            min={18}
            type="number"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </div>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            const result = calculateNutricionNumbers(weight, height, age);
            onSubmit(result);
          }}
        >
          Calculate
        </Button>
      </form>
    </div>
  );
}
