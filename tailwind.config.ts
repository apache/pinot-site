import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

const config = {
    content: [
        './node_modules/pliny/**/*.js',
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{html,js,ts,tsx}',
        './components/**/*.{html,js,ts,tsx}',
        './layouts/**/*.{js,ts,tsx}',
        './data/**/*.mdx',
        './src/**/*.{js,ts,tsx}'
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            lineHeight: {
                11: '2.75rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem'
            },
            fontFamily: {
                sans: ['var(--custom-font-work-sans)', ...fontFamily.sans]
            },
            colors: {
                crimson: {
                    100: 'hsla(342, 81%, 43%, 1)'
                },
                stone: colors.stone,
                vine: {
                    100: 'hsla(120, 100%, 25%, 1)',
                    120: 'hsla(120, 100%, 20%, 1)'
                },
                gray: colors.gray,
                blue: colors.blue,
                'maroon-flush': {
                    '50': 'hsl(351, 100%, 97%)',
                    '100': 'hsl(353, 100%, 95%)',
                    '200': 'hsl(350, 92%, 90%)',
                    '300': 'hsl(349, 94%, 82%)',
                    '400': 'hsl(348, 93%, 71%)',
                    '500': 'hsl(347, 87%, 60%)',
                    '600': 'hsl(344, 76%, 50%)',
                    '700': 'hsl(342, 81%, 43%)',
                    '800': 'hsl(340, 77%, 35%)',
                    '900': 'hsl(339, 74%, 30%)',
                    '950': 'hsl(340, 85%, 16%)'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                    // kBar local search references primary color. Alternatively, we could import and change kBar's source code:
                    // https://github.com/timlrx/pliny/blob/main/packages/pliny/src/search/index.tsx
                    // ...colors.pink
                    ...colors.stone
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                }
            },
            // colors: {
            //     primary: colors.pink,
            //     gray: colors.gray,
            // },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        a: {
                            color: theme('colors.blue.500'),
                            '&:hover': {
                                color: `${theme('colors.blue.600')}`
                            },
                            code: { color: theme('colors.blue.400') },
                            overflowWrap: 'break-word',
                            wordBreak: 'break-word'
                        },
                        'h1,h2': {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight')
                        },
                        h3: {
                            fontWeight: '600'
                        },
                        code: {
                            color: theme('colors.indigo.500')
                        },
                        p: {
                            overflowWrap: 'break-word',
                            wordBreak: 'break-word'
                        }
                    }
                },
                invert: {
                    css: {
                        a: {
                            color: theme('colors.blue.500'),
                            '&:hover': {
                                color: `${theme('colors.blue.400')}`
                            },
                            code: { color: theme('colors.blue.400') }
                        },
                        'h1,h2,h3,h4,h5,h6': {
                            color: theme('colors.gray.100')
                        }
                    }
                }
            })
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
            '4xl': '2560px',
            '5xl': '3840px',
            '6xl': '5120px',
            '7xl': '7680px',
            customDesktop: '1728px',
            liveArea: '1224px',
            outerLiveArea: '1400px'
        }
    },
    corePlugins: {
        aspectRatio: false
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('tailwindcss-animate')
    ]
} satisfies Config;

export default config;
