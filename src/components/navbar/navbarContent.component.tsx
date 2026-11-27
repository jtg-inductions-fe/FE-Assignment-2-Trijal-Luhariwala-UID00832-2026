import { Link } from 'react-router-dom';

import { ROUTES } from '@constant';
import { type NavItem } from '@types';
import { AuthActionButton, StyledNavLink } from './navbar.styles';

interface NavContentProps {
    navItems: readonly NavItem[];
    isAuthenticated: boolean;
    onLogout: () => void;
    onItemClick?: () => void;
    fullWidthAction?: boolean;
}

export const NavContent = ({
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
