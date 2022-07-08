import { TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

export const CustomInputText = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <div className="input_group">
      <TextField
        id={props.id}
        variant="outlined"
        label={label}
        fullWidth
        {...field}
        {...props}
      />
      <ErrorMessage name={props.name} component="span" className="text_error" />
    </div>
  );
};
