import { NextPage } from "next"
import { Body,    CardLogin, Input, PanelColor } from "./style"
import TextField from '@mui/material/TextField'
import { useState } from "react"
import imagem from '../assets/images/fundo-login-2.svg'




const HomePage: NextPage = () =>{
    const [login, setLogin] = useState('')

    return (
        
        <Body>
            <PanelColor/>
            <CardLogin>
                <Input type={'text'} ></Input>
            </CardLogin>
        </Body>
    )


}

export default HomePage