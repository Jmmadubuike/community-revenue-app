import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../../components/common/logo";
import {toast} from "react-hot-toast"
import { callApi } from "../../../api";
import {replace, useNavigate} from "react-router-dom"
function UserLoginPage() {
  const [formData, setFormData] = useState({"idn":""});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.idn) {
        
        toast.error("Please input your idn number");
        return;
    }
    toast.loading("Loading")
    callApi("auth/user-login/idn",{
      body:JSON.stringify(formData),
      method:"POST",
      onSuccess: data => {
        toast.dismiss()
        toast.success("Welcome .. ")
        localStorage.setItem("user_token",data.data.token)
        localStorage.setItem("user_username",data.data.username)
        window.location.href = "/user/dashboard"



      },
      onError:error =>{
        if (error?.response?.status == 401){
          toast.dismiss()

          toast.error("Invalid credentials")

        }else{
          toast.custom("Network error")
        }
      }
    })

  };
   
  return (
    <div className="flex flex-col w-full items-center min-w-full max-w-max h-full min-h-screen justify-center">
      <div className="flex flex-col items-center">
        <Logo />
        <form onSubmit={handleSubmit} className="w-80">
         

          <div className="my-5 relative">
            <label className="block text-gray-700 font-medium">IDN Number</label>
            <input
              type="text"
              name="idn"
              value={formData.idn}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none pr-10"
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-7 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          <div className="my-2">
            <button type="submit" className="w-full bg-[#7A7D47] text-white py-3 rounded cursor-pointer">
              Login
            </button>
          </div>
          <p className="text-right my-8 text-blue-900 underline  cursor-pointer" onClick={() => navigate("/user/login")}>Login with Email</p>
        </form>
      </div>
    </div>
  );
}

export default UserLoginPage;
