import React from "react";
import { use } from "react";
import { Link } from "react-router-dom";
import useFetch from "../custom_hooks/stablishconectons";
export default function Home({ isLoggedIn = false, userName = "User" }) {
  const {data,loading}=useFetch("/api/abc") 
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex items-center justify-center">
      <div className="max-w-6xl w-full px-6 py-12 grid gap-10 md:grid-cols-2 items-center">
        {/* Left: Hero + Illustration */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to the Project
          </h1>

          <p className="text-slate-300 max-w-xl">
            This project is a learning playground where you can implement frontend
            concepts, connect them to a backend, receive messages for different
            tasks, and maintain logs of your actions. Use it to learn, experiment,
            and build features step-by-step.
          </p>

          {/* Conditional CTA based on login */}
          {!isLoggedIn ? (
            <div className="bg-slate-800 rounded-xl p-5 shadow-md border border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Massage form Backend</h3>
              <p className="text-slate-300 mb-3">
                
                <br />
              </p>
                <div className="text-orange-400 font-mono">
                  {loading?"Loading...":""}
                {/* {data && JSON.stringify(data)} */}
                {data?`Message is : ${data.msg}`:"No data found pleace check backend server"}
                </div>
              <div className="flex gap-3">
                <Link
                  to="/user"
                  className="inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium text-slate-900"
                >
                  Sign Up
                </Link>
                <Link
                  to="/user"
                  className="inline-block px-4 py-2 border border-slate-700 rounded-lg text-slate-200 hover:bg-slate-800"
                >
                  Login
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-slate-800 rounded-xl p-5 shadow-md border border-slate-700">
              <h3 className="text-lg font-semibold mb-2">Welcome back, {userName}!</h3>
              <p className="text-slate-300 mb-3">
                Quick actions: open your Todos, check features, or view action logs.
              </p>
              <div className="flex gap-3">
                <Link
                  to="/todo"
                  className="inline-block px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium text-slate-900"
                >
                  Open Todos
                </Link>
                <Link
                  to="/features"
                  className="inline-block px-4 py-2 border border-slate-700 rounded-lg text-slate-200 hover:bg-slate-800"
                >
                  Features
                </Link>
              </div>
            </div>
          )}

          {/* Short feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-sm">
              <h4 className="font-semibold">Purpose</h4>
              <p className="text-slate-300 text-sm">
                Learn and implement frontend & backend concepts practically.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-sm">
              <h4 className="font-semibold">How it works</h4>
              <p className="text-slate-300 text-sm">
                Frontend communicates with backend APIs; backend sends task messages
                and keeps action logs.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-sm">
              <h4 className="font-semibold">Messages</h4>
              <p className="text-slate-300 text-sm">
                You will receive messages or notifications for task updates and events.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-sm">
              <h4 className="font-semibold">Logs</h4>
              <p className="text-slate-300 text-sm">
                Actions are logged on the server for debugging and learning purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Illustration / visual */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-2xl p-6 shadow-xl border border-slate-700">
            <img
              src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=60"
              alt="illustration"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="text-slate-200">
              <h3 className="text-xl font-semibold mb-1">Start learning</h3>
              <p className="text-slate-300 text-sm">
                Try building a new feature, connect it to the backend, and see how
                messages and logs help you understand app flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
