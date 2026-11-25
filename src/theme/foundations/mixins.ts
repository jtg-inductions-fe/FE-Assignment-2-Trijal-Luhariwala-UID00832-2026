import type {
    CSSProperties,
    MixinsOptions,
} from '@mui/material/styles/createMixins';

import { HTML_FONT_SIZE } from '@constant';

/**
 * Creates a CSS block for clamping text to a specified number of lines
 * @param lines - Number of lines to clamp
 * @returns Line clamp CSS properties
 */
const lineClamp = (lines: number = 1): CSSProperties => ({
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines,
});

/**
 * Creates a flexbox CSS block with customizable alignment and direction
 * @param justifyContent - Horizontal/main-axis alignment
 * @param alignItems - Vertical/cross-axis alignment
 * @param flexDirection - Flex direction
 * @param gap - Optional spacing between flex items
 * @returns Flex CSS properties
 */
const flex = (
    justifyContent: CSSProperties['justifyContent'] = 'center',
    alignItems: CSSProperties['alignItems'] = 'center',
    flexDirection: CSSProperties['flexDirection'] = 'row',
    gap?: CSSProperties['gap'],
): CSSProperties => ({
    display: 'flex',
    justifyContent,
    alignItems,
    flexDirection,
    ...(gap !== undefined && { gap }),
});

/**
 * Converts a pixel value to rem based on html font-size: 62.5% (1rem = 10px)
 * @param px - Value in pixels
 * @param base - Base root font size in px (defaults to HTML_FONT_SIZE)
 * @returns Formatted rem string (e.g., '1.6rem')
 */
export const toRem = (px: number, base: number = HTML_FONT_SIZE): string =>
    `${px / base}rem`;

export const mixins: MixinsOptions = {
    lineClamp,
    flex,
    toRem,
};
