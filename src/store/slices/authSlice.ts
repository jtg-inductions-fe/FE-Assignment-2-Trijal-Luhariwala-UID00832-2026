import { STORAGE_KEYS } from '@constant';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@types';

export interface AuthState {
    token: string | null;
    user: User | null;
}

const readStoredUser = (): User | null => {
    const rawUser = localStorage.getItem(STORAGE_KEYS.AUTH_USER);
    if (!rawUser) {
        return null;
    }

    try {
        return JSON.parse(rawUser) as User;
    } catch {
        localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
        return null;
    }
};

const initialState: AuthState = {
    token: localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN),
    user: readStoredUser(),
};

interface CredentialsPayload {
    token: string;
    user: User;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<CredentialsPayload>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
