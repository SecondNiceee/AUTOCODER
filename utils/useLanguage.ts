"use client"
import { usePathname } from "next/navigation"

export const useLanguage = () => {
    const pathname = usePathname();
    const hasRuPrefix = pathname.startsWith('/ru');
    return hasRuPrefix ? 'ru' : '';
}