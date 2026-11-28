import { useEffect, useState } from 'react';

import { Alert, Stack } from '@mui/material';

import { SearchBox, SearchResultList } from '@components';
import { APP_CONFIG } from '@constant';
import {
    clearSearch,
    searchGitHubUsers,
    selectSearchTotalPages,
    selectUserSearch,
    useAppDispatch,
    useAppSelector,
} from '@store';

export const UserSearchContainer = () => {
    const dispatch = useAppDispatch();
    const {
        query,
        items,
        totalCount,
        currentPage,
        hasSearched,
        isLoading,
        error,
    } = useAppSelector(selectUserSearch);
    const totalPages = useAppSelector(selectSearchTotalPages);

    const [inputValue, setInputValue] = useState(query);

    useEffect(() => {
        const trimmed = inputValue.trim();

        if (!trimmed) {
            if (hasSearched) {
                dispatch(clearSearch());
            }
            return;
        }

        if (trimmed === query && hasSearched) {
            return;
        }

        const timer = setTimeout(() => {
            void dispatch(searchGitHubUsers({ query: trimmed, page: 1 }));
        }, APP_CONFIG.SEARCH_DEBOUNCE_MS);

        return () => clearTimeout(timer);
    }, [dispatch, hasSearched, inputValue, query]);

    const handleClear = () => {
        setInputValue('');
        dispatch(clearSearch());
    };

    const handlePageChange = (page: number) => {
        void dispatch(searchGitHubUsers({ query, page }));
    };

    return (
        <Stack
            component="section"
            spacing={6}
            width="100%"
            mx="auto"
            sx={({ mixins }) => ({ maxWidth: mixins.toRem(640) })}
            aria-label="GitHub user search"
        >
            <SearchBox
                value={inputValue}
                onChange={setInputValue}
                onClear={handleClear}
                isLoading={isLoading}
            />

            {error && (
                <Alert severity="error" variant="outlined">
                    {error}
                </Alert>
            )}

            <SearchResultList
                users={items}
                totalCount={totalCount}
                query={query}
                isLoading={isLoading}
                hasSearched={hasSearched}
                currentPage={currentPage}
                totalPages={totalPages}
                onPrevPage={() => handlePageChange(currentPage - 1)}
                onNextPage={() => handlePageChange(currentPage + 1)}
            />
        </Stack>
    );
};
