import { styled } from '@mui/material/styles';

export const NotFoundWrapper = styled('main')(({ theme }) => ({
    flex: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6, 4),
    ...theme.mixins.flex('center', 'center', 'column'),
}));

export const NotFoundContent = styled('div')(({ theme }) => ({
    ...theme.mixins.flex('center', 'center', 'column', theme.spacing(6)),
}));

export const NotFoundImage = styled('img')(({ theme }) => ({
    width: '100%',
    maxWidth: theme.mixins.toRem(700),
    height: 'auto',
    display: 'block',
    borderRadius: theme.spacing(2),
}));
