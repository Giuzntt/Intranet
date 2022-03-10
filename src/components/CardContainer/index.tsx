import { Box, Card } from "@mui/material"
import { MyBoxContainer } from "./style"





const CardContainer = ({children}) =>{
    return (
        <Card>
            <MyBoxContainer >{children}</MyBoxContainer>
        </Card>
    )
}

export default CardContainer