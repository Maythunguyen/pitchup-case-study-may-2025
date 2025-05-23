// Content type for FQAS

export type Category = "school" | "community" | "all";

export interface FAQItem {
  id: string;
  category: Exclude<Category, "all">;
  question: string;
  answer: string;
}
