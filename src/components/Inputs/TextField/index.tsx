import React, { FC } from "react";
import { TextField, InputProps, InputLabelProps } from "@mui/material";
import { FieldError, ControllerRenderProps } from "react-hook-form";

import useStyles from "./styles";

interface TextInput {
  field: ControllerRenderProps<any, any>;
  error: FieldError;
  placeholder: string;
  className?: any;
  InputProps?: InputProps;
  InputLabelProps?: InputLabelProps;
  type?: string;
}

const TextInput: FC<TextInput> = ({
  field,
  error,
  placeholder,
  InputProps,
  className,
  type = "text",
  InputLabelProps,
}) => {
//   const classes = useStyles();
  return (
    <TextField
      {...field}
      error={Boolean(error?.message)}
      helperText={error?.message}
    //   FormHelperTextProps={{
    //     className: classes.helperText,
    //   }}
      InputLabelProps={InputLabelProps}
      label={placeholder}
      InputProps={InputProps}
      className={className}
      color="primary"
      variant="outlined"
      type={type}
    />
  );
};

interface ICommonTextInput {
  disabled?: boolean;
  onChange: (data: any) => void;
  placeholder: string;
  type?: string;
  value: string;
}

export const CommonTextInput: FC<ICommonTextInput> = ({
  disabled = false,
  onChange,
  placeholder,
  type = "text",
  value,
}) => {
  return (
    <TextField
      disabled={disabled}
      label={placeholder}
      color="primary"
      onChange={onChange}
      type={type}
      value={value}
      variant="outlined"
    />
  );
};

export default TextInput;
