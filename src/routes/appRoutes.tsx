import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@constant';
import { NotFound } from '@pages';

export const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<h1>User Search Page</h1>} />
        <Route path={ROUTES.LOGIN} element={<h1>Login Page</h1>} />
        <Route path={ROUTES.PROFILE} element={<h1>Profile Page</h1>} />
        <Route
            path={ROUTES.SUGGESTIONS}
            element={<h1>Who to Follow Page</h1>}
        />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
);
