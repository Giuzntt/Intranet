import {  ItemDisplayComponent } from "./types";
import * as Icon from "@mui/icons-material";

export const stageDisplayComponent:ItemDisplayComponent[] = [
    {
        title: 'Não Solucionado',
        numeroChamados: 0,
        icons: Icon.Close,
        colorDiferente:'#D50000'
    },
    {
        title: 'Em andamento',
        numeroChamados: 0,
        icons: Icon.Timelapse,
        colorDiferente:'#FF9800'
    },
    {
        title: ' Solucionado',
        numeroChamados: 0,
        icons: Icon.Check,
        colorDiferente:'#00BFA5'
    }


]
