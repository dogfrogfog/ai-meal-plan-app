import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateNutricionNumbers(
  weight: number,
  height: number,
  age: number
) {
  const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  const tdee = bmr * 1.55;
  const protein = weight * 2.2;
  const fat = weight * 0.3;

  // Correct formula for calculating carbohydrates
  const carbs = (tdee - (protein * 4 + fat * 9)) / 4;

  return {
    bmr,
    tdee,
    protein,
    fat,
    carbs,
  };
}
