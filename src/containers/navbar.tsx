import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Navbar } from '@components';
import { ROUTES, STORAGE_KEYS } from '@constant';

export const NavbarContainer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    // Replace with useAppSelector
    const isAuthenticated = Boolean(
        localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN),
    );

    const handleOpenDrawer = () => {
        setMobileOpen(true);
    };

    const handleCloseDrawer = () => {
        setMobileOpen(false);
    };

    const handleLogout = () => {
        // Replace with dispatch
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
        void navigate(ROUTES.HOME);
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
