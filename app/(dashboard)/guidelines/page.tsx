"use client"

import * as React from 'react';
import GuidelinesTable from '@/app/components/Guidelines'
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';


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

  return (
    <PageContainer theme={theme}>
      <Paragraph theme={theme}>
      This page provides an <strong>overview</strong> of the <strong>guidelines </strong> 
      followed in the <strong>academic calendar generation process</strong>. 
      These guidelines ensure that the calendar meets institutional standards 
      and includes key events such as exam periods and academic deadlines. 
      Please note that this is not an exhaustive list, and other internal 
      guidelines and considerations may also be taken into account.
      </Paragraph>

    <GuidelinesTable/>

    </PageContainer>


  );
}
