import { AddAlarm, Check, Close, Timelapse } from "@mui/icons-material";
import { Box } from "@mui/material";
import axios from "axios";
import { log } from "console";
import { useEffect, useState } from "react";
import client from "../../api/api";

import {
  BoxDisplay,
  TituloCaixa,
  TextoDisplay,
  ContainerDisplay,
} from "./styles";
import { IDisplayComponent, ItemDisplayComponent } from "./types";

const DisplayComponent = ({ display }: IDisplayComponent) => {
  //criar estado taskNotSolved

  const [displayComponent, setDisplayComponent] = useState<
    ItemDisplayComponent[]
  >([]);
  const getPanel = async () => {
    const response = await client.get("/displayComponent");
    console.log("API DISPLAY =>", response.data[0]);

    setDisplayComponent(response.data);
  };

  useEffect(() => {
    getPanel();
  }, []);

  return (
    <ContainerDisplay>
      {display.map(
        ({ icons: Icons, nomeItem, colorDiferente, title }, index) => {
          return (
            <BoxDisplay key={index} cor={colorDiferente}>
              <TituloCaixa variant="h5">{title}</TituloCaixa>
              <Box
                sx={{
                  margin: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  bottom: "0",
                }}
              >
                <TextoDisplay>
                  {displayComponent[index]?.numeroChamados}
                </TextoDisplay>

                <TextoDisplay>{nomeItem}</TextoDisplay>
                <Icons
                  sx={{
                    color: "#FFF",
                    fontSize: "100px",
                    position: "relative",
                    left: "0px",
                  }}
                />
              </Box>
            </BoxDisplay>
          );
        }
      )}
    </ContainerDisplay>
  );
};

export default DisplayComponent;
