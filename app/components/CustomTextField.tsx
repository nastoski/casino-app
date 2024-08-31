"use client";

import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/system';

export const CustomTextField = styled((props: TextFieldProps) => (
    <TextField variant="outlined" fullWidth margin="normal" {...props} />
))(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        color: 'white',
        backgroundColor: 'transparent',
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'white',
        '&.Mui-focused': {
            color: 'white',
        },
    },
}));