"use client"

import * as React from 'react';
import HolidaysTable from '@/app/components/Holidays'
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';


const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  // margin: 0;
  margin-top: -10px;
  color: ${({ theme }) =>
  theme.palette.mode === 'dark'
    ? theme.palette.text.primary
    : theme.palette.text.primary};
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  margin-top: -10px;
`;


export default function HolidaysPage() {
  const theme = useTheme();

  return (
    <PageContainer theme={theme}>
      <Paragraph theme={theme}>
      This page provides an <strong>overview</strong> of the <strong>holidays </strong> 
      included in the <strong>academic calendar generation process</strong>. While the holidays follow standard academic guidelines, 
      they can be adjusted to meet the unique requirements of your institution.
      </Paragraph>

      <HolidaysTable/>

    </PageContainer>

  );
}
