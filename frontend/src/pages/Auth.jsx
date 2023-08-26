import React, { useState } from "react";

function Auth() {
  const { signUp, setSignUp } = useState(true);
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50">
      <div className="w-1/3 bg-white shadow-xl rounded-xl p-3 space-y-6">
        <h1 className="text-2xl text-center p-2 font-bold">MovieApp</h1>
        <div className="flex flex-col space-y-3">
          {signUp && (
            <input
              type="text"
              placeholder="Username"
              className="input-style"
            ></input>
          )}
          <input
            type="text"
            placeholder="Email"
            className="input-style"
          ></input>
          <input
            type="text"
            placeholder="Password"
            className="input-style"
          ></input>
        </div>
        <div className="cursor-pointer hover:bg-indigo-800 w-full p-4 text-center bg-indigo-600 text-white rounded-xl">
          KAYIT OL
        </div>
      </div>
    </div>
  );
}

export default Auth;
