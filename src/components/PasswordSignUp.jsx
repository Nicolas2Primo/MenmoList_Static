import React from "react";
import SignUpContext from "../context/SignUpContext";
import { useState, useContext } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

const UserSignUp = () => {
  const { formData, page, passwordRegex, passwordError, setPasswordError } =
    useContext(SignUpContext);
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
          type="password"
          name="password"
          placeholder="Password"
          className={`peer py-1 rounded-lg px-1 outline-none bg-black  border-[1.6px]  placeholder-white text-white valid:border-green-700 focus:invalid:border-red-700  `}
          value={formData.password}
          onChange={handleInputChange}
          pattern="(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[A-Za-z\d!@#\$%\^&\*]{8,}"
        />
        <input
          required
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          className={`py-1 rounded-lg px-1 outline-none bg-black border-[1.6px]  placeholder-white text-white focus:invalid:border-red-700 ${
            formData.password == formData.confirmPassword &&
            formData.password != ""
              ? "valid:border-green-700"
              : ""
          } `}
          value={formData.confirmPassword}
          onChange={handleInputChange}
          pattern="(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[A-Za-z\d!@#\$%\^&\*]{8,}"
        />
        <span
          className={`text-red-700 text-sm w-[270px] md:w-[300px] text-center hidden peer-placeholder-shown:!invisible peer-invalid:flex absolute bottom-[17%]`}
        >
          Password must be at least 8 characters in total, 1 uppercase letter, 1
          special character and 1 number.
        </span>
      </form>
    </>
  );
};

export default UserSignUp;
