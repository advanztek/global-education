import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Search20Regular } from '@fluentui/react-icons';

export default function SearchBar({
  placeholder = "Search...",
  height = "40px",
  padding = "8px 2px",
  borderRadius = "8px",
  width = "500px",
  ...props
}) {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      sx={{
        width: width, 
        '& .MuiOutlinedInput-root': {
          height: height,
          minHeight: height,
          borderRadius: borderRadius,
          '& input': {
            padding: padding,
            height: '100%',
            boxSizing: 'border-box'
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
