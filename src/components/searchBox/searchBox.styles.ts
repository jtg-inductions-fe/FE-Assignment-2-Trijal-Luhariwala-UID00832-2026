import { OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchWrapper = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: theme.mixins.toRem(640),
    marginInline: 'auto',
}));

export const SearchInput = styled(OutlinedInput)(({ theme }) => ({
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.divider,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.text.secondary,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.secondary.main,
    },
    '& svg': {
        fontSize: theme.mixins.toRem(20),
        color: theme.palette.text.secondary,
    },
}));
