import React from 'react'
import EditTask from './EditTask'
import { Box, Container, Stack } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarRateIcon from '@mui/icons-material/StarRate';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const MainList = ({baslik, date1}) => {
  return (
    <Container>
<Box variant="" sx={{ textAlign: "center" }}>
<Stack direction="row" sx={{display:"flex",justifyContent:"space-around", gap:"1rem"}}>
   
    <Box sx={{display:"flex",gap:"2rem"}}>
        <CheckCircleIcon/>
   <StarRateIcon/>
    </Box>
   
   <Box variant="p">{baslik}</Box>
   <Box variant="p" >{date1}</Box>

   <Box sx={{display:"flex",gap:"2rem"}}>
     <EditIcon/>
   <DeleteForeverIcon/>
   </Box>
  
</Stack>
</Box>
        {/* <EditTask/> */}
    </Container>
  )
}

export default MainList