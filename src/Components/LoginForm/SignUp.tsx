import { useForm, SubmitHandler } from "react-hook-form";
import "./SignUp.css";
import { NavLink } from "react-router-dom";

type Inputs = {
  fullName: string;
  password: string;
  email: string;
  confirmPassword: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    alert(`Welcome ${data.fullName}! Your account has been created.`);

  return (
    <>
    <div className="body">
      <div className="signup-container">
        <h2 className="form-title">Sign Up With</h2>
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
        <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label className="input-label">Full Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter your full name"
              {...register("fullName", { required: true })}
            />
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
          </div>
          <div className="input-wrapper">
            <label className="input-label">Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="Enter your email"
              {...register("email", { required: true })}
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
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            <span>
              <i className="fa-solid fa-lock"></i>
            </span>
          </div>
          <div className="input-wrapper">
            <label className="input-label">Confirm Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Confirm your password"
              {...register("confirmPassword", { required: true })}
            />
            <span>
              <i className="fa-solid fa-lock"></i>
            </span>
          </div>
          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account? <NavLink to="/SignIn">Log In</NavLink>
        </p>
      </div>
      </div>
    </>
  );
};

export default SignUp;
