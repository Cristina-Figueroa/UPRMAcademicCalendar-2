'use client';

import React from 'react';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 270px;
`;

const PaginationButton = styled(Button)`
  margin: 0 5px;
  border-radius: 25px;
`;


const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
    const theme = useTheme();

    return (
        <PaginationContainer>
            <PaginationButton
                variant="contained"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ArrowBackIosNewRoundedIcon/>
            </PaginationButton>
            <span>Page {currentPage} of {totalPages}</span>
            <PaginationButton
                variant="contained"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <ArrowForwardIosRoundedIcon/>
            </PaginationButton>
        </PaginationContainer>
    );
};

export default PaginationComponent;
