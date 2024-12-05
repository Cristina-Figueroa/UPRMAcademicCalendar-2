"use client"

import * as React from 'react';
import { useEffect, useState } from 'react';
import HolidaysTable from '@/app/components/Holidays'
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';
import CircularProgress from '@mui/material/CircularProgress'; 
import { Suspense } from 'react';
import Loading from '../loading';


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

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
<>

    <PageContainer theme={theme}>
      <Paragraph theme={theme}>
      Esta página proporciona una <strong>lista general</strong> de 
      los <strong>días festivos</strong> incluidos en el <strong>proceso de 
      generación del calendario académico</strong>. Aunque los días 
      festivos siguen las directrices académicas estándar de Puerto Rico, pueden 
      ajustarse para cumplir con los requisitos únicos de tu institución.
      </Paragraph>
    <Suspense fallback={<Loading/>}>

      <ThemeProvider theme={theme}>
        <HolidaysTable/>
      </ThemeProvider>
</Suspense>
    </PageContainer>
</>
  );
}
