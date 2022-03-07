import React, { FC } from "react";
import { Box,  useTheme } from "@mui/system";
import {
  Controller,
  SubmitHandler,
  FieldValues,
  useForm,
} from "react-hook-form";

import { Field } from "./types";
import Button from '@mui/material/Button'

interface FormInterface {
  appendChild?: JSX.Element;
  defaultValues?: object;
  fields: Field[];
  onSubmit: (data: SubmitHandler<FieldValues>) => void;
  onCancel: () => void;
  disabled?: boolean;
  viewMode?: boolean;
}
const Form: FC<FormInterface> = ({
  appendChild,
  defaultValues,
  fields,
  onCancel,
  onSubmit,
  disabled = false,
  viewMode = false,
}) => {
  const theme = useTheme();
  const { control, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <Box
      component="form"
      display="grid"
      width="100%"
     onSubmit={handleSubmit(onSubmit)}
    >
      {fields.map(
        ({
          name,
          required,
          placeholder,
          Component,
          options,
          type,
          optionUrl,
          InputLabelProps,
          defaultValue,
        }) => {
          return (
            <Controller
              key={`field-${name}`}
              name={name as never}
              control={control}
              defaultValue={(defaultValue as never) ?? ""}
              rules={{
                required,
              }}
              render={({ field, fieldState: { error } }) => {
                return (
                  <Component
                    field={field}
                    error={error}
                    placeholder={placeholder}
                    options={options}
                    id={name}
                    type={type}
                    optionUrl={optionUrl}
                    InputLabelProps={InputLabelProps}
                  />
                );
              }}
            />
          );
        }
      )}
      {appendChild && appendChild}
      <Box>
        <Button onClick={onCancel} variant="outlined">
          Entrar
        </Button>
       
      </Box>
    </Box>
  );
};

export default Form;
