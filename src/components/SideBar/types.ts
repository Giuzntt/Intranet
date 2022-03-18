import { SvgIconComponent } from "@mui/icons-material";

import React from "react";

export interface miniDrawerProps {
    itemSideBar:ISideBar[];
}
 export interface ISideBar {
        id: number;
        icons:SvgIconComponent;
        label: string;
        route: string;
}

