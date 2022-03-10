
import { FC } from 'react'
import { MyTextField } from './style'

interface InterfaceTextField {
    type?: string,
    placeholder: string

}
const  TextFieldComponent:FC<InterfaceTextField> = ({
        type='text',
        placeholder
 }) =>{

    return (
        <>
            <MyTextField 
             variant='outlined'
             label={placeholder}
              type={type}
              />
        </>

    )
}


export default TextFieldComponent

