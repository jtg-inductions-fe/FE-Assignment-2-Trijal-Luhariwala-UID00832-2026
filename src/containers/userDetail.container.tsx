import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Alert, Button, CircularProgress, Stack } from '@mui/material';

import { UserInfoCard } from '@components';
import { ROUTES } from '@constant';
import {
    clearUserDetail,
    fetchUserDetail,
    selectAuthUser,
    selectIsAuthenticated,
    selectUserDetail,
    toggleFollowUser,
    useAppDispatch,
    useAppSelector,
} from '@store';

export const UserDetailContainer = () => {
    const { username } = useParams<{ username: string }>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const authUser = useAppSelector(selectAuthUser);
    const { user, isFollowing, isLoading, isFollowLoading, error } =
        useAppSelector(selectUserDetail);

    const isOwnProfile = Boolean(
        authUser &&
            username &&
            authUser.login.toLowerCase() === username.toLowerCase(),
    );
    const canFollow = isAuthenticated && !isOwnProfile;

    useEffect(() => {
        if (!username) {
            return;
        }

        void dispatch(
            fetchUserDetail({
                username,
                checkFollow: canFollow,
            }),
        );

        return () => {
            dispatch(clearUserDetail());
        };
    }, [canFollow, dispatch, username]);

    if (isLoading) {
        return (
            <Stack flex={1} alignItems="center" justifyContent="center">
                <CircularProgress color="secondary" />
            </Stack>
        );
    }

    return (
        <Stack
            component="section"
            flex={1}
            spacing={4}
            width="100%"
            mx="auto"
            sx={({ mixins }) => ({ maxWidth: mixins.toRem(720) })}
            aria-label="User profile"
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Button
                    variant="text"
                    color="secondary"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => void navigate(ROUTES.HOME)}
                >
                    Back to search
                </Button>

                {user && canFollow && (
                    <Button
                        variant={isFollowing ? 'outlined' : 'contained'}
                        color="primary"
                        disabled={isFollowLoading}
                        onClick={() =>
                            void dispatch(
                                toggleFollowUser({
                                    username: user.login,
                                    isFollowing,
                                }),
                            )
                        }
                    >
                        {isFollowing ? 'Unfollow' : 'Follow'}
                    </Button>
                )}
            </Stack>

            {error && (
                <Alert severity="error" variant="outlined">
                    {error}
                </Alert>
            )}

            {user && <UserInfoCard user={user} />}
        </Stack>
    );
};
