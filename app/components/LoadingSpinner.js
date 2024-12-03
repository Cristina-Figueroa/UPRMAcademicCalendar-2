import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export default function CircularSpinner({loading}) {
    if (!loading) return null;
    const theme = useTheme(); 

  return (
    <Box theme={theme}
    sx={{ display: 'flex', justifyContent: "center", paddingTop: "100px" }}>
      <CircularProgress />
    </Box>
  );
}
