'use client';

import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';


const TableContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
//   background-color: #f9f9f9;
  margin-top: -30px;
  border-radius: 10px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Arial', sans-serif;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.thead`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.primary.main
      : theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.text.primary
      : theme.palette.text.primary};
`;

const TableHeaderRow = styled.tr`
  text-align: left;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TableHeaderCell = styled.th`
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  background-color: ${({ theme }) => theme.palette.background.paper};
  
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.palette.background.alt || theme.palette.action.hover};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
    cursor: pointer;
  }
`;

const TableCell = styled.td`
  padding: 12px 18px;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: normal;
`;

const DateCell = styled(TableCell)`
  font-weight: bold;
`;




const GuidelinesTable = () => {
    const [guidelines, setGuidelines] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch guidelines from the backend
        fetch('http://127.0.0.1:5000/guidelines', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status:nnn ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setGuidelines(data); // Save the data to state
        })
        .catch(error => {
            console.error('Error fetching guidelines:', error);
            setError(error.message); // Save error to state
        });
    }, []); // Empty dependency array means this runs once when the component mounts

    if (error) {
        return <div>Error: {error}</div>;
    }
    const theme = useTheme();

    return (
        <TableContainer theme={theme}>
        {/* <TableTitle theme={theme}>Guidelines</TableTitle> */}
        <StyledTable>
          <TableHeader theme={theme}>
            <TableHeaderRow>
              <TableHeaderCell theme={theme}>Name</TableHeaderCell>
              <TableHeaderCell theme={theme}>shift_days</TableHeaderCell>
              <TableHeaderCell theme={theme}>day_type</TableHeaderCell>
              <TableHeaderCell theme={theme}>start</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {guidelines.map((guideline, index) => (
              <TableRow key={index} theme={theme}>
                <DateCell theme={theme}>{guideline[1]}</DateCell> {/* Date */}
                <TableCell theme={theme}>{guideline[2]}</TableCell> {/* Description */}
                <DateCell theme={theme}>{guideline[3]}</DateCell> {/* Date */}
                <TableCell theme={theme}>{guideline[4]}</TableCell> {/* Description */}
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    );
};

export default GuidelinesTable;
