import type { Components } from '@mui/material/styles';

import InterBoldTtf from '@assets/fonts/inter/inter-bold.ttf';
import InterBoldWoff2 from '@assets/fonts/inter/inter-bold.woff2';
import InterLightTtf from '@assets/fonts/inter/inter-light.ttf';
// Local Font files
import InterLightWoff2 from '@assets/fonts/inter/inter-light.woff2';
import InterMediumTtf from '@assets/fonts/inter/inter-medium.ttf';
import InterMediumWoff2 from '@assets/fonts/inter/inter-medium.woff2';
import InterRegularTtf from '@assets/fonts/inter/inter-regular.ttf';
import InterRegularWoff2 from '@assets/fonts/inter/inter-regular.woff2';

// TODO: Add necessary font face declarations here
const fontFaceDeclarations = `
       @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        src: url(${InterLightWoff2}) format('woff2'), 
        url(${InterLightTtf}) format('truetype');
      }
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url(${InterRegularWoff2}) format('woff2'), 
        url(${InterRegularTtf}) format('truetype');
      }
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url(${InterMediumWoff2}) format('woff2'), 
        url(${InterMediumTtf}) format('truetype');
      }
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url(${InterBoldWoff2}) format('woff2'), 
        url(${InterBoldTtf}) format('truetype');
      }
    `;

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontSize: '62.5%',
            },
            fontFaceDeclarations,
        },
    },
};
