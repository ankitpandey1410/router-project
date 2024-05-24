import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signup.png";

const SignUp  = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your carrier."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default SignUp;