'use client';

import React, { useEffect, useState , useCallback} from 'react';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddGuidelineModal from './AddModal';
import PaginationComponent from './Pagination';
import RowsPerPage from './RowsPerPage'; 
import ConfirmationModal from './ConfirmDelete';
import { Button } from '@mui/material';
import {
  TableContainer,
  StyledTable,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableHeaderActionCell,
  TableBody,
  TableRow,
  TableCell,
  DateCell,
  DescriptionCell,
  ActionCell,
  SaveButtonCell,
  TableFooter,
  TableFooterRow,
  TableFooterCell,
  Container,
  Center,
  Right,
  Notification,
  StyledSelect,
  StyledInput,
  AddButton,
  CancelButton,
  EditRowButton,
  DeleteButton,
  EditButton,
} from './GuidelinesTableStyles';




const GuidelinesTable = () => {
    const [guidelines, setGuidelines] = useState([]);
    const [error, setError] = useState(null);

    const theme = useTheme();
    
    // Table Components
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Set 5 as default number of rows per page
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentGuidelines = guidelines.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(guidelines.length / rowsPerPage);

    const handlePageChange = useCallback((newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    }, [totalPages]);

    const handleRowsPerPageChange = useCallback((event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setCurrentPage(1);
    }, []);
    
    const [loading, setLoading] = useState(true);



    // Notification  
    const [notification, setNotification] = useState(null); // Pop-up notification state
    const [notificationType, setNotificationType] = useState(""); // 'success' or 'error'

    const showNotification = (message, type) => {
      setNotification(message);
      setNotificationType(type);
    
      // Automatically hide the notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
        setNotificationType("");
      }, 3000);
    };

    // Toggle Editing Mode
    const [isEditing, setIsEditing] = useState(false);
    const toggleEditingMode = () => {
      if (editRowIndex !== null) {
        setShowConfirmLeaveEdit(true); // Show confirmation dialog if a row is being edited
      } else {
        setIsEditing((prev) => !prev); // Toggle directly if no row is being edited
      }
    };

    // Add Modal Components
    const [showModal, setShowModal] = useState(false);



    // Fetch guidelines from DB
    useEffect(() => {
      const fetchGuidelines = async () => {
        setLoading(true);
          try {
              const response = await fetch('http://127.0.0.1:5000/guidelines/', {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json',
                  },
              });
  
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
  
              const data = await response.json();
              setGuidelines(data); // Save fetched guidelines to state
          } catch (err) {
              console.error('Error fetching guidelines:', err);
              setError(err.message); // Save error to state for display
          } finally {
            setLoading(false);
          }
      };
  
      fetchGuidelines();
  }, []);
    


    // Delete Guideline from DB
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    const [guidelineToDelete, setGuidelineToDelete] = useState(null);
    
    const handleDeleteClick = (guidelineId) => {
      setGuidelineToDelete(guidelineId);
      setIsModalOpenDelete(true);
    };
    
    const handleConfirmDelete = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/guidelines/${guidelineToDelete}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        showNotification("Guideline deleted successfully!", "success");
    
        // Refresh guidelines in state after deletion
        setGuidelines((prevGuidelines) =>
          prevGuidelines.filter((guideline) => guideline[0] !== guidelineToDelete)
        );
      } catch (error) {
        console.error('Error deleting guideline:', error);
        showNotification("Failed to delete the guideline. Please try again.", "error");
      } finally {
        setIsModalOpenDelete(false); // Close the modal
        setGuidelineToDelete(null);
      }
      try {
        const response = await fetch("http://127.0.0.1:5000/guidelines/");
        const data = await response.json();
        setGuidelines(data); // Refresh guidelines list
      } catch (error) {
        console.error("Error refreshing guidelines:", error);
      }
    };




    const [errors, setErrors] = useState({
      guideline_name: false,
      shift_days: false,
      day_type: false,
      start: false,
    });

    // Add a Guideline
    const handleAddGuideline = async (newGuideline) => {
      const newErrors = {
        guideline_name: !newGuideline.guideline_name,
        shift_days: !newGuideline.shift_days,
        day_type: !newGuideline.day_type,
        start: !newGuideline.start,
      };
  
    
      setErrors(newErrors);
    
      // If any errors exist, prevent submission
      if (Object.values(newErrors).some((error) => error)) {
        showNotification("Please fill in all required fields.", "error");
        return;
      }


      try {
        const response = await fetch('http://127.0.0.1:5000/guidelines/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({         
            guideline_name: newGuideline.guideline_name,
            shift_days: newGuideline.shift_days,
            day_type: newGuideline.day_type,
            start: newGuideline.start,
          })
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        showNotification(data.message, 'success');

        // Update local state with the new guideline
        setGuidelines((prev) => [...prev, { ...newGuideline, guideline_id: data.guideline_id }]); // Adjust based on your API response structure
      } catch (error) {
        console.error('Error adding guideline:', error);
        showNotification('Failed to add the guideline. Please try again.', 'error');
      }
      try {
        const response = await fetch("http://127.0.0.1:5000/guidelines/");
        const data = await response.json();
        setGuidelines(data);
      } catch (error) {
        console.error("Error refreshing guidelines:", error);
        showNotification("Failed to update the guideline. Please try again.", "error");
      }

    };







    // Editing a Guideline
    const [editRowIndex, setEditRowIndex] = useState(null);  
    const [showConfirmLeaveEdit, setShowConfirmLeaveEdit] = useState(false); 

    const [editedGuideline, setEditedGuideline] = useState({
      guideline_name: "",
      day_type: "",
      shift_days: "",
      start: "",
    });

    // Confirm leave editing mode
    const confirmLeaveEditingMode = () => {
      setShowConfirmLeaveEdit(false); // Close the confirmation dialog
      setEditRowIndex(null); // Exit editing mode for the row
      setEditedGuideline({}); // Reset the edited guideline
      setIsEditing(false); // Exit overall editing mode
    };

    // Cancel leaving editing mode
    const cancelLeaveEditingMode = () => {
      setShowConfirmLeaveEdit(false); // Close the confirmation dialog
    };

    // Handle editing a specific row
    const handleEditClick = (index, guideline) => {
      setEditRowIndex(index);
      setEditedGuideline({
        guideline: guideline.guideline_name,
        shift_days: guideline.shift_days,
        day_type: guideline.day_type,
        start: guideline.start,
      });
    };

    const handleInputChange = (e, field) => {
        setEditedGuideline((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handleSave = async (index) => {
      const updatedGuideline = {
        guideline_id: guidelines[index].guideline_id, // guideline_id
        guideline_name: editedGuideline.guideline, // guideline_name
        shift_days: editedGuideline.shift_days,    // Shift days
        day_type: editedGuideline.day_type,        // Day type
        start: editedGuideline.start,              // Start value
      };
      console.log(updatedGuideline);  // Add this line to check the value

      try {
        const response = await fetch(`http://127.0.0.1:5000/guidelines/${updatedGuideline.guideline_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedGuideline), 
        });
    
        if (!response.ok) {
          throw new Error(`Failed to update guideline. Status: ${response.status}`);
        }
    
        // Update the local state with the updated guideline
        const updatedGuidelines = [...guidelines];
        updatedGuidelines[index] = [
          updatedGuideline.guideline_id,
          updatedGuideline.guideline_name,
          updatedGuideline.shift_days,
          updatedGuideline.day_type,
          updatedGuideline.start,
        ];
        setGuidelines(updatedGuidelines);
    
        showNotification("Guideline updated successfully!", "success");
      } catch (error) {
        console.error("Error updating guideline:", error);
        showNotification("Failed to update the guideline. Please try again.", "error");
      } finally {
        setEditRowIndex(null); // Exit editing mode
      }
      try {
        const response = await fetch("http://127.0.0.1:5000/guidelines/");
        const data = await response.json();
        setGuidelines(data);
      } catch (error) {
        console.error("Error refreshing guidelines:", error);
        showNotification("Failed to update the guideline. Please try again.", "error");
      }
    };

    const handleCancel = () => {
        setEditRowIndex(null);
        setEditedGuideline({});
    };




    return (
      <>
        {notification && (
          <Notification type={notificationType}>
            {notification}
          </Notification>
        )}

      {isModalOpenDelete && (
        <ConfirmationModal
          open={isModalOpenDelete}
          onClose={() => setIsModalOpenDelete(false)}
          onConfirm={handleConfirmDelete}
          message="Are you sure you want to delete this guideline? This action cannot be undone."
        />
      )}

        {showConfirmLeaveEdit && (
        <ConfirmationModal
          open={showConfirmLeaveEdit}
          onClose={cancelLeaveEditingMode}
          onConfirm={confirmLeaveEditingMode}
          message="You have unsaved changes. Are you sure you want to leave editing mode?"
        />
      )}

        <TableContainer theme={theme}>
        <StyledTable>
          <TableHeader theme={theme}>
            <TableHeaderRow>
              <TableHeaderCell theme={theme}>Directriz</TableHeaderCell>
              <TableHeaderCell theme={theme}>Descripción</TableHeaderCell>
                {isEditing && <TableHeaderActionCell theme={theme}>Acciones</TableHeaderActionCell> } {/* Conditionally render action column */}
            </TableHeaderRow>
          </TableHeader>
          <TableBody>




          {currentGuidelines.map((guideline, index) => (
            <TableRow key={index} theme={theme}>
              {editRowIndex === index ? (
                <>
                  <TableCell>
                  <StyledInput
                      value={editedGuideline.guideline}
                      onChange={(e) => handleInputChange(e, 'guideline')}
                    />
                  </TableCell>
                  <TableCell>
                  <StyledSelect
                      value={editedGuideline.day_type}
                      onChange={(e) => handleInputChange(e, 'day_type')}
                    >
                      <option value="NORMALES">Normales</option>
                      <option value="LABORABLES">Laborables</option>
                      <option value="SABADOS">Sabados</option>
                    </StyledSelect>
                    <StyledInput
                      type="number"
                      value={editedGuideline.shift_days}
                      onChange={(e) => handleInputChange(e, 'shift_days')}
                      placeholder="Shift Days"
                    />
                    <StyledInput
                      type="text"
                      value={editedGuideline.start}
                      onChange={(e) => handleInputChange(e, 'start')}
                      placeholder="Start"
                    />
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleSave(index)}>Save</Button>
                    <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                  </TableCell>
                </>
              ) : (
                <>
                <DateCell theme={theme}>{guideline.guideline_name}</DateCell> 
                <DescriptionCell theme={theme}>
                    {guideline.start === 'SABADOS' 
                    
                      ? `Cuenta ${guideline.shift_days} ${guideline.day_type} desde ${guideline.start}`
                      : `Cuenta ${guideline.shift_days} dias ${guideline.day_type} desde ${guideline.start}`
                    }
                  </DescriptionCell>
                  {isEditing && (
                    <TableCell>
                      <EditRowButton onClick={() => handleEditClick(index, guideline)}>Edit</EditRowButton>
                      <DeleteButton
                        onClick={() => handleDeleteClick(guideline.guideline_id)}
                        style={{ color: 'red' }}
                      >
                        Delete
                      </DeleteButton>
                    </TableCell>
                  )}
                </>
              )}
            </TableRow>
          ))}
          </TableBody>
          <TableFooter theme={theme}>
            <TableFooterRow >
                <TableFooterCell colSpan={isEditing ? 3 : 2} theme={theme}>
                  <Container>
                    <RowsPerPage
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleRowsPerPageChange}
                      />
                    <Right>
                        <PaginationComponent
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                          /> 
                    </Right>
                </Container>
                </TableFooterCell>
            </TableFooterRow>
          </TableFooter>

        </StyledTable>
      </TableContainer>

      {/* Floating Button */}
      <EditButton
        theme={theme}
        variant='contained'
        style={{
          color: 'white',
          backgroundColor: isEditing
            ? 'red' // Red background when in editing mode
            : theme.palette.mode === 'dark'
            ? theme.palette.primary.main
            : theme.palette.primary.main,
        }}
        onClick={toggleEditingMode}
      >
        {isEditing ? <> <ArrowBackIcon sx={{fontSize:'xxlarge'}}/> 
        </> : <EditIcon/>}
      </EditButton>

        <AddButton
          theme={theme}
          variant='contained'
          style={{
            color: 'white',
          }}
          onClick={() => setShowModal(true)}
        >
          +
        </AddButton>

      <AddGuidelineModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddGuideline}
      />


      </>
    );
};

export default GuidelinesTable;
