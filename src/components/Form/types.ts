import { InputLabelProps } from "@mui/material";


export interface Field {
  Component: any;
  options?: {
    label: string;
    value: string | number;
  }[];
  optionUrl?: string;
  name: string;
  required?: string;
  placeholder: string;
  InputLabelProps?: InputLabelProps;
  type?: string;
  defaultValue?: string | boolean;
  disabled?: boolean | ((value: boolean) => boolean);
}
