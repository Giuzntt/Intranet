
import { FC } from 'react'
import { MyTextField } from './style'

interface InterfaceTextField {
    type?: string,
    placeholder: string,
    defaultValue: any,
    disabled: boolean,
    error: boolean,

}
const  TextFieldComponent:FC<InterfaceTextField> = ({
        type='text',
        placeholder,
        defaultValue,
        disabled,
        error
 }) =>{

    return (
        
            <MyTextField 
             variant='outlined'
             color='primary'
             label={placeholder}
             type={type}
              />
       
    )
}


export default TextFieldComponent

