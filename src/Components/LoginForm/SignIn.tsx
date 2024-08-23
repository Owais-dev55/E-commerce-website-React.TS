import { useForm, SubmitHandler } from "react-hook-form";
import "./SignIn.css";
import { Link } from "react-router-dom";

type Inputs = {
  children: React.ReactNode;

  fullName: string;
  password: string;
};
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    alert(` fullName : ${data.fullName} \n We will reach out you soon`);

  return (
    <>
      <div className="container-fuild">
        <div className="wrapper">
          <h1 className="heading"> WelCome to Vogue Aura</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>login</h1>
            <div className="input-box">
              <label htmlFor="fullName">
                fullName:
                <input
                  required
                  type="text"
                  autoComplete="name"
                  placeholder="fullName"
                  {...register("fullName", {
                    required: { value: true, message: "Field is required" },
                    minLength: { value: 3, message: "Min length is 3" },
                    maxLength: { value: 8, message: "Max length is 8" },
                  })}
                  id="fullName"
                ></input>
              </label>
              {errors.fullName && (
                <div style={{ color: "red" }}>{errors.fullName.message}</div>
              )}
            </div>
            <div className="input-box">
              <label htmlFor="password">
                Password :
                <input
                  required
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
                Dont have an account <br />
                <Link to="/SignUp">Register ?</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
