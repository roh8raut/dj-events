import { NEXT_URL } from "config";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  // Login
  const login = async (user) => {
    console.log('login>>>')
    const res = await fetch(`${NEXT_URL}/api/account/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier: user.email,
        password: user.password
      }) 
    });

    if (res.ok) {
      const data = await res.json();
      setUser(data.user)
    } else {
      setError('Something went wrong :(')
    }
  };

  // Logout
  const logout = (user) => {
    console.log("log out");
  };

  // Register
  const register = async (user) => {
    console.log("userasdasd", user);
  };

  const isUerLoggedIn = (user) => {
    console.log("isUserlogggedin method");
  };

  return (
    <AuthContext.Provider
      value={{ login, register, user, error, logout, isUerLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
