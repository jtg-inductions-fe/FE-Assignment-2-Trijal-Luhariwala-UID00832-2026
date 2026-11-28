import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Navbar } from '@components';
import { ROUTES } from '@constant';
import { logout, useAppDispatch, useAuth } from '@store';

export const NavbarContainer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAuth();

    const handleOpenDrawer = () => {
        setMobileOpen(true);
    };

    const handleCloseDrawer = () => {
        setMobileOpen(false);
    };

    const handleLogout = () => {
        void navigate(ROUTES.HOME, { replace: true });
        setTimeout(() => {
            dispatch(logout());
        }, 0);
    };

    return (
        <Navbar
            isAuthenticated={isAuthenticated}
            mobileOpen={mobileOpen}
            onOpenDrawer={handleOpenDrawer}
            onCloseDrawer={handleCloseDrawer}
            onLogout={handleLogout}
        />
    );
};
