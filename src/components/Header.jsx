import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Main from "./Main";
import MainList from "./MainList";

const Header = () => {
  

  const [info, setInfo]=useState([])

const handleAddList = (newInfo)=>{
setInfo([...info, newInfo])
}

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
            <Button variant="outlined">Tamamlandı:{info.filter((item)=>item.isChecked).length}</Button>
            <Button variant="outlined">Tamamlanmadı:{info.filter((item)=>!item.isChecked).length}</Button>
          <Button variant="outlined">Önemli:{info.filter((item)=>item.isImportant).length}</Button>
            
            
          </Stack>
          
        <Main info={info} setInfo={setInfo} handleAddList={handleAddList} />
        <MainList info={info}  setInfo={setInfo}/>
        </Box>

        <Box sx={{ gridColumn: '5', gridRow: '1 /16 ', display: "flex", flexDirection: "column", height: "80vh",width:"15vw"}}>
          <Button variant="outlined">Bugün</Button>
    
        </Box>


      </Box>
    </Box>
  );
};

export default Header;
