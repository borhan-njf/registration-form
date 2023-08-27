import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
import { validate } from "./validate";
import styles from "./SignUp.module.css";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const [errors, setError] = useState({});

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success", "you loged in successfully");
    } else {
      setTouched({
        email: true,
        password: true,
      });
      notify("error", "invalid data");
    }
  };

  useEffect(() => {
    setError(validate(data, "login"));
  }, [data]);

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h1 className={styles.header}>Login</h1>

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

        <div className={styles.formButtons}>
          <Link to="/signup">Sign Up</Link>
          <button type="submit">Login</button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}
