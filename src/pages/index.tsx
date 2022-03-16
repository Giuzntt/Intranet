import { Logout, Menu } from "@mui/icons-material"
import { NextPage } from "next"
import Link from "next/link"
import { ContainerNav, ListaNav, NavigationBar,ItemListaNav } from "./style"
import { Button, TextField, Typography } from '@mui/material'
import MiniDrawer from "../components/DrawerMenu"
import { stageSideBar } from "./objects-sidebar"




const HomePage: NextPage = () =>{
   

    return (
        <>
     
        <MiniDrawer appendChild={
               <Typography variant="h1" color="initial">teste</Typography>
        }
        itemSideBar={stageSideBar}
        />
        
        
        
       </>
    )


}

export default HomePage