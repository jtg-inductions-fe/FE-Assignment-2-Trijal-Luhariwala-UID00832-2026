import type { ChangeEvent } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress, IconButton, InputAdornment } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { SearchInput, SearchWrapper } from './searchBox.styles';

export interface SearchBoxProps {
    value: string;
    onChange: (value: string) => void;
    onClear: () => void;
    isLoading?: boolean;
    placeholder?: string;
}

export const SearchBox = ({
    value,
    onChange,
    onClear,
    isLoading = false,
    placeholder = 'Search GitHub users...',
}: SearchBoxProps) => {
    const theme = useTheme();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <SearchWrapper role="search">
            <SearchInput
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'Search GitHub users' }}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        {isLoading ? (
                            <CircularProgress
                                size={theme.mixins.toRem(18)}
                                color="secondary"
                            />
                        ) : (
                            value && (
                                <IconButton
                                    onClick={onClear}
                                    aria-label="Clear search"
                                    size="small"
                                >
                                    <CloseIcon />
                                </IconButton>
                            )
                        )}
                    </InputAdornment>
                }
            />
        </SearchWrapper>
    );
};
