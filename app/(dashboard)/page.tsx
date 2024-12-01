"use client"

import * as React from 'react';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import SubmitButton from '../components/submitButton';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';
import Home from '../components/Home';
import CircularProgress from '@mui/material/CircularProgress'; 
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

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
  const searchParams = useSearchParams();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null
  return (    
    <Suspense fallback={<div>Loading...</div>}>
    <PageContainer theme={theme}>
      <SubHeader theme={theme}>Academic Calendar Generator</SubHeader>
      <Paragraph theme={theme}>
        The <strong>Academic Calendar Generator</strong> is a tool created by{" "}
        <strong>UPRM Calendar Generator Team</strong> to simplify academic
        calendar planning. Built as part of our capstone project, this tool
        addresses the challenges of manual calendar creation by automating date
        calculations, following institutional guidelines, and adapting to
        unexpected changes.
      </Paragraph>

      <SubHeader theme={theme}>
        Select a start date to get started
      </SubHeader>

      {/* <SubmitButton></SubmitButton> */}
      <Home></Home>

    </PageContainer>
</Suspense>

  );
}
