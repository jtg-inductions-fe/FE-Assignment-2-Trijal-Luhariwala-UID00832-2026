import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES, STORAGE_KEYS } from '@constant';

export const ProtectedRoute = () => {
    const location = useLocation();

    // Replace with useAppSelector(auth.isAuthenticated)
    const isAuthenticated = Boolean(
        localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN),
    );

    if (!isAuthenticated) {
        return (
            <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
        );
    }

    return <Outlet />;
};
