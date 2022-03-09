import { NextPage } from "next"
import { Body,    CardLogin, ContainerLogin,  PanelColor } from "./style"
import TextField from '@mui/material/TextField'
import { useState } from "react"
import imagem from '../assets/images/fundo-login-2.svg'
import Link from "next/link"
import ComponentLogin from "../components/ComponenteLogin"



const HomePage: NextPage = () =>{
    const [login, setLogin] = useState('')

    return (
        
        <Body>
            <PanelColor/>
            <CardLogin>
                <ContainerLogin  >
                <ComponentLogin/>
                </ContainerLogin>
                <Link href="./Conteudo">
                   Ir para o meu conteudo
                </Link>
            </CardLogin>
        </Body>
    )


}

export default HomePage