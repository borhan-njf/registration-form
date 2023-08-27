import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
import { validate } from "./validate";
import styles from "./SignUp.module.css";

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
      notify("success", "you signed up successfully");
      console.log("ok");
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      notify("error", "invalid data");
    }
  };

  useEffect(() => {
    setError(validate(data, "signup"));
  }, [data]);

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h1 className={styles.header}>Sign Up</h1>
        <div className={styles.formField}>
          <label for="name" className={styles.label}>
            name
          </label>
          <input
            className={
              errors.name && touched.name
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>

        <div className={styles.formField}>
          <label for="email" className={styles.label}>
            email
          </label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>

        <div className={styles.formField}>
          <label for="password" className={styles.label}>
            password
          </label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
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

        <div className={styles.formField}>
          <label for="confirmPassword" className={styles.label}>
            confirm password
          </label>
          <input
            className={
              errors.confirmPassword && touched.confirmPassword
                ? styles.uncompleted
                : styles.formInput
            }
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

        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <label for="checkbox" className={styles.label}>
              I accept terms of privacy policy
            </label>
            <input
              className={styles.formInput}
              type="checkbox"
              name="isAccepted"
              id="checkbox"
              onChange={changeHandler}
              onFocus={focusHandler}
            ></input>
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/login">Login</Link>
          <button type="submit">Sign Up</button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}
