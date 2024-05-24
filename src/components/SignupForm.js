import React from "react";
import { useState } from "react";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const SignupForm  = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const [formData , setFormData] = useState({firstname:"" , lastname:"" , email:"" , password:"" ,  confirmpassword:""});

  const [showPassword , setShowPassword] = useState(false);
  const [showConfirmPassword , setShowConfirmPassword] = useState(false);

  const [accountType , setAccountType] = useState("student");

  function changeHandler (event) {
    setFormData( (prev) => ({...prev , [event.target.name] : event.target.value}));
  }

  function submitHandler (event) {
    event.preventDefault();
    if(formData.password != formData.confirmpassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");

    const accountData = {...formData};
    const finalData = {...accountData , accountType};

    console.log("printing final account data : ");
    console.log(finalData);
    
    navigate("/dashboard");


  }
  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button 
        className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : 
        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={ () => setAccountType("student")}>Student</button>
        <button 
        className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : 
        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={ () => setAccountType("instructor")}>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>

        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">First Name<sup className="text-pink-200">*</sup></p>
            <input
              required
              type="text"
              name="firstname"
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">Last Name<sup className="text-pink-200">*</sup></p>
            <input
              required
              type="text"
              name="lastname"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>
        
        <div className="mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">Email Address<sup className="text-pink-200">*</sup></p>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter email address"
              onChange={changeHandler}
              value={formData.email}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>
        

        <div className="flex gap-x-4 mt-[20px]">
          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">Create Password<sup className="text-pink-200">*</sup></p>

            <input
              required
              type={showPassword ? ("text") : ("password")}
              name="password"
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />

            <span className="absolute right-3 top-[38px] cursor-pointer"
            onClick={ () => setShowPassword ((prev) => !prev)} >
              {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
            </span>
          </label>

          <label className="relative w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">Confirm Password<sup className="text-pink-200">*</sup></p>

            <input
              required
              type={showConfirmPassword ? ("text") : ("password")}
              name="confirmpassword"
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmpassword}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />

            <span className="absolute right-3 top-[38px] cursor-pointer"
            onClick={ () => setShowConfirmPassword ((prev) => !prev)} >
              {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
            </span>
          </label>
        </div>
        
        <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
        
      </form>
    </div>
    
  )
}

export default SignupForm;