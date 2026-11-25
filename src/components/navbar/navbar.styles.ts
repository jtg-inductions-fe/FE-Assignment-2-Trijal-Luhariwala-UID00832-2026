import { Link, NavLink } from 'react-router-dom';

import {
    AppBar,
    Button,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundImage: 'none',
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    maxWidth: theme.mixins.toRem(2000),
    margin: '0 auto',
    minHeight: theme.mixins.toRem(80),
    paddingInline: theme.spacing(4),
    ...theme.mixins.flex('space-between', 'center', 'row'),
}));

export const BrandGroup = styled('div')(({ theme }) => ({
    ...theme.mixins.flex('flex-start', 'center', 'row', theme.spacing(3)),
}));

export const MenuToggleButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: theme.spacing(1),

    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));

export const BrandLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
}));

export const BrandTitle = styled(Typography)({
    display: 'block',
}) as typeof Typography;

export const DesktopNav = styled('nav')(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.up('md')]: {
        ...theme.mixins.flex('flex-end', 'center', 'row', theme.spacing(6)),
    },
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.subtitle1.fontWeight,
    transition: 'color 0.2s ease',

    '&:hover': {
        color: theme.palette.text.primary,
    },

    '&.active': {
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightBold,
    },
}));

export const AuthActionButton = styled(Button)(({ theme }) => ({
    borderColor: theme.palette.divider,
    color: theme.palette.text.primary,
    paddingInline: theme.spacing(4),

    '&:hover': {
        borderColor: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.default,
    },
})) as typeof Button;

export const MobileDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: theme.mixins.toRem(250),
        backgroundColor: theme.palette.background.paper,
        borderRight: `1px solid ${theme.palette.divider}`,
        backgroundImage: 'none',
        padding: theme.spacing(4),
    },

    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(4),
    borderBottom: `1px solid ${theme.palette.divider}`,
    ...theme.mixins.flex('space-between', 'center', 'row'),
}));

export const DrawerNav = styled('nav')(({ theme }) => ({
    ...theme.mixins.flex('flex-start', 'stretch', 'column', theme.spacing(4)),
}));
