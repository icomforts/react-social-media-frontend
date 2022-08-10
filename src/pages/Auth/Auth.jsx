import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, register, selectAuth } from "../../store/slice/Auth";

import "./Auth.scss";

const Auth = () => {
  const { isLoggedIn, hasError } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [isSignUp, setIsSignUp] = React.useState(false);
  const [data, setData] = useState(initialState);

  const [confirmPassword, setConfirmPassword] = useState(false);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setData(initialState);
    setConfirmPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmPassword(false);

    if (isSignUp) {
      data.password === data.confirmPassword
        ? dispatch(register(data))
        : setConfirmPassword(true);
    } else {
      dispatch(login(data));
    }
  };

  return (
    <div className="auth container">
      {/* infoSide */}
      <div className="auth__infoSide">
        <div className="auth__infoSide__webName">
          <h1>Social Media</h1>
          <h6>React Redux Socket.io Node MongoDB</h6>
        </div>
      </div>
      {/* formSide */}
      <div className="auth__formSide">
        <form
          className="auth__formSide__from auth__formSide__from--info auth__formSide__from--auth"
          onSubmit={handleSubmit}
        >
          <h3>{isSignUp ? "註冊" : "登入"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="名"
                className="auth__formSide__from__input"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="姓"
                className="auth__formSide__from__input"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="auth__formSide__from__input"
              name="username"
              placeholder="使用者名稱"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              className="auth__formSide__from__input"
              name="password"
              placeholder="密碼"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                type="password"
                className="auth__formSide__from__input"
                name="confirmPassword"
                placeholder="確認密碼"
                value={data.confirmPassword}
                onChange={handleChange}
              />
            )}
          </div>
          {hasError && (
            <span className="auth__formSide__from__error">
              請確認資料是否正確
            </span>
          )}

          <div>
            <div
              className="auth__formSide__from__hint"
              style={{ fontSize: "12px" }}
            >
              {isSignUp ? "已有帳號? " : "還沒有帳號?"}
              <span
                onClick={() => {
                  resetForm();
                  setIsSignUp((prev) => !prev);
                }}
              >
                {isSignUp ? "登入" : "註冊"}
              </span>
            </div>
          </div>
          <button
            className="iButton auth__formSide__from__button"
            type="submit"
            // disabled={loading}
          >
            {/* {loading ? "Loading..." : isSignUp ? "註冊" : "登入"} */}
            {isSignUp ? "註冊" : "登入"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
