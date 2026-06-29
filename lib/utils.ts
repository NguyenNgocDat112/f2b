import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function deepNormalizeNFC<T>(obj: T): T {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === "string") {
    return obj.normalize("NFC") as unknown as T;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepNormalizeNFC(item)) as unknown as T;
  }
  if (typeof obj === "object") {
    const newObj: any = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = deepNormalizeNFC(obj[key]);
      }
    }
    return newObj as T;
  }
  return obj;
}

