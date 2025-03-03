import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment'; 
import { Search20Regular } from '@fluentui/react-icons';

export default function SearchBar({
  placeholder = "Search...",
  height = "40px",
  padding = "8px 2px",
  borderRadius = "8px",
  ...props
}) {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      sx={{
        width: '500px',
        '& .MuiOutlinedInput-root': {
          height: height,
          borderRadius: borderRadius,
          '& input': {
            padding: padding,
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search20Regular color="action" />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
