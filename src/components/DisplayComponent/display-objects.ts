import {  ItemDisplayAvaliation, ItemDisplayComponent } from "./types";
import * as Icon from "@mui/icons-material";

export const stageDisplayComponent:ItemDisplayComponent[] = [
    {
        title: 'Não Solucionado',
        nomeItem: 'Chamados',
        numeroChamados: 0,
        icons: Icon.Close,
        colorDiferente:'#D50000',
        colorIcon:'#EA8080'
    },
    {
        title: 'Em andamento',
        nomeItem: 'Chamados',
        numeroChamados: 0,
        icons: Icon.Timelapse,
        colorDiferente:'#FF9800',
        colorIcon:'#FFCC80'
    },
    {
        title: 'Solucionado',
        nomeItem: 'Chamados',
        numeroChamados: 0,
        icons: Icon.Check,
        colorDiferente:'#00BFA5',
        colorIcon:'#80DFD2'
    },
]


export const stagePanelComponent:ItemDisplayAvaliation[] = [
    {
        title: 'Satisfação',
        nomeItem: '%',
        numeroChamados: 0,
        icons: Icon.SentimentVeryDissatisfied,
        colorIcon: '',
        colorDiferente:'#BF0045'
    },
    {
        title: 'Desempenho',
        nomeItem: '%',
        numeroChamados: 0,
        icons: Icon.Leaderboard,
        colorIcon: '',
        colorDiferente:'#2196F3'
    },
    {
        title: 'Interação',
        nomeItem: '%',
        numeroChamados: 0,
        icons: Icon.PanTool,
        colorIcon: '',
        colorDiferente:'#7B61FF'
    }
]
