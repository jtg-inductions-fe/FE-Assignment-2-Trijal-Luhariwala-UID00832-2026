import { createTheme } from '@mui/material/styles';

import { SCALING_FACTOR } from '@constant';

import { components } from './components';
import { breakpoints, mixins, palette, typography } from './foundations';

/*
Initialize base theme first so breakpoints and mixins.toRem are available
for typography and spacing calculations.
*/
const baseTheme = createTheme({
    palette,
    breakpoints,
    mixins,
});

export const theme = createTheme({
    palette,
    breakpoints,
    mixins,
    components,
    typography: typography(baseTheme),
    spacing: (factor: number) =>
        baseTheme.mixins.toRem(factor * SCALING_FACTOR),
});
