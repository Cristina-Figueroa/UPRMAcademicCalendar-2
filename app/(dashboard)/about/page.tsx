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
      <Header theme={theme}>Acerca del Generador de Calendario Academicos UPRM</Header>
      <Paragraph theme={theme}>
      El Generador de Calendarios Académicos es una herramienta poderosa diseñada para simplificar el proceso de creación y modificación de calendarios académicos en universidades. Esta herramienta automatiza cálculos complejos de fechas, sigue las directrices institucionales y ofrece flexibilidad para ajustar los calendarios ante cambios inesperados.
      </Paragraph>

      {/* <SubHeader theme={theme}>Key Features of the Academic Calendar Generator:
</SubHeader>
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
      </FeatureList> */}

    <SubHeader theme={theme}>
    Cómo funciona:
      </SubHeader>
      <FeatureList theme={theme}>
        <FeatureItem theme={theme}>
          <strong>Dashboard:</strong> La interfaz principal donde puedes ingresar la fecha de inicio y el período académico para generar un nuevo calendario.</FeatureItem>
        <FeatureItem theme={theme}>
        <strong>Página de Feriados:</strong> Muestra una tabla con todos los días festivos en tu base de datos para asegurar que el calendario respete esas fechas.
        </FeatureItem>
        <FeatureItem theme={theme}>
        <strong> Página de Directrices:</strong> Presenta una tabla con todas las directrices institucionales para garantizar que el calendario cumpla con todas las reglas y regulaciones.
        </FeatureItem>
      </FeatureList> 



      <SubHeader theme={theme}>Contactanos!</SubHeader>
      <Paragraph theme={theme}>
      Si tienes preguntas, comentarios o te gustaría discutir mejoras adicionales, ¡no dudes en ponerte en contacto!
      </Paragraph>
      <Contact theme={theme}>
        📧 Contáctanos en: <Email>cristina.figueroa7@upr.edu</Email>
      </Contact>
      <Paragraph theme={theme}>
      Gracias por utilizar el Generador de Calendarios Académicos. ¡Esperamos que haga tu planificación académica más fluida y eficiente!
      </Paragraph>
    </PageContainer>
  );
}
