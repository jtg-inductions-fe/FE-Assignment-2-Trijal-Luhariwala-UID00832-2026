import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '@constant';
import { useAuth } from '@store';

export const ProtectedRoute = () => {
    const location = useLocation();
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return (
            <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
        );
    }

    return <Outlet />;
};
