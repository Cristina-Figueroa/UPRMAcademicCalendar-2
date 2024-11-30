import React from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ConfirmationModal = ({ open, onClose, onConfirm, message }) => {
  const theme = useTheme();

  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div
        style={{
          backgroundColor: theme.palette.background.paper, // Dynamic background color
          color: theme.palette.text.primary, // Dynamic text color
          padding: '20px',
          borderRadius: '8px',
          width: '300px',
          textAlign: 'center',
          boxShadow: theme.shadows[5], // Dynamic shadow
        }}
      >
        <Typography variant="h6" gutterBottom>
          {message}
        </Typography>
        <Button
          onClick={onConfirm}
          variant="contained"
          color="error"
          style={{ marginRight: '10px' }}
        >
          Confirm
        </Button>
        <Button onClick={onClose} variant="outlined" style={{ color: theme.palette.text.primary }}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
