import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@constant';
import { MainLayout } from '@layouts';
import { NotFound } from '@pages';

import { ProtectedRoute } from './protectedRoutes';

export const AppRoutes = () => (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path={ROUTES.HOME} element={<h1>User Search Page</h1>} />
            <Route path={ROUTES.LOGIN} element={<h1>Login Page</h1>} />

            <Route element={<ProtectedRoute />}>
                <Route path={ROUTES.PROFILE} element={<h1>Profile Page</h1>} />
                <Route
                    path={ROUTES.SUGGESTIONS}
                    element={<h1>Who to Follow Page</h1>}
                />
            </Route>

            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Route>
    </Routes>
);
