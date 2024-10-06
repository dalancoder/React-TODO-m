import React, { useState } from 'react'
import EditTask from './EditTask'
import { Box, Button, Container, Stack } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarRateIcon from '@mui/icons-material/StarRate';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import dayjs from 'dayjs';

const MainList = ({info, setInfo, handleDelete,setFilteredInfo, change, setChange}) => {
  
  const [show, setShow]=useState(null)
 


  return (
    
     
 
    <Container  >
<Box variant="" sx={{ textAlign: "center" }}>
{
  info.map((item)=>(
    <>
<Stack key={item.id} onMouseOver={()=>setShow(item.id)} onMouseLeave={()=>setShow(null)} direction="row" sx={{display:"flex", justifyContent:"space-between", gap:"1rem"}}>

      <Box sx={{display:"flex",gap:"2rem"}}>
    
        <Button disabled={!change}>
          <CheckCircleIcon onClick={()=>{
          
          const updatedCheck=info.map((task)=> task.id === item.id ? {...task, isChecked: !task.isChecked}:task);
    setInfo(updatedCheck); setFilteredInfo(updatedCheck)
          
     }} sx={{cursor:"pointer", ...( item.isChecked && {color:"green"})}} />
        </Button>
         
<Button  disabled={!change}>
  <StarRateIcon onClick={()=>{
    const updatedInfo=info.map((task)=> task.id === item.id ? {...task, isImportant: !task.isImportant}:task);
    setInfo(updatedInfo); setFilteredInfo(updatedInfo);
   }} sx={{cursor:"pointer", ...(item.isImportant && {color:"orange"})}} /> 
     
</Button>
             
   


      

    </Box>
   
   <Box variant="p" sx={{...(item.isChecked && {textDecoration:"line-through",  textDecorationColor: "green", textDecorationThickness: "3px"})}} >{item.baslik}</Box>
   <Box variant="p" sx={{...(item.isChecked && {textDecoration:"line-through", textDecorationColor: "green", textDecorationThickness: "3px"})}} >{dayjs(item.date).format("MM-DD-YYYY")}</Box>

   <Box sx={{display:"flex",gap:"2rem"}}>

     <DeleteForeverIcon onClick={()=>handleDelete(item.id)} sx={{cursor:"pointer","&:hover":{color:"red"},...(show !== item.id && {display:"none"})}} />
     <EditIcon sx={{cursor:"pointer", color:"gray", "&:hover":{color:"yellowgreen"}}} />
 
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