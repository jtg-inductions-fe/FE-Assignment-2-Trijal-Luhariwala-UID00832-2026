import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Navbar } from '@components';
import { ROUTES } from '@constant';
import {
    logout,
    selectIsAuthenticated,
    useAppDispatch,
    useAppSelector,
} from '@store';

export const NavbarContainer = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(selectIsAuthenticated);

    const handleOpenDrawer = () => {
        setMobileOpen(true);
    };

    const handleCloseDrawer = () => {
        setMobileOpen(false);
    };

    const handleLogout = () => {
        dispatch(logout());
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
