import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Main from "./Main";
import MainList from "./MainList";
import Swal from "sweetalert2";

const Header = () => {
  

  const [info, setInfo]=useState([])
  const [filteredInfo, setFilteredInfo] = useState([]);

const handleAddList = (newInfo)=>{
setInfo([...info, newInfo])
setFilteredInfo([...info, newInfo])
}
const handleDelete = (id)=>{

  Swal.fire({
    title: "Görevi silmek istediğinizden emin misiniz?",
    text: "Geri dönüş yok!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText:"Hayır, kalsın",
    confirmButtonText: "Evet, Sil!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Silindi!",
        text: "Görev silindi.",
        icon: "success"
      });
      const updatedInfo = info.filter((item)=>item.id !== id );
      setInfo(updatedInfo)
      setFilteredInfo(updatedInfo)
    }
  });

}
const handleChecked=()=>{
  setFilteredInfo(info.filter((item) => item.isChecked))
}
const handleNotChecked = ()=>{
  setFilteredInfo(info.filter((item) => !item.isChecked))
}
const handleShowAll =()=>{
  setFilteredInfo([...info])

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
            <Button onClick={handleChecked} variant="outlined">Tamamlandı:{info.filter((item)=>item.isChecked).length}</Button>
            <Button onClick={handleNotChecked} variant="outlined">Tamamlanmadı:{info.filter((item)=>!item.isChecked).length}</Button>
          <Button variant="outlined">Önemli:{info.filter((item)=>item.isImportant).length}</Button>
          <Button onClick={handleShowAll} variant="outlined">Tüm Görevler:{info.length}</Button>
            
            
          </Stack>
          
        <Main info={info} setInfo={setInfo} handleAddList={handleAddList} />
        <MainList info={filteredInfo}  setInfo={setInfo} handleDelete={handleDelete}/>
        </Box>

        <Box sx={{ gridColumn: '5', gridRow: '1 /16 ', display: "flex", flexDirection: "column", height: "80vh",width:"15vw"}}>
          <Button variant="outlined">Bugün</Button>
    
        </Box>


      </Box>
    </Box>
  );
};

export default Header;
