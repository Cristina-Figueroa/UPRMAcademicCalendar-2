import React from 'react';
import { Button, Modal, Typography } from '@mui/material';

const ConfirmationModal = ({ open, onClose, onConfirm, message }) => {
  return (
    <Modal open={open} onClose={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '300px', textAlign: 'center' }}>
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
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
