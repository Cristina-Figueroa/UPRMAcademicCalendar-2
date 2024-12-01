import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AddGuidelineModal = ({ show, onClose, onSave }) => {
  const theme = useTheme();

  const defaultFormData = {
    guideline_name: '',
    shift_days: '',
    day_type: 'NORMAL',
    start: '',
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState('');

  // Reset formData and errors whenever the modal opens
  useEffect(() => {
    if (show) {
      setFormData(defaultFormData);
      setErrors({});
      setNotification();
    }
  }, [show]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.guideline_name.trim()) {
      newErrors.guideline_name = 'Guideline name is required';
    }
    if (!formData.shift_days.trim()) {
      newErrors.shift_days = 'Shift days is required';
    }
    if (!formData.start.trim()) {
      newErrors.start = 'Start is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData);
      onClose();
    } else {
      setNotification('Please fill out all required fields.');
    }
  };

  return (
    <Modal open={show} onClose={onClose}>
      <div
        style={{
          padding: '20px',
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
          margin: '10% auto',
          width: '400px',
          borderRadius: '8px',
          boxShadow: theme.shadows[5],
        }}
      >
        <h2 style={{ color: theme.palette.text.primary }}>Add New Guideline</h2>
        {notification && (
          <p style={{ color: 'red', marginBottom: '15px' }}>{notification}</p>
        )}
        <TextField
          name="guideline_name"
          label="Guideline Name"
          fullWidth
          value={formData.guideline_name}
          onChange={handleChange}
          style={{
            marginBottom: '15px',
            borderColor: errors.guideline_name ? 'red' : undefined,
          }}
          error={!!errors.guideline_name}
          helperText={errors.guideline_name || ''}
        />
        <TextField
          name="shift_days"
          label="Shift Days"
          type="number"
          fullWidth
          value={formData.shift_days}
          onChange={handleChange}
          style={{
            marginBottom: '15px',
            borderColor: errors.shift_days ? 'red' : undefined,
          }}
          error={!!errors.shift_days}
          helperText={errors.shift_days || ''}
        />
        <Select
          name="day_type"
          value={formData.day_type}
          onChange={handleChange}
          fullWidth
          style={{
            marginBottom: '15px',
            color: theme.palette.text.primary,
          }}
        >
          <MenuItem value="NORMAL">Normal</MenuItem>
          <MenuItem value="LABOR">Labor</MenuItem>
          <MenuItem value="SABADOS">Saturdays</MenuItem>
        </Select>
        <TextField
          name="start"
          label="Start"
          fullWidth
          value={formData.start}
          onChange={handleChange}
          style={{
            marginBottom: '15px',
            borderColor: errors.start ? 'red' : undefined,
          }}
          error={!!errors.start}
          helperText={errors.start || ''}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            onClick={onClose}
            color="secondary"
            style={{
              backgroundColor: theme.palette.action.hover,
              color: theme.palette.text.primary,
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            color="primary"
            variant="contained"
            style={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddGuidelineModal;