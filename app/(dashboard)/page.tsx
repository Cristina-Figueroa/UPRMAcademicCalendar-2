"use client"

import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Home from '../components/Home';
import { Suspense } from 'react';
import Loading from './loading';

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




export default function HomePage() {
  const theme = useTheme();

  const [data, setData] = useState(null); // State to store fetched data
  const [isLoading, setIsLoading] = useState(true); // Loading state for async data
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        // Your GET endpoint for fetching data
        const response = await fetch('/api/your-endpoint'); // Replace with your actual endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // Data fetching finished
      }
    }

    fetchData();
  }, []); // Run this effect once on component mount

  if (!isClient) {
    return null;
  }



  return (    

    <>
    <PageContainer theme={theme}>
    <SubHeader theme={theme}>Academic Calendar Generation Tool</SubHeader>
              <Paragraph theme={theme}>
                ¡Bienvenidos! Esta herramienta fue creada por el grupo de 
                <strong> UPRM Calendar Generator Platform Team</strong> para
                simplificar la creación de calendarios académicos, automatizando
                el proceso de cálculos de las fechas y agilizando el proceso de añadir las 
                regulaciones institucionales.

                {/* The <strong>Academic Calendar Generator</strong> is a tool created by{" "}
                <strong>UPRM Calendar Generator Team</strong> to simplify academic
                calendar planning. Built as part of our capstone project, this tool
                addresses the challenges of manual calendar creation by automating date
                calculations, following institutional guidelines, and adapting to
                unexpected changes. */}
              </Paragraph>
    <Suspense fallback={<Loading/>}>

      <ThemeProvider theme={theme}>
      {isLoading ? <Loading /> : <Home />}

        {/* <Home/> */}
      </ThemeProvider>
</Suspense>


    </PageContainer>
</>
  );
}
