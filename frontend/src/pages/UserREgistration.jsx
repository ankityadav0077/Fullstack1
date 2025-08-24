import React from "react";
import {Login,Singup} from "./index"
import { useState } from "react";
import bgimg from "../assets/userReg.jpg"
export default function UserResetration({userlogindefult=true}){
    const [userlogin,setUserlogin]=useState(userlogindefult);
    const [show, setShow] = useState(true);
    if (!show) return null; 
    return (
        <>
        <div className="bg-slate-900 min-h-screen text-slate-50 flex items-center justify-center ">
            <div className="min-h-[500px] bg-slate-900 text-slate-50 sm:flex items-center justify-center border border-amber-600 " style={{backgroundImage:`url(${bgimg})`,backgroundSize:"cover",backgroundPosition:"center"}}>
                <button onClick={() => setShow(false)} className="absolute top-3 right-3 text-white text-4xl font-bold hover:text-red-500 transition" >
            ×
          </button>
                <div className="text-3xl font-bold mb-6 text-center flex-1">
                    welcome to user registration
                    <div>
                        {userlogin?"please login to your account":"please create a new account"}
                    </div>
                  <div className="flex justify-center relative  rounded-3xl m-4">
                    <div className={`absolute bg-blue-500 w-1/2 h-full z-0 rounded-3xl transition-all duration-500 ease-in-out   ${userlogin ? "left-0 opacity-100" : "left-1/2 opacity-70"}`} > </div>
                    <div className="flex gap-10 z-10">
                        <button onClick={() => setUserlogin(true)} className=" px-4 py-2 text-white rounded-lg">
                        SignUp
                        </button>
                        <button onClick={() => setUserlogin(false)} className=" px-4 py-2  text-white rounded-lg">
                        Login
                        </button>
  </div>
</div>

                </div>
                <div className="flex-1 border">
                    {userlogin?<Singup/>:<Login/>}
                </div>
            </div>
        </div>
        </>
    )
}