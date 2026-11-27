import { styled } from '@mui/material/styles';

import { CONTENT_MAX_WIDTH } from '@constant';

export const LayoutRoot = styled('div')(({ theme }) => ({
    minHeight: '100%',
    backgroundColor: theme.palette.background.default,
    ...theme.mixins.flex('flex-start', 'stretch', 'column'),
}));

export const MainContent = styled('main')(({ theme }) => ({
    flex: 1,
    width: '100%',
    maxWidth: theme.mixins.toRem(CONTENT_MAX_WIDTH),
    margin: '0 auto',
    padding: theme.spacing(6, 4),
    ...theme.mixins.flex('flex-start', 'stretch', 'column'),
}));
