"use client";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { useRouter } from "next/navigation";
import { user } from "@/helpers/types";
// interface user{
//     username:string
//     email:string
// }

export default function ProfilePage({username,email,_id}:user) {
  const router = useRouter();
  const [userData, setUserData] = useState<user | null>(null);
  const [loadingLogout, setLoadingLogout] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);

  const logout = async () => {
    setLoadingLogout(true);
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error:any) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoadingLogout(false);
    }
  };

  const getUserDetails = async () => {
    setLoadingDetails(true);
    try {
      const res = await axios.get("/api/users/ami");
      console.log(res.data);
      setUserData(res.data.data);
    } catch (error:any) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoadingDetails(false);
    }
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-4 bg-orae-400">
        <Toaster />
      <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
      <hr className="w-full mb-4" />
      <p className="text-lg mb-2"></p>

      {userData && (
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-lg font-semibold bg-green-500 p-2 rounded mb-2">
            User Details
          </h2>
          <p>
            <strong>Username:</strong> {userData.username}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <div>
            <strong>User ID:</strong>{" "}
            <button
              className="text-blue-500 hover:underline"
              onClick={() => router.push(`/profile/${userData._id}`)}
            >
              {userData._id}
            </button>
          </div>
        </div>
      )}

      <hr className="w-full mb-4" />


      <button
        onClick={logout}
        disabled={loadingLogout}
        className={`bg-green-800 hover:text-orange-700 text-white font-bold py-2 px-4 rounded mb-2 ${
          loadingLogout ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loadingLogout ? "Logging Out..." : "Logout"}
      </button>
      <button
        onClick={getUserDetails}
        disabled={loadingDetails}
        className={`bg-green-800 hover:text-orange-700 text-white font-bold py-2 px-4 rounded ${
          loadingDetails ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loadingDetails ? "Fetching Details..." : "Get User Details"}
      </button>
    </div>
  );
}
