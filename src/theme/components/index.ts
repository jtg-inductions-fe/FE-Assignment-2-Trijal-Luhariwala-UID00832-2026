import type { Components } from '@mui/material/styles';

// Local Font files
import InterBoldTtf from '@assets/fonts/inter/inter-bold.ttf';
import InterBoldWoff2 from '@assets/fonts/inter/inter-bold.woff2';
import InterLightTtf from '@assets/fonts/inter/inter-light.ttf';
import InterLightWoff2 from '@assets/fonts/inter/inter-light.woff2';
import InterMediumTtf from '@assets/fonts/inter/inter-medium.ttf';
import InterMediumWoff2 from '@assets/fonts/inter/inter-medium.woff2';
import InterRegularTtf from '@assets/fonts/inter/inter-regular.ttf';
import InterRegularWoff2 from '@assets/fonts/inter/inter-regular.woff2';

export const components: Components = {
  MuiCssBaseline: {
    styleOverrides: `
            html {
              font-size: 62.5%;
              height: 100%;
            }
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
            }`,
    },
};
