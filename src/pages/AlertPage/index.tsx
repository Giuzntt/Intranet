import { Search } from "@mui/icons-material";
import { Container, TextField, Button, Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { BoxAlert } from "../../assets/AlertPageStyle/styles";
import BasicTabs from "../../components/tableComponent";







const AlertPage = () => {


  return (
    <Container maxWidth="xl" fixed={true} disableGutters={true}>
      <BoxAlert>
        <Box display={"flex"}>
          <TextField
            id="standard-basic"
            label="Pesquisar chamados"
            variant="outlined"
            fullWidth={true}
            sx={{
              marginRight: "1rem",
              fontSize: "1.2rem",
            }}
          />
          <Button variant="contained">
            <Search />
          </Button>
        </Box>
       <BasicTabs></BasicTabs>
      </BoxAlert>
    </Container>
  );
};

export default AlertPage;
