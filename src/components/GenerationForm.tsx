"use client";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { createGeneration } from "@/lib/api/generations/mutations";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "./SubmitButton";

const formSchema = z.object({
  prompt: z.string().min(2, {
    message: "Prompt must be at least 2 characters.",
  }),
});

export type FormValuesType = z.infer<typeof formSchema>;

export function GenerationForm({
  onSubmit,
}: {
  onSubmit: (values: FormValuesType) => ReturnType<typeof createGeneration>;
}) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValuesType>({
    resolver: zodResolver(formSchema),
  });

  async function handleSubmit(values: FormValuesType) {
    setIsLoading(true);
    try {
      const { generation } = await onSubmit(values);

      if (generation) {
        toast({
          title: "Successfully start processing.",
          description: "Please, wait for generation.",
        });
      }
    } catch (e) {
      toast({
        title: "We are testing. Pease, try later.",
        description: "Subscribe to out X at the meantime - @platemateai",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>prompt</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="I want to eat 2000 callories a day. Provide me with a meal plan for 3 days."
                  // placeholder="Demo prompt lorem ipsum"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-12">
          <SubmitButton>Generate plan</SubmitButton>
        </div>
      </form>
    </Form>
  );
}
