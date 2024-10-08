import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditTask({ open, handleClose, info1, edit, setEdit, handleSubmit }) {
const handleEdit= (e)=>{
  setEdit({...edit, [e.target.name]:e.target.value})
console.log(edit);
}
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField id="standard-basic" name="baslik" label="Başlık" variant="standard" value={edit.baslik} onChange={handleEdit} />

          <TextField id="standard-basic" name="date" label="Tarih" variant="standard" value={dayjs(edit.date).format("MM-DD-YYYY")} onChange={handleEdit}/>
          <Box>
            <Button onClick={handleSubmit} >Kaydet</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
