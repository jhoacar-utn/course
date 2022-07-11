import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

type AuthContextType = [string | null, Dispatch<SetStateAction<string | null>>];

const AuthContext = createContext<AuthContextType>([null, () => {}]);

export default AuthContext;
