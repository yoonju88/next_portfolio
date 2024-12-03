'use client'
import { ThemeProvider } from "./theme-provider"

export default function Providers({ children }) {
    return (
        <ThemeProvider
            attribute='class'
            defaultTheme
            enableSystem={true}
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    )
}