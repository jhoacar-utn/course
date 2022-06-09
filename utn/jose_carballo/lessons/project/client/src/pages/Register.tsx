import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import dataRegister from "../data/dataRegister.json";
import { createAvatar } from "../services";
import {
  initialValues,
  validationSchema,
} from "../validations/validationSchemaRegister";
import { CustomInputText } from "../components/CustomInputText";
import "./styles.scss";
import { MySelect } from "../components/MySelect";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Register = () => {
  const { pokemons } = useContext(AuthContext);

  return (
    <div className="container_register">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          createAvatar(values);
        }}
      >
        {({ values }) => (
          <Form className="form_container" noValidate autoComplete="off">
            <h1 className="title_login">Registro de usuario</h1>
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
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Seleccione un avatar</option>
                    {pokemons?.map((pokemon: any, index: any) => {
                      console.log(values.avatar);
                      return (
                        <option
                          key={index}
                        >
                          {pokemon.data.name}
                        </option>
                      );
                    })}
                  </MySelect>
                );
              }
              throw new Error(`El type: ${type}, no es soportado`);
            })}
            <Button variant="contained" type="submit">
              Registrar
            </Button>
          </Form>
        )}
      </Formik>
      <div>
        <h1>datos del pokemon</h1>
      </div>
    </div>
  );
};
