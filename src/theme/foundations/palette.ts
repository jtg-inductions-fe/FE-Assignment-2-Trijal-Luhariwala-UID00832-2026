import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

export const palette: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: COLORS.PRIMARY.MAIN,
        light: COLORS.PRIMARY.LIGHT,
    },
    secondary: {
        main: COLORS.SECONDARY.MAIN,
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
    error: {
        main: COLORS.ERROR,
    },
};
