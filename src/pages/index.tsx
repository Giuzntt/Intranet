import { Logout, Menu } from "@mui/icons-material"
import { NextPage } from "next"
import Link from "next/link"
import { ContainerNav, ListaNav, NavigationBar,ItemListaNav } from "./style"



const HomePage: NextPage = () =>{
   

    return (

        <>
        <NavigationBar>
            <ContainerNav>
                <ListaNav>
                    <ItemListaNav><Menu/></ItemListaNav>
                    <ItemListaNav><Logout/></ItemListaNav>
                </ListaNav>

            </ContainerNav>
        </NavigationBar>
        <Link href={'./Login'}>
            <a>teste</a>
        </Link>
        </>
        
    )


}

export default HomePage