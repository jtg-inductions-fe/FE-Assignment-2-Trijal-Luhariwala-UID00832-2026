import { styled } from '@mui/material/styles';

export const NotFoundWrapper = styled('main')(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6, 4),
    ...theme.mixins.flex('center', 'center', 'column'),
}));

export const NotFoundContent = styled('div')(({ theme }) => ({
    ...theme.mixins.flex('center', 'center', 'column', theme.spacing(6)),
}));

export const NotFoundImage = styled('img')(({ theme }) => ({
    width: '100%',
    maxWidth: '64rem',
    height: 'auto',
    display: 'block',
    borderRadius: theme.spacing(2),
}));
