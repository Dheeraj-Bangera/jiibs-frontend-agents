import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ValidInput from "../../components/ValidInput/ValidInput";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = () => {
    //TODO: complete submit handler with actual login
    if (emailError || passwordError) return;
    login({ name: "Rohan Kumar" });
    navigate("/");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email) || email.length == 0) {
      setEmailError(null);
    } else {
      setEmailError("Please enter a valid email");
    }
  };

  const validatePassword = (pass) => {
    if (pass.length > 3 || pass.length == 0) {
      setPasswordError(null);
    } else {
      setPasswordError("Password should be more than 3 digits");
    }
  };
  return (
    <main className="w-full h-[100vh] flex items-center justify-center">
      <div className="sm:w-[500px] w-full sm:h-[590px] h-full sm:py-[48px] sm:px-[40px] py-[40px] px-[30px] flex flex-col items-start gap-[36px] bg-white border-[1px] sm:border-solid sm:border-black sm:rounded-[16px] sm:shadow-[20px_28px_210px_rgba(218,218,218,0.94)]">
        <div className="flex flex-col gap-[30px] w-full justify-start">
          <h1 className="text-[32px] leading-[40px] font-bold text-blue">
            JIIBS.
          </h1>
          <div className="flex flex-col gap-[30px] justify-start">
            <div className="flex flex-col gap-[6px] items-start  justify-start">
              <h2 className="text-[24px] leading-[30px] font-bold text-black">
                Log in
              </h2>
              <h3 className="text-[14px] leading-[22px] text-[#626262]">
                Building Solutions Portal.
              </h3>
            </div>
            <div className="flex flex-col gap-[20px] justify-start">
              <ValidInput
                type="email"
                inputName="Email"
                placeholder=""
                value={email}
                setValue={setEmail}
                error={emailError}
                onBlurHandler={validateEmail}
              />
              <ValidInput
                type="password"
                inputName="Password"
                placeholder=""
                value={password}
                setValue={setPassword}
                error={passwordError}
                onBlurHandler={validatePassword}
              />
              <button
                className="bg-primary text-white text-[16px] font-semibold w-full h-[46px] sm:h-[44px] rounded-[10px] hover:bg-[#1a96b7]"
                onClick={submitHandler}
              >
                {/* TODO: implement loading state */}
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-[12px] sm:mt-0 mt-auto">
          <p className="mb-[12px]">
            By proceeding, you agree to the{" "}
            <Link to="#" className="text-blue">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-blue">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex justify-start gap-[12px]">
            <Link to="#">Help</Link>
            <Link to="#">Privacy</Link>
            <Link to="#">Terms</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
