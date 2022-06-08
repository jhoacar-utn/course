import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import dataLogin from "../data/dataLogin.json";
import {
  initialValues,
  validationSchema,
} from "../validations/validationSchemaLogin";
import { CustomInputText } from "./CustomInputText";
import './styles.scss'

export const Login = () => {
  const loginSubmit = (values:any) => {
      console.log(values);

  }
  return (
    <>
      <h1>
        Inicia Sesión
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          loginSubmit(values)
        }}
      >
        {(formik) => (
          <Form
          className="form_container"
          noValidate
          autoComplete="off"
        >
            {dataLogin.map(({ type, name, placeholder, label }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <CustomInputText
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              }
              throw new Error(`El type: ${type}, no es soportado`);
            })}
           <Button variant="contained" type="submit">Iniciar sesión</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
