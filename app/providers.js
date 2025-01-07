'use client'
import { ThemeProvider } from "./theme-provider"
import { Toaster } from '@/components/ui/toaster';


export default function Providers({ children }) {
    return (
        <>
            <Toaster />
            <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </>

    )
}