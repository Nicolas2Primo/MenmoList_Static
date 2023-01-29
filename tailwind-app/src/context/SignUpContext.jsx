import { createContext, useState } from "react";
import React from "react";

const SignUpContext = createContext();

export function SignUpProvider({ children }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[A-Za-z\d!@#\$%\^&\*]{8,}$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSignUp = () => {
    if (
      formData.password == formData.confirmPassword &&
      passwordRegex.test(formData.password) &&
      formData.password != ""
    ) {
      setPasswordError(false);
      console.log("Não existe erro" + passwordError);
    } else {
      setPasswordError(true);
      console.log("existe erro" + passwordError);
    }
  };

  const handleEmailNext = () => {
    if (emailRegex.test(formData.email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const [page, setPage] = useState(0);
  return (
    <SignUpContext.Provider
      value={{
        formData,
        setFormData,
        page,
        setPage,
        passwordRegex,
        handleEmailNext,
        handleSignUp,
        passwordError,
        setPasswordError,
        emailRegex,
        setEmailError,
        emailError,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
}

export default SignUpContext;
