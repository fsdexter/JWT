import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const mauricio = (e) => {
    setUser(e.target.value);
  };
  const fabricio = (e) => {
    setPassword(e.target.value);
  };
  const patricio = () => {
    console.log("hi");
    console.log(user, password);
  };

  return (
    <>
      <h1>Login</h1>
      <input type="text" placeholder="user" onChange={mauricio}></input>
      <input type="text" placeholder="password" onChange={fabricio}></input>
      <button onClick={patricio}>submit</button>
    </>
  );
};
export default Login;
