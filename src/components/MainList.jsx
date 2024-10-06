import React, { useState } from 'react'
import EditTask from './EditTask'
import { Box, Container, Stack } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarRateIcon from '@mui/icons-material/StarRate';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import dayjs from 'dayjs';

const MainList = ({info, setInfo}) => {
  
  const [show, setShow]=useState(null)
 


  return (
    
     
 
    <Container  >
<Box variant="" sx={{ textAlign: "center" }}>
{
  info.map((item)=>(
    <>
<Stack key={item.id} onMouseOver={()=>setShow(item.id)} onMouseLeave={()=>setShow(null)} direction="row" sx={{display:"flex", justifyContent:"space-between", gap:"1rem"}}>

      <Box sx={{display:"flex",gap:"2rem"}}>
        <CheckCircleIcon onClick={()=>{
    const updatedCheck=info.map((task)=> task.id === item.id ? {...task, isChecked: !task.isChecked}:task);
    setInfo(updatedCheck); }} sx={{cursor:"pointer", ...(item.isChecked && {color:"green"})}} />
   <StarRateIcon onClick={()=>{
    const updatedInfo=info.map((task)=> task.id === item.id ? {...task, isImportant: !task.isImportant}:task);
    setInfo(updatedInfo);
   }} sx={{cursor:"pointer", ...(item.isImportant && {color:"red"})}} />
    </Box>
   
   <Box variant="p" sx={{...(item.isChecked && {textDecoration:"line-through",  textDecorationColor: "green", textDecorationThickness: "3px"})}} >{item.baslik}</Box>
   <Box variant="p" sx={{...(item.isChecked && {textDecoration:"line-through", textDecorationColor: "green", textDecorationThickness: "3px"})}} >{dayjs(item.date).format("MM-DD-YYYY")}</Box>

   <Box sx={{display:"flex",gap:"2rem"}}>

     <DeleteForeverIcon sx={{...(show !== item.id && {display:"none"})}} />
     <EditIcon  />
 
   </Box>
    
   


   
  
</Stack>
</>
    
  ))
}
</Box>
        {/* <EditTask/> */}
    </Container>
       
      )
}

export default MainList