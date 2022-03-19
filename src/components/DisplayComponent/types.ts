import { SvgIconComponent } from "@mui/icons-material";

export interface IDisplayComponent{
    displayComponent:   ItemDisplayComponent[]
}

export interface ItemDisplayComponent {
    title: string;
    numeroChamados: number;
    icons: SvgIconComponent;
    colorDiferente: string;
}