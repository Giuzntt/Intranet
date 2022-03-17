import { SvgIconComponent } from "@mui/icons-material";

import React from "react";

export interface miniDrawerProps {
    appendChild?: JSX.Element;
    itemSideBar:ISideBar[];
}
 export interface ISideBar {
        id: number;
        icons:SvgIconComponent;
        label: string;
        route: string;
   
}