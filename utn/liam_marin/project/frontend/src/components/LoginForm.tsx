import validator from "validator";
import { FormEvent, useContext, useReducer, useState } from "react";

import formReducer from "../reducers/formReducer";
import AuthContext from "../context/AuthContext";

interface LoginBody {
  email: string;
  password: string;
}

interface LoginResponse {
  errors: string[];
  token?: string;
}

const validators: Record<string, (value: string) => boolean> = {
  email: (value: string) => validator.isEmail(value),
  password: (value: string) => !validator.isEmpty(value),
};

async function postLogin(body: LoginBody): Promise<LoginResponse> {
  const res = await fetch(
    new URL("auth/login", process.env.REACT_APP_API_ENDPOINT),
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
      return { errors: content.errors.map(({ msg }: any) => msg) };
    } else {
      return { errors: [content.detail] };
    }
  }

  return { errors: [], token: content.body.token };
}

function LoginForm() {
  const [state, dispatch] = useReducer(formReducer(validators), {
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
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [token, setToken] = useContext(AuthContext);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (Object.values(state).some((value) => value.error || !value.touched)) {
      return;
    }

    postLogin({ email: state.email.value, password: state.password.value })
      .then((res) => {
        if (res.errors.length > 0 || !res.token) {
          setErrors(res.errors);
        } else {
          setToken(res.token);
        }
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
        <label className="inline-block mb-1" htmlFor="name">
          E-mail
        </label>
        <input
          className={`block border rounded py-1 px-3 mb-4 hover:shadow-sm${
            state.email.error ? " border-rose-500 bg-rose-50" : ""
          }`}
          type="text"
          id="name"
          placeholder="john.doe@example.com"
          value={state.email.value}
          onChange={(e) => dispatch({ field: "email", value: e.target.value })}
        />
        <label className="inline-block mb-1" htmlFor="password">
          Password
        </label>
        <input
          className={`block border rounded py-1 px-3 mb-4 hover:shadow-sm${
            state.password.error ? " border-rose-500 bg-rose-50" : ""
          }`}
          type="password"
          id="password"
          placeholder="******"
          value={state.password.value}
          onChange={(e) =>
            dispatch({ field: "password", value: e.target.value })
          }
        />
        <button
          disabled={Object.values(state).some(
            (value) => value.error || !value.touched
          )}
          className="border rounded py-1 px-3 hover:shadow-sm hover:bg-gray-50 active:bg-gray-100 disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-500"
          type="submit"
        >
          Log In
        </button>
      </form>
      {errors.length > 0 && (
        <ul className="flex flex-col gap-2 mt-6 p-4 border rounded border-rose-700 bg-rose-50 text-rose-700">
          {errors.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default LoginForm;
