import React from "react";
import SignUpContext from "../context/SignUpContext";
import { useState, useContext } from "react";

const UserSignUp = () => {
  const { formData, page, emailError, emailRegex } = useContext(SignUpContext);
  const { setFormData } = useContext(SignUpContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form
        action=""
        className="flex flex-col items-center justify-center gap-6"
      >
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className={`py-1 rounded-lg px-1 outline-none bg-black  border-[1.6px]  placeholder-white text-white focus:invalid:border-red-700 ${
            page == 1 && formData.email == "" ? " " : " valid:border-green-700"
          }`}
          value={formData.email}
          onChange={handleInputChange}
          pattern="((([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))"
        />
        {emailError ? (
          <span className="text-red-700 text-sm">Invalid email.</span>
        ) : null}
      </form>
    </>
  );
};

export default UserSignUp;
