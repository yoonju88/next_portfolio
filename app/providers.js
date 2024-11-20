'use client'
import { ThemeProvider } from "./theme-provider"

export default function providers({ children }) {
    return (
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    )
}