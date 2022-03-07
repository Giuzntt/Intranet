import { Field } from "../../components/Form/types";
import TextInput from "../../components/Inputs/TextField";


export const actionLogin: Field[]=[
    {
        name:'login',
        placeholder:'Login',
        required: 'Campo Obrigatório',
        Component: TextInput
    },
    {
        name:'passowrd',
        placeholder:'Senha',
        required: 'Campo Obrigatório',
        Component: TextInput
    }

]