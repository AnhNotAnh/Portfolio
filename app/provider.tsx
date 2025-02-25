"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function EmailProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
    }, []);
    return children;
}
