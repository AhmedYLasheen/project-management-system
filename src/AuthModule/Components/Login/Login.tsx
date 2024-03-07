import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../../assets/images/PMS 3.svg";
import axios from "axios";


export default function Login() {

 const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSupmit = (data) => {
  axios.post('https://upskilling-egypt.com:3003/api/v1/Users/Login',data)
  .then((Response)=>{
    console.log(Response);
    navigate("/dashboard");
  })
  .catch((errors)=>{
    console.log(errors);
    
  })
   
   
   
  };
  return (
    <>
      <div className="auth-cotainer  vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="login-logo">
          <img src={logoImg} className="" />
        </div>
        <div className="row login-container w-50  rounded-5 py-3 px-5 m-2">
          <div className="logo-info  ">
            <p className="text-white">Welcome To PMS</p>
            <h1 className=" text-warning my-4" >Login</h1>
          </div>
          <div className="login-form">
            <form onSubmit={handleSubmit(onSupmit)}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label  text-warning"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  
                  placeholder="Enter Your Email"
                  {...register("email",{
                    required:"Email Addres is required",
                    pattern:{
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Email Not Valid",
                    },
                  })}
                />
                {errors.email &&(
                   <p className=" text-danger ">
                    email not valid
                   </p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label text-warning"
                >
                  password
                </label>
                <input
                  type="password"
                  className="form-control"
                 
                  placeholder="Password"
                  {...register("password",{
                    required:"password Addres is required",
                   
                  })}
                 
                />
                {errors.password &&(
                   <p className=" text-danger ">
                    password not valid
                   </p>
                )}
                
              </div>
              <div className="d-flex justify-content-between pb-4">
                <div>
                  <Link
                    to={"/register"}
                    className="text-white text-decoration-none "
                  >
                    Register Now
                  </Link>
                </div>
                <div>
                  <Link
                    to={"/forgot-Pass"}
                    className="text-white text-decoration-none  "
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <button className="mb-4 p-3 text-white button btn btn-warning w-100 rounded-5 d-flex justify-content-center m-auto align-items-center">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
