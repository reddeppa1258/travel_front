import { createContext, useEffect, useReducer } from "react";

const initialstate = {
  user: localStorage.getItem("user") || null,
  loading: false,
  error: null,
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,
};

export const AuthContext = createContext(initialstate);
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        token: null,
        role: null,
        loading: false,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        token: action.token,
        role: action.role,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        token: null,
        role: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        token: null,
        role: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextprovider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialstate);

  useEffect(() => {
    console.log("state Authcontext token",state?.token)
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", JSON.stringify(state.token));
    localStorage.setItem("role", JSON.stringify(state.role));
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
