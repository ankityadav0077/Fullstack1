import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { data, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
export default function Singup(){
    const [showpass,setShowpass]=useState(false);
    const [ispassmatch,setIspassmatch]=useState(true);
    const [msg,setMsg]=useState(null);
    const [singupData,setSingupData]=useState(null);
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        console.log("form submitted");
        e.preventDefault();
        const formData=new FormData(e.target);
        const abc=Object.fromEntries(formData.entries());  
        console.log(abc);
        if(abc.password!=abc.confirmPassword){
            // alert("password and confirm password do not match"); 
            setIspassmatch(false);   
            setMsg("password and confirm password do not match");
            return null;
        }
        const data=fetch("/api/singup",{
            method:"PUT",   
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(abc)
        }).then(res=>{
            if (res.status==200){

                res.json().then(data=>{
                    setSingupData(data)
                    console.log("response is ",data);
                    navigate(-1)
                }
            )
        }else{
                res.json().then(data=>{
                    console.log("response is ",data);
                    setMsg(data.error)
                    setIspassmatch(false);  
                    e.target.reset();
                }
            )
            }
        }
    ).catch (err=>console.log("error is ",err));
        // You can send 'data' to your backend here using fetch or axios 
    }
    return(
        <>
        <div className=" bg-slate-900 text-slate-50 flex items-center justify-center">
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md">     
                <h2 className="text-2xl font-bold mb-6 text-center">SingUp {singupData?.msg} </h2> 
                <form onSubmit={(e)=>handleSubmit(e)} >
                    <div className="mb-4">          
                        <label className="block text-sm font-medium mb-2" htmlFor="username">Username</label>       
                        <input className="w-full px-3 py-2 rounded border border-slate-600 focus:outline-none focus:border-blue-500 autofill:bg-slate-700" type="text" id="username" name="username" required  placeholder="Username"/>   
                    </div>
                    <div className="mb-4">          
                        <label className="block text-sm font-medium mb-2" htmlFor="username">Email</label>       
                        <input className="w-full px-3 py-2 rounded border border-slate-600 focus:outline-none focus:border-blue-500 autofill:bg-slate-700" type="text" id="email" name="email" required  placeholder="abcexaple.@avbd.com"/>   
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
                    <div className="mb-4">          
                        <label className="block text-sm font-medium mb-2" htmlFor="username">Confim Password</label>   
                        <div className="flex items-center border  border-slate-600 rounded-xl bg-slate-700   focus-within:border-blue-500">
                        <input className="w-full px-3 py-2   rounded focus:outline-none" type={showpass ? "text" : "password"} id="confimPassword" name="confirmPassword" required placeholder="confirm password" />  
                        <button type="button" onClick={() => setShowpass(!showpass)} className="ml-2 px-3 py-2 text-xl   text-slate-400 hover:text-slate-200 focus:outline-none">
                        {showpass ? <FaEyeSlash /> : <FaEye />}
                        </button> 
                        </div>
                    </div>
                    <div className={`${ispassmatch?'hidden':'block'} text-red-500 m-2`}>{msg}</div>
                    <button onClick={()=>console.log('singup button')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors" type="submit">Sign Up</button>
                </form>  
            </div>    
        </div>
        </>
    )
}