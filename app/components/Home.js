'use client';



import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Box, Container, } from '@mui/material';
import BasicSelect from './BasicSelect';
import DatePickerComponent from './DatePicker';
import ButtonComponent from './Button';
import DescriptionAlerts from './Alert';


import styled from "styled-components";
import { useTheme } from '@mui/material/styles';

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  margin-top: -40px;
  color: ${({ theme }) =>
  theme.palette.mode === 'dark'
    ? theme.palette.text.primary
    : theme.palette.text.primary};
`;

const Header = styled.h1`
  // color: #2c3e50;
  color: ${({ theme }) =>
  theme.palette.mode === 'dark'
    ? theme.palette.text.primary
    : theme.palette.text.primary};
  // text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const SubHeader = styled.h2`
  // color: #34495e;
  color: ${({ theme }) =>
  theme.palette.mode === 'dark'
    ? theme.palette.text.primary
    : theme.palette.text.primary};
  margin-top: 20px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the content horizontally */
  justify-content: center; /* Centers the content vertically */
`;

function Home() {
  const theme = useTheme();


  const [startDate, setStartDate] = useState('');
  const [academicPeriod, setAcademicPeriod] = useState('fall');  // Default to 'fall'
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  // For displaying error messages

  const [generatedDates, setGeneratedDates] = useState([]);
  
  // Working on it 
  const handleGenerateDates = () => {

    // Handle Errors
    if (!startDate) {
      setErrorMessage('Please select a start date');
      return;
    }
    // Academic period has default set to fall
    setErrorMessage('');

    fetch('http://127.0.0.1:5000/generate-dates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate: startDate,
        academicPeriod: academicPeriod
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.dates) {
          // setGeneratedDates(data.dates); // Set the generated dates
          // navigate('/calendar', { state: { generatedDates: data } });


          console.log('Response from Flask:', data);
          setResponseMessage(data.message + ' - ' + data.date);  // Display the message and date

          console.log('Updated responseMessage:', responseMessage); // This log will show the state value
          navigate('/generate', { state: { message: data.message, date: data.date, period: data.period } });


        } else if (data.error) {
          console.error('Error:', data.error);

        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleGenerate = async () => {
    try {
        const response = await fetch('http://localhost:5000/generate-dates', {
            method: 'POST', // Explicitly specify POST
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                start_date: startDate, // Provide the input
            }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setGeneratedDates(data.dates); // Update state with received dates
    } catch (error) {
        console.error('Error fetching dates:', error);
    }
};



















  // Yes!

/**
 * Handles the operations of selecting an academic period and a
 * startDate, passing them to Flask and returning them to frontend
 * @returns academicPeriod, startDate
 */

  const submitDates = () => {

    // Handle Errors
    if (!startDate) {
      // message = 'Please select a start date' 
      setErrorMessage('Please select a start date');
      return;
    }
    // Academic period has default set to fall

    // Convert startDate to a Date object (if it's not already one)
    const dateObject = new Date(startDate);

    // Extract the month (0-based, so January is 0, December is 11)
    const month = dateObject.getMonth(); 
    let period = ''; // To store the academic period
    let weeks = 0;   // To store the number of weeks

    period = academicPeriod

    // Check the month and determine the period and weeks
    if (month === 7 && academicPeriod === 'fall' || month === 8 && academicPeriod === 'fall') { // August (7) or September (8)
      weeks = 15;
    } else if (month === 0 && academicPeriod === 'spring'|| month === 1 && academicPeriod === 'spring') { // January (0) or February (1)
      weeks = 15;
    } else if (month === 4 && academicPeriod === 'summerV1'|| month === 5 && academicPeriod === 'summerV1') { // May (4) or June (5)
      weeks = 4;
    } else if (month === 4 && academicPeriod === 'summerExtended'|| month === 5 && academicPeriod === 'summerExtended') { // May (4) or June (5)
      weeks = 6;
    } else if (month === 5 && academicPeriod === 'summerV2'|| month === 6 && academicPeriod === 'summerV2') { // May (4) or June (5)
      weeks = 4;
    } else {
      period = 'unknown';
      weeks = 0;
      // message = 'Invalid start date for academic period'
      setErrorMessage('Invalid start date for academic period. Please select another date for calendar.');
      return; // Exit if the date is invalid
    }
  // Clear error message if validation passes
    setErrorMessage('');

    fetch('http://127.0.0.1:5000/submit-academic-period', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate: startDate,
        // academicPeriod: academicPeriod,
        academicPeriod: period,
        weeks: weeks,
      }),
    })
      .then((response) => response.json())  
      .then((data) => {
        console.log('Response from Flask:', data);
        setResponseMessage(
          data.message + ' - ' + data.date + ' , Period: ' + period + ' , Weeks: ' + weeks
        );
        // setResponseMessage(data.message + ' - ' + data.date + ' , ' + data.period);
        console.log('Updated responseMessage:', responseMessage); // This log will show the state value
        // navigate('/calendar', { state: { message: data.message, date: data.date, period: data.period } });

      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage(error.message);
      });
  };

  const submitDate = () => {

    // Handle Errors
    if (!startDate) {
      setErrorMessage('Please select a start date');
      return;
    }
    setErrorMessage('');

    fetch('http://127.0.0.1:5000/submit-date', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate: startDate,
      }),
    })
      .then((response) => response.json())  
      .then((data) => {
        console.log('Response from Flask:', data);
        setResponseMessage(data.message + ' - ' + data.date);
        console.log('Updated responseMessage:', responseMessage); // This log will show the state value

      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage(error.message);
      });
  };

  
  return (
    <PageContainer theme={theme}>
            
                {/* Date Picker */}
                <Center>
                  <DatePickerComponent startDate={startDate} setStartDate={setStartDate} />
                </Center>

                
                {/* BasicSelect */}
                <Center>
                  <BasicSelect academicPeriod={academicPeriod} setAcademicPeriod={setAcademicPeriod} />
                </Center>

                
                {/* Display error message if validation fails */}
                {/* {errorMessage && <div className='section'> <DescriptionAlerts error={errorMessage} /> </div>} */}
                <Center>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                {/* Display message if validation is passed */}
                {responseMessage && <p>{responseMessage}</p>}
                </Center>



                {/* Button */}

                <Center>
                <ButtonComponent handleClick={submitDates}/>     
                </Center>

                {/* <button onClick={submitDates}>Generate Dates</button> */}

                {/* <button onClick={handleGenerateDates}>Generate Dates</button> */}

              {/* <div>
                {responseMessage && <p>{responseMessage}</p>} Conditionally render message
                <button onClick={handleGenerate}>Generate Dates 2</button>
              </div> */}
              

      
      
    </PageContainer>
  );
}

export default Home;
