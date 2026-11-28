import { useDispatch, useSelector } from 'react-redux';

import { selectAuthToken, selectAuthUser, selectIsAuthenticated } from '@store';

import type { AppDispatch, RootState } from './index';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useAuth = () => {
    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const user = useAppSelector(selectAuthUser);
    const token = useAppSelector(selectAuthToken);

    return { isAuthenticated, user, token };
};
