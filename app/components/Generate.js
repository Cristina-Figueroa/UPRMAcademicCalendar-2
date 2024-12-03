import React from "react";
import { useTheme } from '@mui/material/styles';
import CircularSpinner from './LoadingSpinner';
import { Button } from "@mui/material";


const Generate = () => {
    const theme = useTheme(); 
    const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CircularSpinner loading={isLoading}/>
      {!isLoading && (
        <Button>Hi!</Button>


      )}

    </>
  );
};

export default Generate;
