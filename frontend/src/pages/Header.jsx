import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Header(){
    const [showMobile,setShowMobile]=useState(true)
    const menuItems=[
        {name:"Home",path:'/'},
        {name:"Todo",path:'/todo'},
       {name:"Features",path:'/features'},
       {name:"Learning",path:'/learning'},
       {name:"About",path:'/about'},
   ]
    return (
        <>
        {/* desktop menu */}
        <div className=" bg-slate-900 sm:flex justify-between p-2 sm:p-4  md:text-xl md:font-bold">
            <div className=" flex justify-between">
                <span  className="bg-slate-800 text-white p-2">Mylogo</span>
                <button className=" sm:hidden text-white" onClick={()=>setShowMobile(!showMobile)}>menu</button>
            </div>
            <div>
                <ul className={` ${showMobile?"flex  flex-col":"hidden"} items-center sm:flex sm:flex-row sm:justify-between gap-4`}>
                {menuItems.map((items)=>(
                    <NavLink to={items.path} className={({isActive})=>`sm:p-2  ${isActive?'text-orange-500':'text-white'}`} onClick={()=>setShowMobile(!showMobile)} key={items.name}>
                        {items.name}
                    </NavLink>
                ))}
                </ul>
            </div>
            <div>
                <ul className={`${showMobile?"flex  flex-col":"hidden"} items-center m-2 sm:m-0 sm:flex sm:flex-row justify-between gap-4`}>
                    <NavLink to={'/user/singup'} className={({isActive})=>`sm:p-2 rounded bg-slate-800 ${isActive?'text-orange-500':'text-white'}`} onClick={()=>setShowMobile(!showMobile)}>SingUp</NavLink>
                    <NavLink to={'/user/login'}  className={({isActive})=>`sm:p-2 rounded bg-slate-800  ${isActive?'text-orange-500':'text-white'}`} onClick={()=>setShowMobile(!showMobile)}>LogIn</NavLink>
                </ul>
            </div>
        </div>
        </>  
    )
}