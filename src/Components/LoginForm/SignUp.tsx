import "./SignIn.css";

import { useForm, SubmitHandler } from "react-hook-form";
import "./SignIn.css";
import { Link } from "react-router-dom";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
const SignUp = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    alert(` fullName : ${data.firstName} \n WelCome to VogueAura`);
  return (
    <>
      <div className="container-fuild">
        <div className="wrapper">
          <h1 className="heading"> WelCome to Vogue Aura</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>SignUp</h1>
            <div className="input-box">
              <label htmlFor="firstName">
                fullName:
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="firstName"
                  {...register("firstName", {
                    required: { value: true, message: "Field is required" },
                    minLength: { value: 3, message: "Min length is 3" },
                    maxLength: { value: 8, message: "Max length is 8" },
                  })}
                  id="firstName"
                ></input>
              </label>
              {errors.firstName && (
                <div style={{ color: "red" }}>{errors.firstName.message}</div>
              )}
              <label htmlFor="lastName">
                lastName:
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="lastName"
                  {...register("lastName", {
                    required: { value: true, message: "Field is required" },
                    minLength: { value: 3, message: "Min length is 3" },
                    maxLength: { value: 8, message: "Max length is 8" },
                  })}
                  id="lastName"
                ></input>
              </label>
              {errors.lastName && (
                <div style={{ color: "red" }}>{errors.lastName.message}</div>
              )}
            </div>
            <div className="input-box">
              <label htmlFor="email">
                Email:
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="email"
                  {...register("email", {
                    required: { value: true, message: "Field is required" },
                  })}
                  id="email"
                ></input>
              </label>
              {errors.email && (
                <div style={{ color: "red" }}>{errors.email.message}</div>
              )}
            </div>
            <div className="input-box">
              <label htmlFor="password">
                Password :
                <input
                  type="password"
                  autoComplete="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: { value: true, message: "Field is required" },
                    minLength: { value: 3, message: "Min length is 3" },
                    maxLength: { value: 8, message: "Max length is 8" },
                  })}
                  id="password"
                ></input>
                {errors.password && (
                  <div style={{ color: "red" }}>{errors.password.message}</div>
                )}
              </label>
            </div>
            <div className="forget">
              <Link to="/">Forget password ?</Link>
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
            <div className="register-link">
              <p>
                Already have an account ? <br />
                <Link to="/SignIn">SignIn</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
