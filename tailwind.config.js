import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
        './app/Filament/**/*.php',
        './app/Livewire/**/*.php',
        './app/View/Components/**/*.php',
        './vendor/filament/**/*.blade.php',
    ],
    theme: {
        extend: {
            // HomeAir Plus brand palette (Blue 500 primary)
            colors: {
                brand: {
                    50:  '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                },
                ink: {
                    DEFAULT: '#0f172a',
                    muted: '#475569',
                    soft: '#64748b',
                },
                surface: {
                    DEFAULT: '#ffffff',
                    alt: '#f8fafc',
                    sunken: '#f1f5f9',
                    dark: '#0b1220',
                    'dark-alt': '#111a2e',
                },
                success: '#10b981',
                warning: '#f59e0b',
                danger:  '#ef4444',
                info:    '#0ea5e9',
            },
            fontFamily: {
                sans: ['Kanit', ...defaultTheme.fontFamily.sans],
                display: ['Kanit', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms, typography],
};
