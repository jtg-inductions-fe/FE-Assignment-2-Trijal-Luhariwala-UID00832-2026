import { STORAGE_KEYS } from '@constant';
import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { setUnauthorizedHandler } from '@services';

import { authReducer, logout, setCredentials } from './slices/authSlice';
import {
    clearSearch,
    clearUserDetail,
    fetchUserDetail,
    searchGitHubUsers,
    toggleFollowUser,
    userReducer,
} from './slices/userSlice';

const authListenerMiddleware = createListenerMiddleware();

authListenerMiddleware.startListening({
    actionCreator: setCredentials,
    effect: (action) => {
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, action.payload.token);
        localStorage.setItem(
            STORAGE_KEYS.AUTH_USER,
            JSON.stringify(action.payload.user),
        );
    },
});

authListenerMiddleware.startListening({
    actionCreator: logout,
    effect: () => {
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
    },
});

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(authListenerMiddleware.middleware),
});

setUnauthorizedHandler(() => {
    store.dispatch(logout());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
    clearSearch,
    clearUserDetail,
    fetchUserDetail,
    logout,
    searchGitHubUsers,
    setCredentials,
    toggleFollowUser,
};
export {
    selectAuthToken,
    selectAuthUser,
    selectIsAuthenticated,
} from './selectors/authSelector';
export { useAppDispatch, useAppSelector, useAuth } from './hooks';
