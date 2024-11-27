"use client"

import * as React from 'react';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';

// npm install styled-components

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

const Header = styled.h1`
  // color: #2c3e50;
  color: ${({ theme }) =>
  theme.palette.mode === 'dark'
    ? theme.palette.text.primary
    : theme.palette.text.primary};
  // text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
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

const FeatureList = styled.ul`
  margin-left: 20px;
`;

const FeatureItem = styled.li`
  margin-bottom: 5px;
`;

const Contact = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;

const Email = styled.span`
  color: #2980b9;
`;



export default function AboutPage() {

  const theme = useTheme();

  return (
<PageContainer theme={theme}>
      <Header theme={theme}>About the Academic Calendar Generator</Header>
      <Paragraph theme={theme}>
        The <strong>Academic Calendar Generator</strong> is a tool created by{" "}
        <strong>UPRM Calendar Generator Team</strong> to simplify academic
        calendar planning. Built as part of our capstone project, this tool
        addresses the challenges of manual calendar creation by automating date
        calculations, following institutional guidelines, and adapting to
        unexpected changes.
      </Paragraph>
      <Paragraph theme={theme}>
        Our goal is to provide administrators and educators with an easy-to-use, reliable,
        and customizable solution to streamline the calendar creation process.
      </Paragraph>

      <SubHeader theme={theme}>What Does This Tool Do?</SubHeader>
      <Paragraph theme={theme}>
        The Academic Calendar Generator simplifies the process of building
        institutional academic calendars by automating date calculations,
        ensuring adherence to institutional guidelines, and producing
        customizable outputs. 
        </Paragraph>

        <Paragraph theme={theme}>
        With this tool, you can:
      </Paragraph>
      <FeatureList theme={theme}>
        <FeatureItem theme={theme}>Generate academic calendars based on start date and academic period.</FeatureItem>
        <FeatureItem theme={theme}>Adjust quickly for unexpected changes.</FeatureItem>
        <FeatureItem theme={theme}>Export your calendar in PDF format.</FeatureItem>
      </FeatureList>

      <SubHeader theme={theme}>Get in Touch</SubHeader>
      <Paragraph theme={theme}>
        If you have questions, feedback, or would like to discuss further
        improvements, don’t hesitate to reach out!
      </Paragraph>
      <Contact theme={theme}>
        📧 Contact us at: <Email>cristina.figueroa7@upr.edu</Email>
      </Contact>
      <Paragraph theme={theme}>
        Thank you for using the Academic Calendar
        Generator. We hope it makes your planning process smoother and more
        efficient!
      </Paragraph>
    </PageContainer>
  );
}
