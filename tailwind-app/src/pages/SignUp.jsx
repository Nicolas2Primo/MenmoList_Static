import UserSignUp from "../components/UserSignUp";
import EmailSignUp from "../components/EmailSignUp";
import PasswordSignUp from "../components/PasswordSignUp";
import SignUpContext from "../context/SignUpContext";
import { useState, useContext } from "react";

const SignUp = () => {
  const {
    formData,
    page,
    setPage,
    handleSignUp,
    handleEmailNext,
    emailRegex,
    setEmailError,
    emailError,
  } = useContext(SignUpContext);

  const formTitle = [
    "Enter your username",
    "Enter your email",
    "Enter your password",
  ];

  const displayComponentForm = () => {
    if (page == 0) {
      return <UserSignUp />;
    } else if (page == 1) {
      return <EmailSignUp />;
    } else if (page == 2) {
      return <PasswordSignUp />;
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-white text-2xl font-bold">{formTitle[page]}</h1>
      {displayComponentForm()}
      <div className="flex gap-8">
        {
          //LÓGICA PARA APARECER BOTÃO PREV
          //VERIFICA SE A CONSTANTE PAGE É IGUAL A 0
          page == 0 ? null : (
            <button
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className="bg-white rounded-lg text-black px-4 py-1 font-bold"
            >
              Prev
            </button>
          )
        }
        {
          //LÓGICA PARA APARECER BOTÃO NEXT OU BOTÃO SIGNUP
          //VERIFICA SE A CONSTANTE PAGE É IGUAL AO TAMANHO DA LISTA FORMTITLE
          page == formTitle.length - 1 ? (
            <button
              onClick={handleSignUp}
              className="bg-white rounded-lg text-black px-4 py-1 font-bold"
            >
              SignUp
            </button>
          ) : (
            <button
              onClick={() => {
                if (page == 0 && formData.username != "") {
                  setPage((currPage) => currPage + 1);
                } else {
                }
                if (page == 1 && emailRegex.test(formData.email)) {
                  setEmailError(false);
                  setPage((currPage) => currPage + 1);
                  console.log(emailError);
                } else if (page == 1) {
                  setEmailError(true);
                  console.log(emailError);
                }
              }}
              className={`bg-white rounded-lg text-black px-4 py-1 font-bold `}
            >
              Next
            </button>
          )
        }
      </div>
    </div>
  );
};

export default SignUp;
