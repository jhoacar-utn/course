import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import dataLogin from "../data/dataLogin.json";
import {
  initialValues,
  validationSchema,
} from "../validations/validationSchemaLogin";
import { CustomInputText } from "../components/CustomInputText";
import "./styles.scss";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";



export const Login = () => {
  const {loginSubmit,isLogin} = useContext(AuthContext)
  
const handleSubmit = (obj:any) => {
  loginSubmit(obj);
}
  return (
    <>
    {isLogin && <Navigate to="/dashboard" replace={true} />}
      <h1 className="title_login">Inicia Sesión</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(formik) => (
          <Form className="form_container" noValidate autoComplete="off">
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
            <Button variant="contained" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
