import { Outlet } from 'react-router-dom';

import { NavbarContainer } from '@containers';

import { LayoutRoot, MainContent } from './mainLayout.styles';

export const MainLayout = () => (
    <LayoutRoot>
        <NavbarContainer />
        <MainContent>
            <Outlet />
        </MainContent>
    </LayoutRoot>
);
