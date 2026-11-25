import type { Theme } from '@mui/material/styles';
import type { TypographyOptions } from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant';

/**
 * Creates a typography block mapped to the Mobile & Desktop Figma designs.
 * @param theme - Theme object to access breakpoints and mixins.
 * @returns TypographyOptions object with responsive styles.
 */
export const typography = (theme: Theme): TypographyOptions => ({
    fontFamily: `'Inter', 'Segoe UI', Roboto, sans-serif`,
    htmlFontSize: HTML_FONT_SIZE,

    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
        fontSize: theme.mixins.toRem(22),
        fontWeight: 700,
        lineHeight: 1.25,
        letterSpacing: '-0.02em',

        [theme.breakpoints.up('md')]: {
            fontSize: theme.mixins.toRem(26),
        },
    },

    h2: {
        fontSize: theme.mixins.toRem(20),
        fontWeight: 700,
        lineHeight: 1.3,

        [theme.breakpoints.up('md')]: {
            fontSize: theme.mixins.toRem(24),
        },
    },

    h3: {
        fontSize: theme.mixins.toRem(18),
        fontWeight: 500,
        lineHeight: 1.35,

        [theme.breakpoints.up('md')]: {
            fontSize: theme.mixins.toRem(20),
        },
    },

    subtitle1: {
        fontSize: theme.mixins.toRem(14),
        fontWeight: 500,
        lineHeight: 1.4,

        [theme.breakpoints.up('md')]: {
            fontSize: theme.mixins.toRem(16),
        },
    },

    subtitle2: {
        fontSize: theme.mixins.toRem(13),
        fontWeight: 500,
        lineHeight: 1.4,

        [theme.breakpoints.up('md')]: {
            fontSize: theme.mixins.toRem(14),
        },
    },

    body1: {
        fontSize: theme.mixins.toRem(14),
        fontWeight: 400,
        lineHeight: 1.5,

        [theme.breakpoints.up('md')]: {
            fontSize: theme.mixins.toRem(15),
        },
    },

    body2: {
        fontSize: theme.mixins.toRem(12),
        fontWeight: 400,
        lineHeight: 1.45,

        [theme.breakpoints.up('md')]: {
            fontSize: theme.mixins.toRem(14),
        },
    },

    caption: {
        fontSize: theme.mixins.toRem(12),
        fontWeight: 400,
        lineHeight: 1.35,
    },

    button: {
        fontSize: theme.mixins.toRem(13),
        fontWeight: 500,
        lineHeight: 1.4,
        textTransform: 'none',

        [theme.breakpoints.up('md')]: {
            fontSize: theme.mixins.toRem(14),
        },
    },
});
