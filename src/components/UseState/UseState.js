import React from "react";
import useForm from "../UseState/UseForm";

const Form = () => {
  const [value1, handleChange1] = useForm({ email: "", password: "" });
  const [value2, handleChange2] = useForm({ firstName: "", lastName: "" });
  return (
    <>
      <div>
        <input
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
    </>
  );
};
export default Form;
