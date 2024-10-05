import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, TextField } from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const Main = ({info, setInfo, handleAddList}) => {
  const [baslik, setBaslik] = useState("");
  const [date, setDate] = useState(null);

 

  const handleSubmit = (e) => {
    e.preventDefault();

   let newInfo = {
id:new Date().getTime(),
baslik:baslik,
date:date,
isImportant:false,
isChecked:false
   }
console.log(baslik, date);
   handleAddList(newInfo)


  };


  return (
    <div>
      <Box
       
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
         value={baslik}
          onChange={(e)=> setBaslik(e.target.value)}
          id="standard-basic"
          label="Başlık"
          variant="standard"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DemoContainer components={['DatePicker']}> */}
          <DatePicker
          //  value={}
            onChange={(newDate)=>setDate(newDate)}
            label="Tarih"
            renderInput={(params) => <input {...params} />}
          />
          {/* </DemoContainer> */}
        </LocalizationProvider>

        <Button
     
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Görev Ekle
        </Button>
      </Box>
    </div>
  );
};

export default Main;
