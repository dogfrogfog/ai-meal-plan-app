import { GenerationForm } from "./GenerationForm";

export function GenerationTab() {
  async function onSubmit() {
    "use server";
  }

  return <GenerationForm onSubmit={onSubmit} />;
}
