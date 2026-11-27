import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';

import { APP_CONFIG, getNavItems, type NavItem, ROUTES } from '@constant';

import {
    AuthActionButton,
    BrandGroup,
    BrandLink,
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

interface NavContentProps {
    navItems: readonly NavItem[];
    isAuthenticated: boolean;
    onLogout: () => void;
    onItemClick?: () => void;
    fullWidthAction?: boolean;
}

const NavContent = ({
    navItems,
    isAuthenticated,
    onLogout,
    onItemClick,
    fullWidthAction = false,
}: NavContentProps) => {
    const handleLogoutClick = () => {
        onItemClick?.();
        onLogout();
    };

    return (
        <>
            {navItems.map((item) => (
                <StyledNavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === ROUTES.HOME}
                    onClick={onItemClick}
                >
                    {item.label}
                </StyledNavLink>
            ))}

            {isAuthenticated ? (
                <AuthActionButton
                    variant="outlined"
                    fullWidth={fullWidthAction}
                    onClick={handleLogoutClick}
                >
                    Logout
                </AuthActionButton>
            ) : (
                <AuthActionButton
                    component={Link}
                    to={ROUTES.LOGIN}
                    variant="outlined"
                    fullWidth={fullWidthAction}
                    onClick={onItemClick}
                >
                    Login
                </AuthActionButton>
            )}
        </>
    );
};

export const Navbar = ({
    isAuthenticated,
    mobileOpen,
    onOpenDrawer,
    onCloseDrawer,
    onLogout,
}: NavbarProps) => {
    const navItems = getNavItems(isAuthenticated);

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
                            <Typography component="span" variant="h1">
                                {APP_CONFIG.APP_NAME}
                            </Typography>
                        </BrandLink>
                    </BrandGroup>

                    <DesktopNav aria-label="Main navigation">
                        <NavContent
                            navItems={navItems}
                            isAuthenticated={isAuthenticated}
                            onLogout={onLogout}
                        />
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
                        <Typography component="span" variant="h3">
                            {APP_CONFIG.APP_NAME}
                        </Typography>
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
                    <NavContent
                        navItems={navItems}
                        isAuthenticated={isAuthenticated}
                        onLogout={onLogout}
                        onItemClick={onCloseDrawer}
                        fullWidthAction
                    />
                </DrawerNav>
            </MobileDrawer>
        </>
    );
};
