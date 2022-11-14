import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./signUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const register = () => {
    axios
      .post("/Register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((result) => {
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register">
      <h1 style={{ color: "#a24e12" }}>Register Page</h1>
      <table className="table">
        <tbody>
          <tr>
            <th>First name</th>
            <th>
              <input
                type="text"
                placeholder="First name here"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </th>
          </tr>
          <tr>
            <th>Last name</th>
            <th>
              {" "}
              <input
                type="text"
                placeholder="Last name here"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </th>
          </tr>
          <tr>
            <th>Email</th>
            <th>
              <input
                type="email"
                placeholder="Email here"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </th>
          </tr>
          <tr>
            <th>Password</th>
            <th>
              <input
                type="password"
                placeholder="Password here"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </th>
          </tr>
          <tr>
            <th></th>
            <th>
              <button className="register-button" onClick={register}>
                Sign Up
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SignUp;
