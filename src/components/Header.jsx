import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Main from "./Main";
import MainList from "./MainList";
import Swal from "sweetalert2";
import dayjs from "dayjs";

const Header = () => {
  const [change, setChange] = useState(true);

  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);

  const handleAddList = (newInfo) => {
    setInfo([...info, newInfo]);
    setFilteredInfo([...info, newInfo]); // her filterda silinmemesi için yedekli çalıstım
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Görevi silmek istediğinizden emin misin?",
      text: "Geri dönüş yok!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Hayır, kalsın",
      confirmButtonText: "Evet, Sil!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Silindi!",
          text: "Görev silindi.",
          icon: "success",
        });
        const updatedInfo = info.filter((item) => item.id !== id);
        setInfo(updatedInfo);
        setFilteredInfo(updatedInfo);
      }
    });
  };
  const handleChecked = () => {
    setFilteredInfo(info.filter((item) => item.isChecked));
    setChange(false);
  };
  const handleNotChecked = () => {
    setFilteredInfo(info.filter((item) => !item.isChecked));
    setChange(false);
  };
  const handleImportant = () => {
    setFilteredInfo(info.filter((item) => item.isImportant));
    setChange(false);
  };
  const handleShowAll = () => {
    setFilteredInfo([...info]);
    setChange(true);
  };
  const handleDate = () => {
   
    setFilteredInfo(info.filter((item) => item.isDate));
    setChange(false);

  };
 
  return (
    <Box sx={{border:"2px solid blueviolet"}}>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        TO DO LIST
      </Typography>

        <Box
          sx={{
            border:"2px solid blue",
            display:"flex",
       flexWrap:"wrap",
       justifyContent:"center",
      // alignItems:"baseline",
       gap: "1rem",
       
            width: "100%",
            height: "80vh",
            
          }}
        >
          <Stack sx={{border:"2px solid red", justifyContent:"center", alignItems:"center", gap:"1rem", height:"50px"}}  direction="row" display={"flex"} flexWrap={"wrap"}>
            <Button sx={{backgroundColor:"black", color:"lightyellow", border:"none", borderRadius:"8px"}} onClick={handleChecked} variant="outlined">
              Tamamlandı: {info.filter((item) => item.isChecked).length}
            </Button>
            <Button sx={{backgroundColor:"black", color:"lightyellow", border:"none", borderRadius:"8px"}} onClick={handleNotChecked} variant="outlined">
              Tamamlanmadı: {info.filter((item) => !item.isChecked).length}
            </Button>
            <Button sx={{backgroundColor:"black", color:"lightyellow", border:"none", borderRadius:"8px"}} onClick={handleImportant} variant="outlined">
              Önemli: {info.filter((item) => item.isImportant).length}
            </Button>
            <Button sx={{backgroundColor:"black", color:"lightyellow", border:"none", borderRadius:"8px"}} onClick={handleShowAll} variant="outlined">
              Tüm Görevler: {info.length}
            </Button>

          
           <Button sx={{backgroundColor:"black", color:"lightyellow", border:"none", borderRadius:"8px"}} onClick={handleDate}
             > Bugünün Görevleri: {info.filter((item)=>item.isDate).length} 

   </Button>
      
          </Stack>

          <Main info={info} setInfo={setInfo} handleAddList={handleAddList} change={change} />
          <MainList
            change={change}
            info={filteredInfo}
            setFilteredInfo={setFilteredInfo}
            setInfo={setInfo}
            handleDelete={handleDelete}

            
            
          />


          
        </Box>
    
     
    
      </Box>
  
  );
};

export default Header;
