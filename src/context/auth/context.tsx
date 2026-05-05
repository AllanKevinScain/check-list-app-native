import type { User } from "@react-native-google-signin/google-signin";
import { createContext } from "react";

export interface AuthContextType {
  auth: User | null;
  authenticated: boolean;
  submiting: boolean;
  message: string | null;
  signInGoogle: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  auth: null,
  authenticated: false,
  submiting: false,
  message: null,
  signInGoogle: async () => {},
});
