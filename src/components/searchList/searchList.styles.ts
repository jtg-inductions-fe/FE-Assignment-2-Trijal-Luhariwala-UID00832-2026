import { Link as RouterLink } from 'react-router-dom';

import { Avatar, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ResultsWrapper = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: theme.mixins.toRem(640),
    marginInline: 'auto',
    ...theme.mixins.flex('flex-start', 'stretch', 'column', theme.spacing(3)),
}));

export const ResultRow = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3, 4),
    backgroundColor: theme.palette.background.paper,
    border: `${theme.mixins.toRem(1)} solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(2),
    ...theme.mixins.flex('space-between', 'center', 'row', theme.spacing(3)),
    '&:hover': {
        borderColor: theme.palette.secondary.main,
    },
    '& svg': {
        fontSize: theme.mixins.toRem(20),
        color: theme.palette.text.secondary,
    },
}));

export const UserGroup = styled('div')(({ theme }) => ({
    minWidth: 0,
    ...theme.mixins.flex('flex-start', 'center', 'row', theme.spacing(3)),
}));

export const UserAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.mixins.toRem(40),
    height: theme.mixins.toRem(40),
}));

export const UsernameLink = styled(RouterLink)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: theme.mixins.toRem(15),
    fontWeight: 600,
    textDecoration: 'none',
    ...theme.mixins.lineClamp(1),
    '&:hover': {
        textDecoration: 'underline',
    },
}));

export const StatusBox = styled('div')(({ theme }) => ({
    paddingBlock: theme.spacing(8),
    textAlign: 'center',
    ...theme.mixins.flex('center', 'center', 'column', theme.spacing(2)),
}));

export const PaginationBar = styled('nav')(({ theme }) => ({
    paddingTop: theme.spacing(2),
    ...theme.mixins.flex('center', 'center', 'row', theme.spacing(4)),
}));
