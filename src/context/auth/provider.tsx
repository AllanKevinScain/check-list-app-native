import { useEffect, useState } from "react";
import { AuthContext } from "./context";
import type { User } from "@react-native-google-signin/google-signin";
import {
  GoogleSignin,
  isSuccessResponse,
  isErrorWithCode,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useRouter } from "@/hooks";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [auth, setAuth] = useState<User | null>(null);
  const [submiting, setSubmiting] = useState(false);
  const [message, setMessage] = useState<null | string>(null);

  async function signInGoogle() {
    setSubmiting(true);
    try {
      await GoogleSignin.hasPlayServices();
      const res = await GoogleSignin.signIn();
      if (isSuccessResponse(res)) {
        setAuth(res.data);
        router.reset({ routes: [{ name: "bottomRoutes" }] });
      } else {
        setMessage("Google signin was cancelled.");
      }
    } catch (error) {
      console.log("allan", error);

      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            setMessage("Google signin was cancelled.");
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            setMessage("Play service was not availeble.");
            break;
          case statusCodes.NULL_PRESENTER:
            setMessage("Null parser.");
          case statusCodes.SIGN_IN_CANCELLED:
            setMessage("Google signin was cancelled.");
          case statusCodes.SIGN_IN_REQUIRED:
            setMessage("Google signin was required.");
            break;
          default:
            setMessage(error.code);
        }
      } else {
        setMessage("An error occurred.");
      }
    } finally {
      setSubmiting(false);
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: true,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ signInGoogle, auth, authenticated: !!auth, submiting, message }}>
      {children}
    </AuthContext.Provider>
  );
}
