import React from 'react';
import Button from '@mui/material/Button'; 
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  box-sizing: border-box;
  align-items: space-between; /* Centers the content horizontally */
  justify-content: center; /* Centers the content vertically */
`;

const ButtonComponent = ({handleClick}) => {
  const theme = useTheme();

  return (
    <Container theme={theme}>
    {/* Button */}
    <Button 
        className="submit"
        onClick={handleClick}
        variant='contained' 
        sx={{borderRadius:2}}
        > 
        SUBMIT 
        </Button>
    </Container>
  );
}

export default ButtonComponent;
