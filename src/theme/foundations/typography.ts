import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}rem`,
};

/**
 * Creates a typography block mapped to the Mobile & Desktop Figma designs.
 * @param theme - Theme object to access breakpoints.
 * @returns TypographyOptions object with responsive styles.
 */
const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: `'Inter', 'Segoe UI', Roboto, sans-serif`,
    htmlFontSize: HTML_FONT_SIZE,

    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
        fontSize: typographyUtil.pxToRem(22),
        fontWeight: 700,
        lineHeight: 1.25,
        letterSpacing: '-0.02em',

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(26),
        },
    },

    h2: {
        fontSize: typographyUtil.pxToRem(20),
        fontWeight: 700,
        lineHeight: 1.3,

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(24),
        },
    },

    h3: {
        fontSize: typographyUtil.pxToRem(18),
        fontWeight: 500,
        lineHeight: 1.35,

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(20),
        },
    },

    subtitle1: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 500,
        lineHeight: 1.4,

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(16),
        },
    },

    subtitle2: {
        fontSize: typographyUtil.pxToRem(13),
        fontWeight: 500,
        lineHeight: 1.4,

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(14),
        },
    },

    body1: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: 400,
        lineHeight: 1.5,

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(15),
        },
    },

    body2: {
        fontSize: typographyUtil.pxToRem(12),
        fontWeight: 400,
        lineHeight: 1.45,

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(14),
        },
    },

    caption: {
        fontSize: typographyUtil.pxToRem(12),
        fontWeight: 400,
        lineHeight: 1.35,
    },

    button: {
        fontSize: typographyUtil.pxToRem(13),
        fontWeight: 500,
        lineHeight: 1.4,
        textTransform: 'none',

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(14),
        },
    },
});

export const typography = { typographyStyle, typographyUtil };
