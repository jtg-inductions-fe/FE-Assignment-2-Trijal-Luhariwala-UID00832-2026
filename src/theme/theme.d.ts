export declare module '@mui/material/styles/createMixins' {
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
