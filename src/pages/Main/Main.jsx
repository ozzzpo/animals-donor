import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/userSlice";

function Main() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPw, setRegisterPw] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPw, setLoginPw] = useState("");

  const dispatch = useDispatch();
  return (
    <div>
      <p>Login</p>
      <input
        type='text'
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <p>Login password</p>
      <input
        type='text'
        value={loginPw}
        onChange={(e) => setLoginPw(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(loginUser({ login: loginEmail, password: loginPw }))
        }
      >
        Login
      </button>
      <p>Reigister</p>
      <input
        type='text'
        value={registerEmail}
        onChange={(e) => setRegisterEmail(e.target.value)}
      />
      <p>Register password</p>
      <input
        type='text'
        value={registerPw}
        onChange={(e) => setRegisterPw(e.target.value)}
      />
    </div>
  );
}

export default Main;
