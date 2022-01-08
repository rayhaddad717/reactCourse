import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Theme } from '@mui/material/styles/'
//adding pallete types
declare module '@mui/material/styles' {
    interface Theme {
        status?: {
            danger: React.CSSProperties['color']
        }
    }
    interface ThemeOptions {
        status?: {
            danger: React.CSSProperties['color']
        }
    }
}

//adding typography variant

declare module '@mui/material/styles' {
    interface TypographyVariants {
        myvariant: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        myvariant?: React.CSSProperties;
    }

}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        myvariant: true;
    }
}

//adding custom breakpoints
declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        laptop: true;
    }
}

//adding button variant
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        custom: true
    }
}

//creating my theme
const myTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'custom' },
                    style: {
                        textDecoration: 'underline'
                    }

                }]
        }
    },
    transitions: {
        duration: {
            short: 200,
            complex: 600
        },
        easing: {
            easeInOut: 'cubic-bezier(0.4,0,0.2,1)'
        }
    },
    typography: {
        myvariant: {
            fontSize: '3rem',
            textDecoration: 'underline',
            fontWeight: '400',
            letterSpacing: '4'
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            laptop: 700
        }
    },
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            light: '#0066ff',
            main: '#ff00ff',
            contrastText: '#ffcc00',
        },
        contrastThreshold: 3,
        tonalOffset: 0.15,
    },
    status: { danger: '#ff0000' }
})
    ;
const transition = (theme: Theme): string => {
    return `translate(15px,20px)`;
}
//exporting component
export default function themeApp() {
    return (
        <ThemeProvider theme={myTheme}>
            <Button sx={{ color: 'primary.main' }}>Primary</Button>
            <Button sx={{ color: { mobile: 'secondary.main', laptop: 'primary.main' } }}>Secondary</Button>
            <Typography variant="myvariant">Typography</Typography>
            <Button sx={{ color: 'primary.main', transition: (theme) => theme.transitions.create(['transform'], { duration: theme.transitions.duration.short }), "&:hover": { transform: (theme) => transition(theme) } }}>Transition</Button>
            <Button variant="custom">Custom variant</Button>

        </ThemeProvider >
    )
}