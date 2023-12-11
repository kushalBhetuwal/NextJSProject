"use client";
import * as z from "zod";
export const formSchema = z.object({
  title: z.string().min(2).max(50),
  explanation: z.string().min(20).max(3000),
  tags: z.array(z.string().min(4).max(12)).min(1).max(5),
});