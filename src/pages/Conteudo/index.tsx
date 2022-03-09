import { useEffect, useState } from "react"





// COMO USAR OS HOOKS

const Conteudo = () =>{

    const [counter, setCounter]  = useState(0)
     const [boleano, setBoleano] = useState(true)


     useEffect(()=>{
        console.log(counter);
        
     }, [counter])
    //EXEMPLO USE STATE
    function addCounter(){
        setTimeout(()=>{
            setCounter((prevState)=>prevState+1)
        }, 100)
        
    }
    function minusCounter(){
        setCounter(counter+1)
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={addCounter}>+</button>        
            <button onClick={minusCounter}>-</button>        
            {console.log(boleano)}
                
            {/* EXEMPLO ARRAY DE DEPENDÊNCIA     */}
            <button onClick={()=>
                setBoleano((prevState)=>!prevState)}>Habilitar Balanca</button>
        </>



    )

}


export default Conteudo