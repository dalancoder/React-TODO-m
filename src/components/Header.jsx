import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext} from "react";
import Main from "./Main";
import MainList from "./MainList";
import { TodoContext } from "../context/TodoProvider";
import { blueGrey } from "@mui/material/colors";

const Header = () => {
  const {
    info,
    handleChecked,
    handleNotChecked,
    handleImportant,
    handleShowAll,
    handleDate,
  } = useContext(TodoContext);


  return (
    <Box >
      <Typography variant="h1" sx={{ textAlign: "center", fontFamily:"mono", m:"15px" , backgroundColor:"#FAFAE9", color:"orange", boxShadow:"0px 0px 5px 5px gray", borderRadius:"15px", textShadow:"2px 2px 5px gray"}}>
        TO DO LIST
      </Typography>

      <Box
        sx={{
          
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          // alignItems:"baseline",
          gap: "1rem",

          width: "100%",
          height: "80vh",
        }}
      >
        <Stack
          sx={{
            
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
          direction="row"
          display={"flex"}
          flexWrap={"wrap"}
        >
          <Button
            sx={{
              backgroundColor: "darkorange",
              "&: hover":{boxShadow:"0 0 5px 3px gray", color:"darkorange", backgroundColor:"lightyellow", fontWeight:"900"},
              color: "lightyellow",
              textShadow:"1px 1px 1px darkgray",
              border: "none",
              borderRadius: "8px",
            }}
            onClick={handleChecked}
            variant="outlined"
          >
            Tamamlandı: {info.filter((item) => item.isChecked).length}
          </Button>
          <Button
            sx={{
             backgroundColor: "darkorange",
              "&: hover":{boxShadow:"0 0 5px 3px gray", color:"darkorange", backgroundColor:"lightyellow", fontWeight:"900"},
              color: "lightyellow",
              textShadow:"1px 1px 1px darkgray",
              border: "none",
              borderRadius: "8px",
            }}
            onClick={handleNotChecked}
            variant="outlined"
          >
            Tamamlanmadı: {info.filter((item) => !item.isChecked).length}
          </Button>
          <Button
            sx={{
             backgroundColor: "darkorange",
              "&: hover":{boxShadow:"0 0 5px 3px gray", color:"darkorange", backgroundColor:"lightyellow", fontWeight:"900"},
              color: "lightyellow",
              textShadow:"1px 1px 1px darkgray",
              border: "none",
              borderRadius: "8px",
            }}
            onClick={handleImportant}
            variant="outlined"
          >
            Önemli: {info.filter((item) => item.isImportant).length}
          </Button>
          <Button
            sx={{
             backgroundColor: "darkorange",
              "&: hover":{boxShadow:"0 0 5px 3px gray", color:"darkorange", backgroundColor:"lightyellow", fontWeight:"900"},
              color: "lightyellow",
              textShadow:"1px 1px 1px darkgray",
              border: "none",
              borderRadius: "8px",
            }}
            onClick={handleShowAll}
            variant="outlined"
          >
            Tüm Görevler: {info.length}
          </Button>

          <Button
            sx={{
              backgroundColor: "darkorange",
              "&: hover":{boxShadow:"0 0 5px 3px gray", color:"darkorange", backgroundColor:"lightyellow", fontWeight:"900"},
              color: "lightyellow",
              textShadow:"1px 1px 1px darkgray",
              border: "none",
              borderRadius: "8px",
            }}
            onClick={handleDate}
          >
            {" "}
            Bugünün Görevleri: {info.filter((item) => item.isDate).length}
          </Button>
        </Stack>

        <Main />
        <MainList />
      </Box>
    </Box>
  );
};

export default Header;
