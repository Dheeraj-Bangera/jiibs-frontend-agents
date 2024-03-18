import React, { useState } from "react";
import { Link } from "react-router-dom";
import ValidInput from "../../components/ValidInput/ValidInput";

const LoginPage = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [oldPassError, setOldPassError] = useState(null);
  const [newPassError, setNewPassError] = useState(null);
  const [confirmPassError, setConfirmPassError] = useState(null);

  const submitHandler = () => {
    //TODO: complete submit handler
  };

  const validateOldPassword = (pass) => {
    if (pass.length > 3 || pass.length == 0) {
      setOldPassError(null);
    } else {
      setOldPassError("Password should be more than 3 digits");
    }
  };
  const validateNewPassword = (pass) => {
    if (pass.length > 3 || pass.length == 0) {
      setNewPassError(null);
    } else {
      setNewPassError("Password should be more than 3 digits");
    }
  };

  const validateConfirmPassword = (pass) => {
    if (pass === newPassword) {
      setConfirmPassError(null);
    } else {
      setConfirmPassError("Passwords do not match");
    }
  };
  return (
    <main className="w-full h-[100vh] flex items-center justify-center">
      <div className="sm:w-[500px] w-full sm:h-[700px] h-full sm:py-[48px] sm:px-[40px] py-[40px] px-[30px] flex flex-col items-start gap-[36px] bg-white border-[1px] sm:border-solid sm:border-black sm:rounded-[16px] sm:shadow-[20px_28px_210px_rgba(218,218,218,0.94)]">
        <div className="flex flex-col gap-[30px] w-full justify-start">
          <h1 className="text-[32px] leading-[40px] font-bold text-blue">
            JIIBS.
          </h1>
          <div className="flex flex-col gap-[30px] justify-start">
            <div className="flex flex-col gap-[6px] items-start  justify-start">
              <h2 className="text-[24px] leading-[30px] font-bold text-black">
                Reset password
              </h2>
              <h3 className="text-[14px] leading-[22px] text-[#626262]">
                Building Solutions Portal.
              </h3>
            </div>
            <div className="flex flex-col gap-[20px] justify-start">
              <ValidInput
                type="password"
                inputName="Password"
                placeholder=""
                value={oldPassword}
                setValue={setOldPassword}
                error={oldPassError}
                onBlurHandler={validateOldPassword}
              />
              <ValidInput
                type="password"
                inputName="New Password"
                placeholder=""
                value={newPassword}
                setValue={setNewPassword}
                error={newPassError}
                onBlurHandler={validateNewPassword}
              />
              <ValidInput
                type="password"
                inputName="Confirm Password"
                placeholder=""
                value={confirmNewPassword}
                setValue={setConfirmNewPassword}
                error={confirmPassError}
                onBlurHandler={validateConfirmPassword}
              />
              <button
                className="bg-primary text-white text-[16px] font-semibold w-full hover:bg-[#1a96b7] h-[46px] sm:h-[44px] rounded-[10px]"
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
