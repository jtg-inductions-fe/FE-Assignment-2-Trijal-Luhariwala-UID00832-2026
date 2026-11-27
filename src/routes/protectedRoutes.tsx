import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '@constant';
import { selectIsAuthenticated, useAppSelector } from '@store';

export const ProtectedRoute = () => {
    const location = useLocation();
    const isAuthenticated = useAppSelector(selectIsAuthenticated);

    if (!isAuthenticated) {
        return (
            <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
        );
    }

    return <Outlet />;
};
