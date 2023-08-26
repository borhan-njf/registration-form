import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
import { validate } from "./validate";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    isAccepted: false,
  });

  const [errors, setError] = useState({});

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success", "ok, you will be in");
      console.log("ok");
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      notify("error", "sorry, you will not be in");
    }
  };

  useEffect(() => {
    setError(validate(data));
  }, [data]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <div>
          <label for="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label for="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label for="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>

        <div>
          <label for="confirmPassword">confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>

        <div>
          <label for="checkbox">i accept privacy policy</label>
          <input
            type="checkbox"
            name="isAccepted"
            id="checkbox"
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}
