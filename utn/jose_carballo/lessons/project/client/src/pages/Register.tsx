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
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { CardPokemon } from "../components/CardPokemon";

export const Register = () => {
  const { pokemons } = useContext(AuthContext);
  const [search,setSearch] = useState({} as any);
const [valor, setValor] = useState();
let pokemonSelect = pokemons.filter( (poke:any) => poke.name === valor)
useEffect(() => {
valor && setSearch(pokemonSelect[0])
},[valor, pokemonSelect])
  return (
    <div className="container_register">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          createAvatar(values);
          
        }}
      >
        {({ values, handleChange }) => {
         pokemons && setValor(values.avatar)
          return(
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
                    <MySelect key={name} label={label} name={name} onChange={handleChange}>
                      <option value="">Seleccione un avatar</option>
                      {pokemons?.map((pokemon: any, index: any) => {
                        return (
                          <option
                            key={index}
                          >
                            {pokemon.name}
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
          )
        }}
      </Formik>
        {/* {!valor ?  <CardImage image={images.Pokebola} name="pokemons"/> : <CardPokemon {...search} />} */}
        <CardPokemon {...search} />
    </div>
  );
};
