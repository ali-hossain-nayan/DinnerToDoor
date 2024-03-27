"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import profile from "../../../public/images/profile.png"

interface User {
  username: string;
  email: string;
  _id: string;
  city: string;
  postcode: string;
}

export default function ProfilePage({ username, email, _id, city, postcode }: User) {
  const router = useRouter();
  const [userData, setUserData] = useState<User | null>(null);
  const [loadingLogout, setLoadingLogout] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = async () => {
    setLoadingLogout(true);
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
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
      setUserData(res.data.data);
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoadingDetails(false);
    }
  };

  return (
    <div className="container mx-auto py-8  ">
      {/* <Image src={profile} alt="profile" width={900}height={900}/> */}
      <Toaster />
      <h1 className="text-3xl font-semibold mb-4 justify-center items-center flex flex-1 text-violet-700">User Profile</h1>
      <hr className="border-t border-gray-200 mb-6" />
      {userData && (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-red-400">User Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-semibold flex gap-2 text-xl ">Username: <p className="text-green-600">{userData.username}</p>
                </label>
              </div>
              <div>
                <label className="font-semibold flex gap-2 text-xl">Email: <p className="text-green-600">{userData.email}</p></label>
                <p></p>
              </div>
              <div>
                <label className="font-semibold flex gap-2 text-xl">City:  <p>{userData.city}</p></label>
              </div>
              <div>
                <label className="font-semibold flex gap-2 text-xl">Postcode:</label>
                <p>{userData.postcode}</p>
              </div>
              <div className="col-span-2">
                <label className="font-semibold">User ID:</label>
                <p>
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => router.push(`/profile/${userData._id}`)}
                  >
                    {userData._id}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={logout}
          disabled={loadingLogout}
          className={`bg-green-800 text-white font-bold py-2 px-4 rounded hover:bg-violet-700 ${loadingLogout ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {loadingLogout ? "Logging Out..." : "Logout"}
        </button>
        <button
          onClick={getUserDetails}
          disabled={loadingDetails}
          className={`bg-green-800 text-white font-bold py-2 px-4 rounded hover:bg-violet-700 ${loadingDetails ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {loadingDetails ? "Fetching Details..." : "Refresh Details"}
        </button>
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 left-4 bg-blue-800 text-white px-3 py-1 rounded hover:bg-violet-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
