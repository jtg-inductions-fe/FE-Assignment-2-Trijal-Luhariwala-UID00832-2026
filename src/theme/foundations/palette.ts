import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

export const palette: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: COLORS.PRIMARY.MAIN,
        light: COLORS.PRIMARY.LIGHT,
        dark: COLORS.PRIMARY.DARK,
        contrastText: COLORS.PRIMARY.CONTRAST_TEXT,
    },
    secondary: {
        main: COLORS.SECONDARY.MAIN,
        light: COLORS.SECONDARY.LIGHT,
        dark: COLORS.SECONDARY.DARK,
        contrastText: COLORS.SECONDARY.CONTRAST_TEXT,
    },
    error: {
        main: COLORS.ERROR.MAIN,
        light: COLORS.ERROR.LIGHT,
        dark: COLORS.ERROR.DARK,
        contrastText: COLORS.ERROR.CONTRAST_TEXT,
    },
    warning: {
        main: COLORS.WARNING.MAIN,
        light: COLORS.WARNING.LIGHT,
        dark: COLORS.WARNING.DARK,
        contrastText: COLORS.WARNING.CONTRAST_TEXT,
    },
    info: {
        main: COLORS.INFO.MAIN,
        light: COLORS.INFO.LIGHT,
        dark: COLORS.INFO.DARK,
        contrastText: COLORS.INFO.CONTRAST_TEXT,
    },
    success: {
        main: COLORS.SUCCESS.MAIN,
        light: COLORS.SUCCESS.LIGHT,
        dark: COLORS.SUCCESS.DARK,
        contrastText: COLORS.SUCCESS.CONTRAST_TEXT,
    },
    background: {
        default: COLORS.BACKGROUND.DEFAULT,
        paper: COLORS.BACKGROUND.PAPER,
    },
    text: {
        primary: COLORS.TEXT.PRIMARY,
        secondary: COLORS.TEXT.SECONDARY,
    },
    divider: COLORS.BORDER,
};
