import React, { useContext, useState } from "react";
import EditTask from "./EditTask";
import { Box, Button, Container, lighten, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarRateIcon from "@mui/icons-material/StarRate";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import dayjs from "dayjs";
import { TodoContext } from "../context/TodoProvider";

const MainList = () => {
  const {filteredInfo, info, setInfo, handleDelete, setFilteredInfo, change} = useContext(TodoContext)
  const [show, setShow] = useState(null);

  const [edit, setEdit]=useState("")


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e)=>{
e.preventDefault()
const updatedInfo = info.map((item) => 
  item.id === edit.id ? edit : item
);


setInfo(updatedInfo)
setFilteredInfo(updatedInfo)

handleClose()



  }

  return (
    <Container>
      <Box variant="" sx={{ textAlign: "center" }}>
        {filteredInfo.map((item) => (
          <>
            <Stack
              key={item.id}
              onMouseOver={() => setShow(item.id)}
              onMouseLeave={() => setShow(null)}
              direction="row"
              sx={{
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "10px",
                backgroundColor: "lightGray",
                mt: "0.5rem",
              }}
            >
              <Box sx={{ display: "flex", gap: "2rem" }}>
                <Button disabled={!change} sx={{ color: "black" }}>
                  <CheckCircleIcon
                    onClick={() => {
                      const updatedCheck = filteredInfo.map((task) =>
                        task.id === item.id
                          ? { ...task, isChecked: !task.isChecked }
                          : task
                      );
                      setInfo(updatedCheck);
                      setFilteredInfo(updatedCheck);
                    }}
                    sx={{
                      cursor: "pointer",
                      ...(item.isChecked && { color: "green" }),
                    }}
                  />
                </Button>

                <Button disabled={!change} sx={{ color: "black" }}>
                  <StarRateIcon
                    onClick={() => {
                      const updatedInfo = filteredInfo.map((task) =>
                        task.id === item.id
                          ? { ...task, isImportant: !task.isImportant }
                          : task
                      );
                      setInfo(updatedInfo);
                      setFilteredInfo(updatedInfo);
                    }}
                    sx={{
                      cursor: "pointer",
                      ...(item.isImportant && { color: "darkViolet" }),
                    }}
                  />
                </Button>
              </Box>

              <Box
                variant="p"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflowWrap: "break-word",
                  whiteSpace: "pre-wrap",
                  ...(item.isChecked && {
                    textDecoration: "line-through",
                    textDecorationColor: "green",
                    textDecorationThickness: "3px",
                  }),
                }}
              >
                {item.baslik}
              </Box>
              <Box
                variant="p"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  ...(item.isChecked && {
                    textDecoration: "line-through",
                    textDecorationColor: "green",
                    textDecorationThickness: "3px",
                  }),
                  ...(item.isImportant && {
                    color: "darkViolet",
                    fontWeight: "bold",
                  }),
                }}
              >
                {dayjs(item.date).format("MM-DD-YYYY")}
              </Box>

              <Box sx={{ display: "flex", gap: "2rem" }}>
                <Box>
                  <DeleteForeverIcon
                    onClick={() => handleDelete(item.id)}
                    sx={{
                      cursor: "pointer",
                      "&:hover": { color: "red" },
                      ...(show !== item.id && { display: "none" }),
                    }}
                  />
                </Box>
                <Box>
                  <EditIcon
                    onClick={()=>
                      {setEdit(item);
                      
                      handleOpen()}}
                    sx={{
                      cursor: "pointer",
                      color: "gray",
                      "&:hover": { color: "yellowgreen" },
                    }}
                  />
                </Box>
              </Box>
            </Stack>
          </>
        ))}
      </Box>
      <EditTask open={open} edit={edit} info={info} setEdit={setEdit} handleClose={handleClose} handleSubmit={handleSubmit} />
    </Container>
  );
};

export default MainList;
