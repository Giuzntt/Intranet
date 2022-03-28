import { SvgIconComponent } from "@mui/icons-material";

export interface IDisplayComponent{
    display:   ItemDisplayComponent[] | ItemDisplayAvaliation[]
   
}

export interface ItemDisplayComponent {
    id?: number | string; 
    title: string;
    nomeItem: string,
    numeroChamados?: number
    icons: SvgIconComponent;
    colorDiferente: string;
    colorIcon: string;
}





















export interface ItemDisplayAvaliation {
    title: string;
    numeroChamados?: number;
    nomeItem: string,
    icons: SvgIconComponent;
    colorDiferente: string;
    colorIcon: string;
}
