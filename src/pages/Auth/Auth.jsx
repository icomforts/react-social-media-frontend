import React from "react";
import "./Auth.scss";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth__infoSide">
        <img className="auth__infoSide__logo" src={Logo} alt="" />
        <div className="auth__infoSide__webName">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <LogIn />
    </div>
  );
};
function LogIn() {
  return (
    <div className="auth__formSide">
      <form className="auth__formSide__from auth__formSide__from--info auth__formSide__from--auth">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="auth__formSide__from__input"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="auth__formSide__from__input"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up
          </span>
          <button className="iButton auth__formSide__from__button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
function SignUp() {
  return (
    <div className="auth__formSide">
      <form className="auth__formSide__from auth__formSide__from--info auth__formSide__from--auth">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="auth__formSide__from__input"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="auth__formSide__from__input"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="auth__formSide__from__input"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="auth__formSide__from__input"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="auth__formSide__from__input"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>
        <button className="iButton auth__formSide__from__button" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
export default Auth;
