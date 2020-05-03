import React, { useRef } from "react";
import useForm from "../UseState/UseForm";
import Hi from "./Hi";

const UseRef = () => {
  const [value1, handleChange1] = useForm({ email: "", password: "" });
  const [value2, handleChange2] = useForm({ firstName: "", lastName: "" });
  const inputRef = useRef();

  return (
    <>
      <Hi />

      <div>
        <input
          ref={inputRef}
          type="email"
          name="email"
          value={value1.email}
          onChange={handleChange1}
        ></input>
        <input
          type="password"
          name="password"
          value={value1.password}
          onChange={handleChange1}
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="firstName"
          value={value2.firstName}
          onChange={handleChange2}
        ></input>
        <input
          type="text"
          name="lastName"
          value={value2.lastName}
          onChange={handleChange2}
        ></input>
      </div>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus
      </button>
    </>
  );
};
export default UseRef;
