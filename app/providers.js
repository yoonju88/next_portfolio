'use client'
import { ThemeProvider } from "./theme-provider"
import PropTypes from 'prop-types';

Providers.PropTypes = {
    children: PropTypes.node.isRequired,
};

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