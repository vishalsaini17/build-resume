import { TextField, TextFieldProps } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";
import InputDate from "../InputDate";


type CustomInputType = 'richtext' | 'date';
type InputType = CustomInputType | HTMLInputTypeAttribute;


type props = {
  isError?: boolean;
  type: InputType;
  onChange?: ((event: { target: { value: string } }) => void) | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
} & TextFieldProps

const Input: React.FC<props> = ({ type = "text", value, label, isError, helperText, onChange, ...attributes }) => {
  switch (type) {
    case "date":
      return (
        <InputDate
          label={label}
          value={`${value}`}
          error={isError}
          helperText={helperText}
          format={"DD-MM-YYYY"}
          onChange={onChange as (event: { target: { value: string } }) => void}
          {...attributes}
        />
      );
    case "richtext":
      return (
        <TextField
          label={label}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={value}
          onChange={onChange}
          error={isError}
          helperText={helperText}
        />
      );
    default:
      return (
        <TextField
          label={label}
          type={type}
          variant="outlined"
          fullWidth
          value={value}
          onChange={onChange}
          error={isError}
          helperText={helperText}
        />
      );
  }

}
export default Input