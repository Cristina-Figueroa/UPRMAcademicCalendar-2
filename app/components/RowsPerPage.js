'use client';

import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styled from "styled-components";


const RowsPerPageContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const RowsPerPage = ({ rowsPerPage, onRowsPerPageChange }) => {

    return (
      <RowsPerPageContainer>
          Rows per page:
          <Select
            value={rowsPerPage}
            onChange={onRowsPerPageChange}
            style={{ marginLeft: 10 , maxHeight: 30 }}
          >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
          </Select>
      </RowsPerPageContainer>

    );
};

export default RowsPerPage;
