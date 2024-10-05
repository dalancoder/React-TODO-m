import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Main from "./Main";
import MainList from "./MainList";

const Header = () => {
  const [baslik, setBaslik] = useState("");
  const [date1, setDate1] = useState(null);


  return (
    <Box>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        TO DO LIST
      </Typography>
      <Box
         sx={{
          display: 'grid',
    gridAutoFlow: 'row',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(17, 30px)',
    gap: 1,
          justifyContent:"center"
          
     
        }}
   
       
      >
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"start", width:"75vw", height:"80vh", py:2}} >
          <Stack spacing={2} direction="row" display={"flex"} flexWrap={"wrap"}>
            <Button variant="outlined">Tamamlandı:</Button>
            <Button variant="outlined">Tamamlanmadı:</Button>
            <Button variant="outlined">Önemli:</Button>
          </Stack>
          
        <Main setBaslik={setBaslik} setDate1={setDate1} baslik={baslik} date1={date1}/>
        <MainList baslik={baslik} date1={date1} />
        </Box>

        <Box sx={{ gridColumn: '5', gridRow: '1 /16 ', display: "flex", flexDirection: "column", height: "80vh",width:"15vw"}}>
          <Button variant="outlined">Bugün</Button>
    
        </Box>

      </Box>
    </Box>
  );
};

export default Header;
