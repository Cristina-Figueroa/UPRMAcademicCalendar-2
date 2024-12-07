import React, { useState, useEffect, useMemo } from 'react';
import { Modal, Button, TextField, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';

const AddGuidelineModal = ({ show, onClose, onSave }) => {
  const theme = useTheme();

  const defaultAddFormData = useMemo(() => ({
    guideline_name: '',
    shift_days: '',
    day_type: 'NORMALES',
    start: 'STARTDATE',
    period_type: 'SEMESTER',
  }), []);

  const [formData, setFormData] = useState(defaultAddFormData);
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState('');

  // Reset formData and errors whenever the modal opens
  useEffect(() => {
    if (show) {
      setFormData(defaultAddFormData);
      setErrors({});
      setNotification();
    }
  }, [show, defaultAddFormData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.guideline_name.trim()) {
      newErrors.guideline_name = 'Nombre de Directriz es requerido';
    }
    if (!formData.shift_days.trim()) {
      newErrors.shift_days = 'Días a mover es requerido';
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
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          borderRadius: '8px',
          boxShadow: theme.shadows[5],
        }}
      >

        <FormControl sx={{ 
          flex: '1',
          flexDirection: 'row'
          }} 
          size="small"
          > 

        <h2 style={{ color: theme.palette.text.primary }}>Añade una Directriz</h2>
        {notification && (
          <p style={{ color: 'red', marginBottom: '15px' }}>{notification}</p>
        )}
        <TextField
          name="guideline_name"
          label="Nombre de la Directriz"
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
        <>
        <p>¿Que periodo académico cae esta directriz?</p>
        <Select
          name="period_type"
          value={formData.period_type}
          onChange={handleChange}
          fullWidth
          style={{
            marginBottom: '15px',
            color: theme.palette.text.primary,
          }}
        >
          <MenuItem value="SEMESTER">Semestre</MenuItem>
          <MenuItem value="SUMMER">Verano Corto</MenuItem>
          <MenuItem value="EXTENDED SUMMER">Verano Extendido</MenuItem>
        </Select>
        </>

        <>
        <p>¿Que tipo de días cuentas para esta directriz?</p>
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
          <MenuItem value="NORMALES">Normales</MenuItem>
          <MenuItem value="LABORABLES">Laborables</MenuItem>
          <MenuItem value="SABADOS">Sabados</MenuItem>
        </Select>
        </>

        <>
        <p>¿Cuando es el punto de comienzo para esta directriz?</p>
        <Select
          name="start"
          fullWidth
          value={formData.start}
          onChange={handleChange}
          style={{
            marginBottom: '15px',
            color: theme.palette.text.primary,
          }}
          >
            <MenuItem value="STARTDATE">STARTDATE</MenuItem>
            <MenuItem value="ENDDATE">ENDDATE</MenuItem>
            <MenuItem value="PERIODO DE REPASO">Periodo de Repaso</MenuItem>
            <MenuItem value="PERIODO DE FINALES">Periodo de Finales</MenuItem>
          </Select>     
        </>

        <>
        <p>¿Cuantos días desde antes (-neg) o despues (pos) del punto de comienzo elegido cuentas para la directriz?</p>
        <TextField
          name="shift_days"
          label="Días a contar"
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
        </>
      </FormControl>


        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
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
