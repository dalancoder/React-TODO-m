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
isChecked:false,
isDate:dayjs().format('MM-DD-YYYY') === dayjs(date).format("MM-DD-YYYY")
   }
console.log(newInfo.isDate);
   handleAddList(newInfo)

   setBaslik("");
   setDate("")

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
       
          <DatePicker
           value={dayjs(date)}
            onChange={(newDate)=>setDate(newDate)}
            label="Tarih"
            // renderInput={(params) => <input {...params} />}
            // error={false}
            sx={{color: '#1565c0',
          borderRadius: '12px',
          borderWidth: '0px',
          borderColor: '#2196f3',
          border: '0px solid',
         }}
      //      
           
          />
       
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
