import * as Icon from "@mui/icons-material";
import {  ISideBar } from "../components/DrawerMenu/types";

export const stageSideBar: ISideBar[] = [
        {
            id:1,
            icons: Icon.Home,
            route: '../Home',
            label:'Home Page'
        },
        {
            id:2,
            icons: Icon.AddAlert,
            route: '../Login',
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