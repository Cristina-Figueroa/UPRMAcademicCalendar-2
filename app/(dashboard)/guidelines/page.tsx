"use client"

import * as React from 'react';
import { useEffect, useState } from 'react';
import GuidelinesTable from '@/app/components/Guidelines'
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
  margin: 0;
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

export default function GuidelinesPage() {
  const theme = useTheme();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null

  return (
<>
    <PageContainer theme={theme}>
      <Paragraph theme={theme}>
      Esta página proporciona una <strong>lista general </strong> 
      de las <strong>directrices</strong> seguidas en el <strong>
        proceso de generación del calendario académico</strong>. 
        Estas directrices aseguran que el calendario cumpla con 
        los estándares institucionales e incluya eventos clave 
        como los períodos de exámenes y los plazos académicos. 
        Ten en cuenta que esta no es una lista exhaustiva, y 
        también se deben considerar otras directrices internas y 
        aspectos a tener en cuenta.
      </Paragraph>



    <Suspense fallback={<Loading/>}>
      <ThemeProvider theme={theme}>
        <GuidelinesTable/>
      </ThemeProvider>
</Suspense>
    </PageContainer>

</>


  );
}
