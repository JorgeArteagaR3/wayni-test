import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPageName = (pathname: string) => {
  if (pathname === "/name") return "Name";
  if (pathname === "/username") return "User Name";
  if (pathname === "/change-password") return "Change Password";
  return "Profile Settings";
};
