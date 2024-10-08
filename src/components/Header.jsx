import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext} from "react";
import Main from "./Main";
import MainList from "./MainList";
import { TodoContext } from "../context/TodoProvider";

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
    <Box sx={{ border: "2px solid blueviolet" }}>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        TO DO LIST
      </Typography>

      <Box
        sx={{
          border: "2px solid blue",
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
            border: "2px solid red",
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
              backgroundColor: "black",
              color: "lightyellow",
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
              backgroundColor: "black",
              color: "lightyellow",
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
              backgroundColor: "black",
              color: "lightyellow",
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
              backgroundColor: "black",
              color: "lightyellow",
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
              backgroundColor: "black",
              color: "lightyellow",
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
