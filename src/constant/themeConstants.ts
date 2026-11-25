/**
 * GitHub Dark Theme (Primer) color palette.
 * @constant
 */
export const COLORS = {
    PRIMARY: {
        MAIN: '#238636',
        LIGHT: '#2EA043',
        DARK: '#196C2E',
        CONTRAST_TEXT: '#FFFFFF',
    },
    SECONDARY: {
        MAIN: '#58A6FF',
        LIGHT: '#79C0FF',
        DARK: '#1F6FEB',
        CONTRAST_TEXT: '#0D1117',
    },
    ERROR: {
        MAIN: '#DA3633',
        LIGHT: '#F85149',
        DARK: '#B62324',
        CONTRAST_TEXT: '#FFFFFF',
    },
    WARNING: {
        MAIN: '#D29922',
        LIGHT: '#E3B341',
        DARK: '#9E6A03',
        CONTRAST_TEXT: '#0D1117',
    },
    INFO: {
        MAIN: '#58A6FF',
        LIGHT: '#79C0FF',
        DARK: '#1F6FEB',
        CONTRAST_TEXT: '#0D1117',
    },
    SUCCESS: {
        MAIN: '#238636',
        LIGHT: '#3FB950',
        DARK: '#196C2E',
        CONTRAST_TEXT: '#FFFFFF',
    },
    BACKGROUND: {
        DEFAULT: '#0D1117',
        PAPER: '#161B22',
    },
    TEXT: {
        PRIMARY: '#E6EDF3',
        SECONDARY: '#8B949E',
    },
    BORDER: '#30363D',
} as const;

/**
 * Font weights to be used throughout the assignment.
 * @constant
 */
export const FONT_WEIGHT = {
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    BOLD: 700,
} as const;

/**
 * Base font size in pixels (matches html font-size: 62.5%).
 * @constant
 */
export const HTML_FONT_SIZE = 10;

/**
 * Scaling factor used for MUI spacing (1 unit = 4px).
 * @constant
 */
export const SCALING_FACTOR = 4;
