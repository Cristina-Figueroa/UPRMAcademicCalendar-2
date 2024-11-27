import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const DescriptionAlerts = ({ error }) => {
  return (
    <Stack sx={{ width: '70%', textAlign:'left' }} spacing={2}>
      <Alert severity="error" sx={{textAlign: 'left', fontSize: 16 }}>
        <AlertTitle sx={{textAlign: 'left', fontSize: 18 }}>Error</AlertTitle>
        {error}
      </Alert>
    </Stack>
  );
}
export default DescriptionAlerts;