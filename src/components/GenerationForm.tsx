"use client";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createGeneration } from "@/lib/api/generations/mutations";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "./SubmitButton";
import { Textarea } from "@/components/ui/textarea";
import { TOKENS_FOR_1_DAY_GENERATION } from "@/lib/constants";
import Link from "next/link";

const formSchema = z.object({
  days: z.coerce
    .number()
    .min(1, {
      message: "Must be at least 1",
    })
    .max(7, {
      message: "Must be at most 7, sorry",
    })
    .default(1),
  callories: z.coerce
    .number()
    .min(1000, {
      message: "Must be at least 1000",
    })
    .max(5000, {
      message: "Must be at most 5000, sorry",
    })
    .default(2000),
  carbs: z.coerce
    .number()
    .min(50, {
      message: "Must be at least 50",
    })
    .max(500, {
      message: "Must be at most 500, sorry",
    })
    .default(270),
  protein: z.coerce
    .number()
    .min(50, {
      message: "Must be at least 50",
    })
    .max(500, {
      message: "Must be at most 500, sorry",
    })
    .default(110),
  fat: z.coerce
    .number()
    .min(20, {
      message: "Must be at least 20",
    })
    .max(500, {
      message: "Must be at most 500, sorry",
    })
    .default(60),
  productsToExclude: z.string().optional(),
  cuisine: z.string().min(3, {
    message: "Cuisine must be at least 3 characters",
  }),
  // portions: z.coerce.number().min(1, {}).default(1),
});

export type FormValuesType = z.infer<typeof formSchema>;

export function GenerationForm({
  onSubmit,
  tokensAvailable,
}: {
  onSubmit: (
    values: FormValuesType,
    tokensRequired: number
  ) => ReturnType<typeof createGeneration>;
  tokensAvailable: number;
}) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValuesType>({
    resolver: zodResolver(formSchema),
    defaultValues: formSchema.parse({
      callories: 2000,
      carbs: 270,
      protein: 110,
      fat: 60,
      cuisine: "european",
      // portions: 1,
      days: 1,
    }),
  });

  const days = form.watch("days", 1);
  const tokensRequired = days * TOKENS_FOR_1_DAY_GENERATION;
  const isTokenEnough = tokensAvailable >= tokensRequired;

  async function handleSubmit(values: FormValuesType) {
    if (!isTokenEnough) {
      toast({
        title: "Not enough tokens 🥲.",
        description: (
          <div>
            You need {tokensRequired} tokens to generate {days} days plan. Go to{" "}
            <Link
              href="/tokens"
              className="font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white px-1 rounded"
            >
              tokens page
            </Link>{" "}
            to buy more tokens.
          </div>
        ),
      });
      return;
    }

    setIsLoading(true);
    try {
      const { generation } = await onSubmit(values, tokensRequired);

      if (generation) {
        toast({
          title: "Successfully start processing.",
          description: "Please, wait for generation.",
        });
      }
    } catch (e) {
      toast({
        title: "We are testing. Pease, try later.",
        description: (
          <div>
            Subscribe to out X at the meantime -{" "}
            <a
              className="text-xl font-bold hover:underline"
              href="https://x.com/platemateai"
            >
              @platemateai
            </a>
          </div>
        ),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <h2 className="text-2xl mb-8">About you</h2>
        <div className="flex flex-wrap gap-4 mb-12">
          <FormField
            control={form.control}
            name="callories"
            render={({ field }) => (
              <FormItem className="w-48">
                <FormLabel>Callories</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={isLoading}
                    placeholder="2000"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="carbs"
            render={({ field }) => (
              <FormItem className="w-48">
                <FormLabel>Carbs</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={isLoading}
                    placeholder="270"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="protein"
            render={({ field }) => (
              <FormItem className="w-48">
                <FormLabel>Protein</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={isLoading}
                    placeholder="110"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fat"
            render={({ field }) => (
              <FormItem className="w-48">
                <FormLabel>Fat</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={isLoading}
                    placeholder="60"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <h2 className="text-2xl mb-8">About meals</h2>
        <div className="flex flex-wrap gap-4">
          <FormField
            control={form.control}
            name="cuisine"
            render={({ field }) => (
              <FormItem className="w-48">
                <FormLabel>Cuisine</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="European" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"european"}>European</SelectItem>
                      <SelectItem value="asian">Asian</SelectItem>
                      <SelectItem value="american">American</SelectItem>
                      <SelectItem value="mexican">Mexican</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="portions"
            render={({ field }) => (
              <FormItem className="w-48">
                <FormLabel>Number of portions</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={isLoading}
                    placeholder="1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>to create grocery list</FormDescription>
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="days"
            render={({ field }) => (
              <FormItem className="w-48">
                <FormLabel>Number of days</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    disabled={isLoading}
                    placeholder="1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productsToExclude"
            render={({ field }) => (
              <FormItem className="w-[25rem]">
                <FormLabel>Products to exclude</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="eggs, milk, meat" />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  comma separated list of products
                </FormDescription>
              </FormItem>
            )}
          />
        </div>
        <div className="pt-6 flex gap-2 flex-col">
          {/* <div> */}
          {/* <span className="inline-block text-sm bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white py-1 px-2 rounded"> */}
          {/* {" "} */}
          {/* </span> */}
          {/* </div> */}
          {/* <div> */}
          <SubmitButton className="inline-block" isLoading={isLoading}>
            {tokensRequired > 0 ? (
              <>
                Spend <strong>{tokensRequired} tokens</strong> and
              </>
            ) : (
              ""
            )}{" "}
            generate a plan
          </SubmitButton>
          {/* </div> */}
        </div>
      </form>
    </Form>
  );
}
