import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export default function CircularSpinner({loading}) {
    const theme = useTheme(); 
    if (!loading) {
      return null;
    }

  return (
    <Box theme={theme}
    sx={{ display: 'flex', justifyContent: "center", paddingTop: "100px" }}>
      <CircularProgress />
    </Box>
  );
}
