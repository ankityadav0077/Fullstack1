import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function Login(){
    const [showpass,setShowpass]=useState(false);
    return(
        <>
        <div className="min-h-[500px] bg-slate-800 text-slate-50 flex items-center justify-center">
            <div className="  p-8 rounded-lg shadow-lg w-full max-w-md">     
                <h2 className="text-2xl font-bold mb-6 text-center">LogIn</h2> 
                <form>
                    <div className="mb-4">          
                        <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>       
                        <input className="w-full px-3 py-2 rounded border border-slate-600 focus:outline-none focus:border-blue-500 autofill:bg-slate-700" type="text" id="username" name="username" required  placeholder="Username"/>   
                    </div>
                    <div className="mb-4">          
                        <label className="block text-sm font-medium mb-2" htmlFor="username">Password</label>   
                        <div className="flex items-center border  border-slate-600 rounded-xl bg-slate-700   focus-within:border-blue-500">
                        <input className="w-full px-3 py-2   rounded focus:outline-none" type={showpass ? "text" : "password"} id="password" name="password" required placeholder="password" />  
                        <button type="button" onClick={() => setShowpass(!showpass)} className="ml-2 px-3 py-2 text-xl   text-slate-400 hover:text-slate-200 focus:outline-none">
                        {showpass ? <FaEyeSlash /> : <FaEye />}
                        </button> 
                        </div>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors" type="submit">Login</button>
                </form>  
            </div>    
        </div>
        </>
    )
}