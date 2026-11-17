
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const USERS_KEY = "eduverse-users";
const USER_KEY = "eduverse-user";

function getSavedUsers() {
  try {
    const data = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(USER_KEY)) || null;
    } catch {
      return null;
    }
  });

  const signup = (name, email, password) => {
    try {
      const cleanName = name.trim();
      const cleanEmail = email.trim().toLowerCase();

      if (!cleanName || !cleanEmail || !password) {
        return {
          success: false,
          message: "Please fill in all fields.",
        };
      }

      const users = getSavedUsers();

      const existingUser = users.find(
        (item) => item.email?.toLowerCase() === cleanEmail
      );

      if (existingUser) {
        return {
          success: false,
          message: "An account with this email already exists.",
        };
      }

      const newUser = {
        name: cleanName,
        email: cleanEmail,
        password,
      };

      const loggedUser = {
        name: cleanName,
        email: cleanEmail,
      };

      localStorage.setItem(
        USERS_KEY,
        JSON.stringify([...users, newUser])
      );

      localStorage.setItem(USER_KEY, JSON.stringify(loggedUser));
      setUser(loggedUser);

      return { success: true };
    } catch {
      return {
        success: false,
        message: "Unable to create account. Please try again.",
      };
    }
  };

  const login = (email, password) => {
    try {
      const cleanEmail = email.trim().toLowerCase();
      const users = getSavedUsers();

      const foundUser = users.find(
        (item) =>
          item.email?.toLowerCase() === cleanEmail &&
          item.password === password
      );

      if (!foundUser) {
        return {
          success: false,
          message: "Invalid email or password.",
        };
      }

      const loggedUser = {
        name: foundUser.name,
        email: foundUser.email,
      };

      localStorage.setItem(USER_KEY, JSON.stringify(loggedUser));
      setUser(loggedUser);

      return { success: true };
    } catch {
      return {
        success: false,
        message: "Unable to login. Please try again.",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem(USER_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
