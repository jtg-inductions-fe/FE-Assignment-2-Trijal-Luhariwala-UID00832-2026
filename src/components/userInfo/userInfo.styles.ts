import { Avatar, Link, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardRoot = styled(Paper)(({ theme }) => ({
    width: '100%',
    maxWidth: theme.mixins.toRem(720),
    marginInline: 'auto',
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.paper,
    border: `${theme.mixins.toRem(1)} solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(3),
    ...theme.mixins.flex('flex-start', 'stretch', 'column', theme.spacing(5)),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(7),
    },
}));

export const CardHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.flex(
        'flex-start',
        'flex-start',
        'column',
        theme.spacing(4),
    ),
    [theme.breakpoints.up('md')]: {
        ...theme.mixins.flex(
            'space-between',
            'center',
            'row',
            theme.spacing(5),
        ),
    },
}));

export const IdentityGroup = styled('div')(({ theme }) => ({
    ...theme.mixins.flex('flex-start', 'center', 'row', theme.spacing(4)),
}));

export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.mixins.toRem(72),
    height: theme.mixins.toRem(72),
    border: `${theme.mixins.toRem(2)} solid ${theme.palette.divider}`,
    [theme.breakpoints.up('md')]: {
        width: theme.mixins.toRem(96),
        height: theme.mixins.toRem(96),
    },
}));

export const StatsRow = styled('div')(({ theme }) => ({
    padding: theme.spacing(3, 4),
    backgroundColor: theme.palette.background.default,
    border: `${theme.mixins.toRem(1)} solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(2),
    flexWrap: 'wrap',
    ...theme.mixins.flex('flex-start', 'center', 'row', theme.spacing(5)),
    '& svg': {
        fontSize: theme.mixins.toRem(18),
        color: theme.palette.text.secondary,
    },
}));

export const StatItem = styled('div')(({ theme }) => ({
    ...theme.mixins.flex('flex-start', 'center', 'row', theme.spacing(1.5)),
}));

export const MetaList = styled('div')(({ theme }) => ({
    ...theme.mixins.flex('flex-start', 'stretch', 'column', theme.spacing(3)),
}));

export const MetaRow = styled('div')(({ theme }) => ({
    ...theme.mixins.flex('flex-start', 'center', 'row', theme.spacing(2.5)),
    '& svg': {
        fontSize: theme.mixins.toRem(18),
        color: theme.palette.text.secondary,
        flexShrink: 0,
    },
}));

export const MetaLink = styled(Link)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: theme.mixins.toRem(14),
    textDecoration: 'none',
    wordBreak: 'break-all',
    '&:hover': {
        textDecoration: 'underline',
    },
}));
