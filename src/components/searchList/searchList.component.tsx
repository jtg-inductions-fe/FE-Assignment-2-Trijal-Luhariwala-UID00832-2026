import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, CircularProgress, Typography } from '@mui/material';

import { getUserDetailRoute } from '@constant';
import type { SearchUserItem } from '@types';

import {
    PaginationBar,
    ResultRow,
    ResultsWrapper,
    StatusBox,
    UserAvatar,
    UserGroup,
    UsernameLink,
} from './searchList.styles';

export interface SearchResultListProps {
    users: SearchUserItem[];
    totalCount: number;
    query: string;
    isLoading: boolean;
    hasSearched: boolean;
    currentPage: number;
    totalPages: number;
    onPrevPage: () => void;
    onNextPage: () => void;
}

export const SearchResultList = ({
    users,
    totalCount,
    query,
    isLoading,
    hasSearched,
    currentPage,
    totalPages,
    onPrevPage,
    onNextPage,
}: SearchResultListProps) => {
    if (isLoading) {
        return (
            <ResultsWrapper>
                <StatusBox>
                    <CircularProgress color="secondary" />
                </StatusBox>
            </ResultsWrapper>
        );
    }

    if (!hasSearched) {
        return null;
    }

    if (users.length === 0) {
        return (
            <ResultsWrapper>
                <StatusBox>
                    <Typography variant="subtitle1">
                        No users found for &ldquo;{query}&rdquo;
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Try a different username.
                    </Typography>
                </StatusBox>
            </ResultsWrapper>
        );
    }

    return (
        <ResultsWrapper>
            <Typography variant="body2" color="text.secondary">
                Showing {users.length} of {totalCount.toLocaleString()} users
            </Typography>

            {users.map((user) => (
                <ResultRow key={user.id} elevation={0}>
                    <UserGroup>
                        <UserAvatar src={user.avatarUrl} alt={user.login} />
                        <UsernameLink to={getUserDetailRoute(user.login)}>
                            {user.login}
                        </UsernameLink>
                    </UserGroup>
                    <ChevronRightIcon aria-hidden="true" />
                </ResultRow>
            ))}

            {totalPages > 1 && (
                <PaginationBar aria-label="Search results pagination">
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<ChevronLeftIcon />}
                        onClick={onPrevPage}
                        disabled={currentPage <= 1}
                    >
                        Prev
                    </Button>
                    <Typography variant="body2" color="text.secondary">
                        Page {currentPage} of {totalPages}
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        endIcon={<ChevronRightIcon />}
                        onClick={onNextPage}
                        disabled={currentPage >= totalPages}
                    >
                        Next
                    </Button>
                </PaginationBar>
            )}
        </ResultsWrapper>
    );
};
