import React from "react";

function Auth() {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50 ">
      <div className="w-1/3 bg-white shadow-xl rounded-xl">
        <h1 className="text-center p-2">MovieApp</h1>
        <div className="p-2">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2"
          ></input>
          <input type="text" placeholder="Email" className="w-full p-2"></input>
          <input
            type="text"
            placeholder="Password"
            className="w-full p-2"
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
