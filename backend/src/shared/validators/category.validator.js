import { z } from "zod";

// Helper to trim strings
const trimmedString = () =>
  z.preprocess((val) => (typeof val === "string" ? val.trim() : val), z.string());

// Fixed categories array
export const FIXED_CATEGORIES = ["MEN", "WOMEN", "KIDS", "OFFICE", "GIFT IDEAS"];

// Schema for creating a category
export const createCategorySchema = z.object({
  type: trimmedString().optional().refine(
    (val) => !val || FIXED_CATEGORIES.includes(val.toUpperCase()),
    { message: "Invalid type" }
  ),
  name: trimmedString(),
  parentCategory: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  // Optional collection image URL (admin may pass as string or via multipart file)
  collectionImageUrl: z.string().optional().nullable(),
  // Accept boolean or string ('true'/'false') from multipart FormData
  isActive: z.preprocess((val) => {
    if (typeof val === 'string') return val === 'true'
    if (typeof val === 'boolean') return val
    return val
  }, z.boolean().optional()),
  // Accept numeric values or numeric strings for sortOrder
  sortOrder: z.preprocess((val) => {
    if (typeof val === 'string' && val.trim() !== '') return Number(val)
    return val
  }, z.number().optional())
});

// Schema for updating a category
export const updateCategorySchema = z.object({
  type: trimmedString().optional().refine(
    (val) => !val || FIXED_CATEGORIES.includes(val.toUpperCase()),
    { message: "Invalid type" }
  ),
  name: trimmedString().optional(),
  parentCategory: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  collectionImageUrl: z.string().optional().nullable(),
  isActive: z.preprocess((val) => {
    if (typeof val === 'string') return val === 'true'
    if (typeof val === 'boolean') return val
    return val
  }, z.boolean().optional()),
  sortOrder: z.preprocess((val) => {
    if (typeof val === 'string' && val.trim() !== '') return Number(val)
    return val
  }, z.number().optional())
});
