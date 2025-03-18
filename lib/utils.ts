import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrenyToToman(amount: number) {
  if (isNaN(amount)) return "مقدار نامعتبر";

  return amount.toLocaleString("fa-IR");
}
