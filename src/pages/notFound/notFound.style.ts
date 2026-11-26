import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NotFoundWrapper = styled('div')(({ theme }) => ({
    flex: 1,
    height: '100vh',
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

export const HiddenHeading = styled(Typography)({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    border: 0,
});
