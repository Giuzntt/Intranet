import { SvgIconProps } from "@mui/material";

export interface miniDrawerProps {
    appendChild?: JSX.Element;
    itemSideBar:ISideBar[]
}
 export interface ISideBar {
        id: number,
        //  icons?:JSX.Element
        label: string
        route: string
    
}