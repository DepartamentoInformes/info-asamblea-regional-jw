import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// Type helper to overwrite
export type Overwrite<T, U> = Omit<T, keyof U> & U

// Generic rename keys function
export function renameKeys<T extends Record<string, any>>(obj: T, keyMap: Partial<Record<keyof T, string>>) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = keyMap[key as keyof T] || key
    acc[newKey] = value
    return acc
  }, {} as Record<string, any>)
}

// Detect device type
export const getDeviceType = (androidUrl: string, iosUrl: string, webUrl: string | null = null) => {
  if (typeof window === undefined) return androidUrl

  const userAgent = navigator.userAgent

  if (/android/i.test(userAgent)) {
    return androidUrl
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return iosUrl
  }

  return webUrl || androidUrl
}
