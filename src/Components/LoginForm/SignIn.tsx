import { useForm, SubmitHandler } from "react-hook-form";
import "./SignIn.css";
import { NavLink } from "react-router-dom";


const SignIn = () => {
  const onSubmit = () => {
    alert(`We will reach out you soon`);

  }

  return (
    <>
    <div className="body">
      <div className="login-container">
        <h2 className="form-title">Login With</h2>
        <div className="social-icons">
          <button className="social-button">
            <i className="fa-brands fa-google">GOOGLE</i>
          </button>
          <button className="social-button">
            <i className="fa-brands fa-apple">APPLE</i>
          </button>
        </div>
        <div className="seprator">
          <span>or</span>
        </div>
        <form onSubmit={onSubmit} className="login-form">
          <div className="input-wrapper">
            <label className="input-label">Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="Enter your Email"
              required
            />
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
          </div>
          <div className="input-wrapper">
            <label className="input-label">Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Enter your Password"
              required
            />
            <span>
              <i className="fa-solid fa-lock"></i>
            </span>
          </div>
          <a href="#" className="forget-password">
            Forgot your password ?
          </a>
          <button>Log In</button>
        </form>

        <p>
          Don't have an account ? <a href="/SignUp">SignUp</a>
        </p>

        </div>
        </div>
    </>
  );
};

export default SignIn;
