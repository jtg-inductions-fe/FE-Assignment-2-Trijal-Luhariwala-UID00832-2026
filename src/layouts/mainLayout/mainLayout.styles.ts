import { styled } from '@mui/material/styles';

export const LayoutRoot = styled('div')(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    ...theme.mixins.flex('flex-start', 'stretch', 'column'),
}));

export const MainContent = styled('main')(({ theme }) => ({
    flex: 1,
    width: '100%',
    maxWidth: '120rem',
    margin: '0 auto',
    padding: theme.spacing(6, 4),
    ...theme.mixins.flex('flex-start', 'stretch', 'column'),
}));
