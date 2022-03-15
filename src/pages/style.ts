import styled from "styled-components";


export const NavigationBar = styled.header`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &::after{
        content: '';
        display: table;
        clear: both;
    }
`

export const ContainerNav = styled.div`
    width: 100%;
    height: 10vh;
    margin: 0 auto;
`
export const ListaNav = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
`
export const ItemListaNav = styled.li`
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    color: #C4C4C4;
    align-items: center;
    border: .1px solid #C4C4C4;
    list-style: none;
    margin: auto 0;
  
`




