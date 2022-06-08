import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import dataRegister from "../data/dataRegister.json";
import {
  initialValues,
  validationSchema,
} from "../validations/validationSchemaRegister";
import { CustomInputText } from "./CustomInputText";
import './styles.scss'

export const Register = () => {
  return (
    <>
      <h1>
        Registro de usuario
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form
          className="form_container"
          noValidate
          autoComplete="off"
        >
            {dataRegister.map(({ type, name, placeholder, label }) => {
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
           <Button variant="contained" type="submit">Registrar</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
