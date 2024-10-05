import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, TextField } from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const Main = ({setBaslik, setDate1, baslik, date1}) => {


  const handleSubmit = (e) => {
    e.preventDefault();

  console.log(baslik, date1);
  };


  return (
    <div>
      <Box
        value={baslik}
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
          onChange={(e) => setBaslik(e.target.value)}
          id="standard-basic"
          label="Başlık"
          variant="standard"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DemoContainer components={['DatePicker']}> */}
          <DatePicker
           value={date1}
            onChange={(newDate) => setDate1(newDate)}
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
