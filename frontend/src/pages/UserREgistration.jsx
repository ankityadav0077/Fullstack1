import React, { useState, useEffect } from "react";
import { Login, Singup } from "./index";
import bgimg from "../assets/userReg.jpg";
import { useNavigate } from "react-router-dom";

export default function UserResetration({ userlogindefult = true }) {
  const [userlogin, setUserlogin] = useState(userlogindefult);
  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && navigate(-1);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => navigate(-1)}
      ></div>

      <div
        className="relative sm:min-h-[500px] w-full sm:w-3/4 max-w-4xl sm:flex rounded-xl shadow-2xl z-10 border border-amber-600 text-slate-50 mt-20 sm:m-0"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 right-3 text-white text-4xl font-bold hover:text-red-500"
        >
          ×
        </button>

        <div className="flex-1 text-center font-bold text-3xl flex flex-col justify-center items-center">
          <p>Welcome to user registration</p>
          <p>
            {userlogin
              ? "please login to your account"
              : "please create a new account"}
          </p>

          <div className="flex justify-center relative m-4 rounded-3xl">
            <div
              className={`absolute bg-blue-500 w-1/2 h-full rounded-3xl transition-all duration-500 ${
                userlogin ? "left-0 opacity-100" : "left-1/2 opacity-70"
              }`}
            ></div>
            <div className="flex gap-10 z-10">
              <button
                onClick={() => setUserlogin(true)}
                className="px-4 py-2 text-white"
              >
                SignUp
              </button>
              <button
                onClick={() => setUserlogin(false)}
                className="px-4 py-2 text-white"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 border">
          {userlogin ? <Singup /> : <Login />}
        </div>
      </div>
    </div>
  );
}
