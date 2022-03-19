import * as Icon from "@mui/icons-material";


import {   ISideBar } from "../components/SideBar/types";

export const stageSideBar: ISideBar[] = [
        {
            id:1,
            icons: Icon.Home,
            route: '../',
            label:'Home Page'
        },
        {
            id:2,
            icons: Icon.AddAlert,
            route: '../TestePage',
            label:'Chamados'
        },
        {
            id:3,
            icons: Icon.AppRegistration,
            route: '../Login',
            label:'Cadastros'
        },
        {
            id:4,
            icons: Icon.HomeRepairService,
            route: '../Login',
            label:'Estoque'
        },
        {
            id:5,
            icons: Icon.LockReset,
            route: '../Login',
            label:'Controle'
        },
        
]



