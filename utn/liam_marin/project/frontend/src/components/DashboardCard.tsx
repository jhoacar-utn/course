import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import PokeSprite from "./PokeSprite";

interface State {
  name: string;
  email: string;
  avatarId: number;
  avatarName: string;
}

async function getProfile(token: string): Promise<State | null> {
  const profile = await fetch(
    new URL("user/profile", process.env.REACT_APP_API_ENDPOINT),
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        Authorization: token,
      },
    }
  );

  const { body } = await profile.json();

  if (!profile.ok) {
    return null;
  }

  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${body.avatar}`
  ).then((res) => res.json());

  return {
    name: body.name,
    email: body.email,
    avatarId: body.avatar,
    avatarName: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
  };
}

function DashboardCard() {
  const [token, setToken] = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [state, setState] = useState<State>({
    name: "",
    email: "",
    avatarId: 0,
    avatarName: "",
  });

  useEffect(() => {
    getProfile(token!).then((profile) => {
      if (!profile) {
        setError(true);
      } else {
        setState(profile);
      }
    });
  }, []);

  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <p className="mb-1">
            <b>Name:</b> {state.name}
          </p>
          <p className="mb-1">
            <b>E-mail:</b> {state.email}
          </p>
          <p className="mb-1">
            <b>Avatar:</b> {state.avatarName}
          </p>
        </div>
        <div className="w-1/3">
          <PokeSprite
            className="block ml-auto"
            spriteId={state.avatarId}
            alt="Your avatar."
          />
        </div>
      </div>
      {error && (
        <p className="mt-6 p-4 border rounded border-rose-700 bg-rose-50 text-rose-700">
          There was an error retrieving your profile.
        </p>
      )}
    </>
  );
}

export default DashboardCard;
