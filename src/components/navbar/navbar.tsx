import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

import { ROUTES } from '@constant';

import {
    AuthActionButton,
    BrandGroup,
    BrandLink,
    BrandTitle,
    DesktopNav,
    DrawerHeader,
    DrawerNav,
    MenuToggleButton,
    MobileDrawer,
    StyledAppBar,
    StyledNavLink,
    StyledToolbar,
} from './navbar.styles';

export interface NavbarProps {
    isAuthenticated: boolean;
    mobileOpen: boolean;
    onOpenDrawer: () => void;
    onCloseDrawer: () => void;
    onLogout: () => void;
}

const PUBLIC_NAV_ITEMS = [{ label: 'Search', path: ROUTES.HOME }];

const AUTH_NAV_ITEMS = [
    { label: 'Search', path: ROUTES.HOME },
    { label: 'Suggestions', path: ROUTES.SUGGESTIONS },
    { label: 'Profile', path: ROUTES.PROFILE },
];

export const Navbar = ({
    isAuthenticated,
    mobileOpen,
    onOpenDrawer,
    onCloseDrawer,
    onLogout,
}: NavbarProps) => {
    const navItems = isAuthenticated ? AUTH_NAV_ITEMS : PUBLIC_NAV_ITEMS;

    const handleLogoutClick = () => {
        onCloseDrawer();
        onLogout();
    };

    return (
        <>
            <StyledAppBar position="sticky" elevation={0}>
                <StyledToolbar>
                    <BrandGroup>
                        <MenuToggleButton
                            edge="start"
                            aria-label="Open navigation menu"
                            aria-expanded={mobileOpen}
                            onClick={onOpenDrawer}
                        >
                            <MenuIcon />
                        </MenuToggleButton>

                        <BrandLink to={ROUTES.HOME}>
                            <BrandTitle component="span" variant="h1">
                                GitHub Explorer
                            </BrandTitle>
                        </BrandLink>
                    </BrandGroup>

                    <DesktopNav aria-label="Main navigation">
                        {navItems.map((item) => (
                            <StyledNavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === ROUTES.HOME}
                            >
                                {item.label}
                            </StyledNavLink>
                        ))}

                        {isAuthenticated ? (
                            <AuthActionButton
                                variant="outlined"
                                onClick={onLogout}
                            >
                                Logout
                            </AuthActionButton>
                        ) : (
                            <AuthActionButton
                                component={Link}
                                to={ROUTES.LOGIN}
                                variant="outlined"
                            >
                                Login
                            </AuthActionButton>
                        )}
                    </DesktopNav>
                </StyledToolbar>
            </StyledAppBar>

            <MobileDrawer
                anchor="left"
                open={mobileOpen}
                onClose={onCloseDrawer}
            >
                <DrawerHeader>
                    <BrandLink to={ROUTES.HOME} onClick={onCloseDrawer}>
                        <BrandTitle component="span" variant="h3">
                            GitHub Explorer
                        </BrandTitle>
                    </BrandLink>

                    <IconButton
                        aria-label="Close navigation menu"
                        onClick={onCloseDrawer}
                        color="inherit"
                    >
                        <CloseIcon />
                    </IconButton>
                </DrawerHeader>

                <DrawerNav aria-label="Mobile navigation">
                    {navItems.map((item) => (
                        <StyledNavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === ROUTES.HOME}
                            onClick={onCloseDrawer}
                        >
                            {item.label}
                        </StyledNavLink>
                    ))}

                    {isAuthenticated ? (
                        <AuthActionButton
                            variant="outlined"
                            fullWidth
                            onClick={handleLogoutClick}
                        >
                            Logout
                        </AuthActionButton>
                    ) : (
                        <AuthActionButton
                            component={Link}
                            to={ROUTES.LOGIN}
                            variant="outlined"
                            fullWidth
                            onClick={onCloseDrawer}
                        >
                            Login
                        </AuthActionButton>
                    )}
                </DrawerNav>
            </MobileDrawer>
        </>
    );
};
