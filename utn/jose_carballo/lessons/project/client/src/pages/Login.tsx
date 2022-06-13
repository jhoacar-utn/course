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
import { CardImage } from "../components/CardImage";
import { logo_pikachu } from "../utils";



export const Login = () => {
  const {loginSubmit,isLogin} = useContext(AuthContext)
  
const handleSubmit = (obj:any) => {
  loginSubmit(obj);
}
  return (
    <div className="container_register">
    {isLogin && <Navigate to="/dashboard" replace={true} />}
     
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(formik) => (
          <Form className="form_container" noValidate autoComplete="off">
             <h1 className="title_login">Inicia Sesión</h1>
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
      <CardImage image={logo_pikachu} name="logo pikachu" />
    </div>
  );
};
