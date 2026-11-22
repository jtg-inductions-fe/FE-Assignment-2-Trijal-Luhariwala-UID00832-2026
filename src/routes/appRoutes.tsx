import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<h1>User Search Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="/suggestions" element={<h1>Who to Follow Page</h1>} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
);
