import React from "react";
import SignUpContext from "../context/SignUpContext";
import { useState, useContext } from "react";

const UserSignUp = () => {
  const { formData, page } = useContext(SignUpContext);
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
      <form action="" className="flex flex-col items-center gap-6">
        <input
          required
          name="username"
          type="text"
          placeholder="Username"
          className={`py-1 rounded-lg px-1 outline-none bg-black  border-[1.6px]  placeholder-white text-white ${
            page == 0 && formData.username == ""
              ? " focus:invalid:border-red-700"
              : " border-green-700"
          }`}
          value={formData.username}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

export default UserSignUp;
