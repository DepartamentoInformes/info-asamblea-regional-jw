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
  // Si estamos en servidor (SSR), retornar webUrl o androidUrl como fallback
  if (typeof window === 'undefined') {
    return webUrl || androidUrl
  }

  const userAgent = navigator.userAgent

  // Detectar Android
  if (/android/i.test(userAgent)) {
    return androidUrl
  }

  // Detectar iOS (iPhone, iPad, iPod)
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return iosUrl
  }

  // Desktop o cualquier otro dispositivo: usar webUrl
  return webUrl || androidUrl
}
