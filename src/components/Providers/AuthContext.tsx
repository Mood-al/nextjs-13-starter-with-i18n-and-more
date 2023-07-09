import { createContext, useEffect, useState, useContext } from "react";

import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { NEXT_URL } from "@/config";
import { getData, postData } from "@/utils/HTTPService";
import { useRouter } from "next-intl/client";

const AuthContext = createContext<any>(null);

// eslint-disable-next-line react/display-name
const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState<object | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const t = useTranslations();
  const router = useRouter();

  /* This code is checking if the user is logged in. If they are, it will redirect them to the user
  dashboard. */
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      checkuserLoggedIn();
    }

    return () => {
      mounted = false;
    }; // cleanup function
  }, []);

  // check if there was a user or not

  /**
   * It checks if the user is logged in.
   */
  const checkuserLoggedIn = async () => {
    // return;

    try {
      /* Making a request to the server to get the user's information. */

      // const res = await axios.post(`${NEXT_URL}/api/login`, {
      //   email: "eve.holt@reqres.in",
      //   password: "cityslicka",
      // });
      // const res = await getData(`${NEXT_URL}/auth/user`);
      // const data = await res.json();
      // if (res.status !== 200) {
      //   toast.error(data.message);
      // } else {
      //   toast.success(`Welcome ${data.data.name}`);
      // }
      setIsUserLoggedIn(false);

      // setUser(data.data);
      // setUser({ ...res.data });
    } catch (error) {
      if (error instanceof Error) {
        const errors = error.message !== "" ? JSON.parse(error.message) : "";

        for (const property in errors.errors) {
          toast.error(`${property}: ${errors.errors[property]}`);
        }

        setError({
          error: errors,
        });
        setIsUserLoggedIn(false);

        setIsLoading(false);
      }
    }
  };

  // signup user
  /**
   * It signs up a user.
   * @param email - The email of the user.
   * @param password - The password of the user.
   * @param name - The name of the user.
   */
  const signup = async (data: object) => {
    setIsLoading(true);
    try {
      const res = await postData(`${NEXT_URL}/auth/signup`, data);
      const resData = await res.json();
      setUser(resData.data);

      setError(null);
      toast.success(`You are in , Welcome back ${resData.data.name}`);

      router.push("/");

      if (resData.status !== 200) {
        throw new Error(JSON.stringify(resData));
      }

      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        const errors = error.message !== "" ? JSON.parse(error.message) : "";

        for (const property in errors.errors) {
          toast.error(`${property}: ${errors.errors[property]}`);
        }

        setError({
          error: errors,
        });

        setIsLoading(false);
      }
    }
  };

  // Login user
  /**
   * It makes a post request to the server to login a user.
   * @param email - The email of the user.
   * @param password - The password of the user.
   * @param remember_me - Boolean, if the user wants to stay logged in.
   */

  const login = async (data: any) => {
    setIsLoading(true);

    try {
      const res = await postData(`${NEXT_URL}/auth/login`, data);
      const resData = await res.json();

      if (res.status !== 200) {
        throw new Error(JSON.stringify(resData));
      }
      // const res = await axios.post(`${API_UR}/auth/login`, data);
      // console.log(res);
      //   localStorage.setItem("user", JSON.stringify(res.data));

      //   // router.replace(router.asPath);

      //   // const userRes = await axios.get(`${NEXT_URL}/auth/user`);
      //   // setUser({ ...JSON.parse(userRes.data.user) });
      setUser(resData.data);
      console.log(resData.data);
      setError(null);
      toast.success(`You are in , Welcome back ${resData.data.name}`);

      // if (router.query.return_url) {
      //   router.push(`${router.query.return_url}`);
      // } else {
      router.push(`/`);
      // }

      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        const errors = error.message !== "" ? JSON.parse(error.message) : "";
        // toast.error(error.response?.data?.error);

        toast.error(errors?.status);
        // toast.error(errors?.message);
        for (const property in errors.errors) {
          toast.error(`${property}: ${errors.errors[property]}`);
        }

        setError({
          error: errors,
        });
      }
    }
  };

  // signOut user
  /**
   * It signs out the user.
   */

  const signOut = async () => {
    try {
      const res = await toast.promise(postData(`${NEXT_URL}/auth/signout`), {
        pending: t(`loading`),
        success: {
          render({ data }) {
            return `${JSON.stringify(data, null, 2)}`;
          },
        },
        error: "Error when fetching",
      });
      setUser(null);
      localStorage.removeItem("user");

      // toast.success(`You are out`);
      //   if (redirect || router.pathname.includes("/profile")) {
      //     router.push(`/`);
      //   }
    } catch (error) {
      console.log(error, "fff");
    }
    // try {
    //   // router.replace(router.asPath);

    //   setUser(null);
    //   // toast.success(`You are out`);
    //   if (redirect || router.pathname.includes("/profile")) {
    //     router.push(`/`);
    //   }

    //   setIsLoading(false);
    // } catch (err) {
    //   console.log(err.response);
    //   console.log(err.message);
    //   setIsLoading(false);
    // }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        signup,
        login,
        signOut,
        isLoading,
        isUserLoggedIn,
        setRedirect,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const all = useContext(AuthContext);

  return { ...all };
};
export { AuthContext, AuthProvider };
