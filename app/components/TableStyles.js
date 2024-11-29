import styled from "styled-components";
import { useTheme } from '@mui/material/styles';

export const StyledSelect = styled.select`
  border: ${({ hasError }) => (hasError ? "2px solid red" : "1px solid #ccc")};
  box-shadow: ${({ hasError }) => (hasError ? "0 0 5px red" : "none")};
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  transition: border 0.3s ease, box-shadow 0.3s ease;
`;

export const StyledInput = styled.input`
  border: ${({ hasError }) => (hasError ? "2px solid red" : "1px solid #ccc")};
  box-shadow: ${({ hasError }) => (hasError ? "0 0 5px red" : "none")};
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  transition: border 0.3s ease, box-shadow 0.3s ease;
`;

export const TableContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  margin-top: -30px;
  border-radius: 10px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Arial', sans-serif;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  table-layout: fixed;

`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.primary.main
      : theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.text.primary
      : theme.palette.text.primary};
`;

export const TableHeaderRow = styled.tr`
  text-align: left;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const TableHeaderCell = styled.th`
  padding: 20px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  /* Set specific widths */
  &:nth-child(1) {
    width: 25%; /* Date column */
  }
  &:nth-child(2) {
    width: 55%; /* Description column */
    // text-align: center;

  }
  &:nth-child(3) {
    width: 20%; /* Actions column */
    text-align: center;
  }
`;

export const TableHeaderActionCell = styled(TableHeaderCell)`
  display: flex; /* Enable Flexbox */
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  width: 100%;

  &:nth-child(even) {
    background-color: ${({ theme }) =>
      theme.palette?.background?.rowAlt || '#f4f4f4'};
  }
  &:nth-child(odd) {
    background-color: ${({ theme }) =>
      theme.palette?.background?.default || '#ffffff'};
  }
  &:hover {
    background-color: ${({ theme }) =>
      theme.palette?.action?.hover || '#e0f5e0'};
    cursor: pointer;
  }
`;

export const TableCell = styled.td`
  padding: 18px 18px;
  font-size: 14px;
  font-weight: normal;
`;

export const DateCell = styled(TableCell)`
  font-weight: bold;
`;

export const DescriptionCell = styled(TableCell)`
  max-width: 100px; /* Adjust this value as needed */
  white-space: wrap; /* Prevent wrapping */
  overflow: hidden; /* Truncate overflowing text */
  text-overflow: ellipsis; /* Add ellipsis for long text */
  // background-color:pink;
  // text-align: center;

`;

export const ActionCell = styled(TableCell)`
  display: flex; /* Enable Flexbox */
  justify-content: flex-end; 
  text-align: right;
`;

export const SaveButtonCell = styled(TableCell)`
  display: flex; /* Enable Flexbox */
  justify-content: center; 
  text-align: right;
`;

export const TableFooter = styled.tfoot`
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? theme.palette.text.primary
      : theme.palette.text.primary};
`;

export const TableFooterRow = styled.tr`
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const TableFooterCell = styled.th`
  padding: 14px 28px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Center = styled.div`
  display: flex;
  // flex-direction: row;
  justify-content: center;
`;

export const Right = styled.div`
  display: flex;
  justify-content: right; 
`;

export const Notification = styled.div`
  position: fixed; //center
  top: 80px;
  left: 45%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${({ type }) =>
    type === "success" ? "#4caf50" : "#f44336"};
  color: white;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: fadeInOut 3s ease;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    10% {
      opacity: 1;
      transform: translateY(0);
    }
    90% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;
