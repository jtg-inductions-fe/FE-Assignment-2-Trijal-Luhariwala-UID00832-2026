import type { CSSProperties } from 'react';

declare module '@mui/material/styles' {
    interface Mixins {
        lineClamp: (lines?: number) => CSSProperties;
        flex: (
            justifyContent?: CSSProperties['justifyContent'],
            alignItems?: CSSProperties['alignItems'],
            flexDirection?: CSSProperties['flexDirection'],
            gap?: CSSProperties['gap'],
        ) => CSSProperties;
        toRem: (px: number, base?: number) => string;
    }
}
