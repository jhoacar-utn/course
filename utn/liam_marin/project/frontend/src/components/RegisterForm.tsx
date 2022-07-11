import validator from "validator";
import { FormEvent, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

import formReducer from "../reducers/formReducer";
import PokeSprite from "./PokeSprite";

interface PokemonOption {
  name: string;
  value: number;
}

interface RegisterBody {
  name: string;
  email: string;
  password: string;
  avatar: number;
}

const validators: Record<string, (value: string) => boolean> = {
  name: (value: string) => validator.isLength(value, { min: 2, max: 32 }),
  email: (value: string) => validator.isEmail(value),
  password: (value: string) => validator.isLength(value, { min: 8, max: 255 }),
  avatar: (value: string) => validator.isInt(value, { min: 1, max: 151 }),
};

async function getPokemon(): Promise<PokemonOption[]> {
  const pokemon: any[] = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=151"
  )
    .then((res) => res.json())
    .then((res) => res.results);

  const unavailable: any[] = await fetch(
    new URL("user/avatar", process.env["REACT_APP_API_ENDPOINT"])
  )
    .then((res) => res.json())
    .then((res) => res.body);

  return pokemon
    .map((value, index) => {
      return {
        name: value.name,
        value: index + 1,
      };
    })
    .filter((_, index) => {
      return !unavailable.includes(index + 1);
    });
}

async function postRegister(body: RegisterBody): Promise<string[]> {
  const res = await fetch(
    new URL("auth/register", process.env.REACT_APP_API_ENDPOINT),
    {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const content = await res.json();

  if (!res.ok) {
    if (content.error === "VALIDATION_ERROR") {
      return content.errors.map(({ msg }: any) => msg);
    } else {
      return [content.detail];
    }
  }

  return [];
}

function RegisterForm() {
  const [pokemonList, setPokemonList] = useState<PokemonOption[]>([]);
  useEffect(() => {
    getPokemon().then((list) => setPokemonList(list));
  }, []);

  const [state, dispatch] = useReducer(formReducer(validators), {
    name: {
      value: "",
      error: false,
      touched: false,
    },
    email: {
      value: "",
      error: false,
      touched: false,
    },
    password: {
      value: "",
      error: false,
      touched: false,
    },
    avatar: {
      value: "1",
      error: false,
      touched: true,
    },
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [successful, setSuccessful] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (Object.values(state).some((value) => value.error || !value.touched)) {
      return;
    }

    postRegister({
      name: state.name.value,
      email: state.email.value,
      password: state.password.value,
      avatar: parseInt(state.avatar.value),
    })
      .then((errors) => {
        setErrors(errors);
        setSuccessful(errors.length === 0);
      })
      .catch(() => {
        setErrors([
          "There was an error processing your request. Please try again.",
        ]);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="flex-1">
            <div className="mb-4">
              <label className="inline-block mb-1" htmlFor="name">
                Name
              </label>
              <input
                className={`block w-full border${
                  state.name.error ? " border-rose-500 bg-rose-50" : ""
                } rounded hover:shadow-sm py-1 px-3`}
                type="text"
                id="name"
                placeholder="Jane Doe"
                value={state.name.value}
                onChange={(e) =>
                  dispatch({ field: "name", value: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="inline-block mb-1" htmlFor="email">
                E-mail
              </label>
              <input
                className={`block w-full border${
                  state.email.error ? " border-rose-500 bg-rose-50" : ""
                } rounded hover:shadow-sm py-1 px-3`}
                type="email"
                id="email"
                placeholder="jane.doe@example.com"
                value={state.email.value}
                onChange={(e) =>
                  dispatch({ field: "email", value: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-1/3">
            <PokeSprite
              spriteId={parseInt(state.avatar.value)}
              alt="Your avatar."
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="inline-block mb-1" htmlFor="password">
            Password
          </label>
          <input
            className={`block w-full border${
              state.password.error ? " border-rose-500 bg-rose-50" : ""
            } rounded hover:shadow-sm py-1 px-3`}
            type="password"
            id="password"
            placeholder="******"
            value={state.password.value}
            onChange={(e) =>
              dispatch({ field: "password", value: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="inline-block mb-1" htmlFor="avatar">
            Avatar
          </label>
          <select
            className={`block w-full border${
              state.avatar.error ? " border-rose-500 bg-rose-50" : ""
            } rounded hover:shadow-sm py-2 px-3 bg-inherit`}
            id="avatar"
            value={state.avatar.value}
            onChange={(e) =>
              dispatch({ field: "avatar", value: e.target.value })
            }
          >
            {pokemonList.map(({ value, name }) => (
              <option value={value} key={value}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <button
          disabled={Object.values(state).some(
            (value) => value.error || !value.touched
          )}
          className="block w-fit ml-auto border py-1 px-3 rounded hover:shadow-sm active:bg-gray-100 disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-500"
          type="submit"
        >
          Submit
        </button>
      </form>
      {errors.length > 0 && (
        <ul className="flex flex-col gap-2 mt-6 p-4 border rounded border-rose-700 bg-rose-50 text-rose-700">
          {errors.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
      {successful && (
        <p className="mt-6 p-4 border rounded border-sky-700 bg-sky-50 text-sky-700">
          Your account was created. Please <Link to="/login">log in</Link>.
        </p>
      )}
    </>
  );
}

export default RegisterForm;
