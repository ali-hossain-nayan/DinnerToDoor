"mongodb+srv://alinayan123:<password>@cluster1.scp9rca.mongodb.net/";
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup successfully", response.data);
      toast.error("Signup successful.", { duration: 2000 })

      router.push("/login");
    } catch (error) {
      console.log("Error signing up:", error);
      toast.error("Signup failed. Please check your credentials.", { duration: 2000 })

      // Handle error (e.g., display error message)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="scale-[.8] flex flex-col  w-[55%] mt-[15%] mb-96 ">
        <Toaster/>
      <div className="w-[100%] flex flex-col items-start justify-start gap-[19px] z-[0]">
        <h1 className="relative text-inherit tracking-[0.01em] leading-[100%] whitespace-pre-wrap font-inherit">
          <b className="text-2xl  ">Sign Up</b>
          <span> 👋</span>
        </h1>
      </div>
      <div className="text-2xl justify-center items-center">
        <form
          onSubmit={onSignup}
          className="m-0 mb-12  mx-auto -mr-48 self-stretch flex flex-col  relative gap-[24px] z-[1] top-4 "
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px] z-[0]">
            <div className="relative text-xl  tracking-[0.01em] leading-[100%] font-dm-sans text-primary-text text-left">
              Username <span className="text-red-500">*</span>
            </div>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="relative border border-borderColor focus:border-transparent focus:outline-none focus:ring-1 focus:ring-[#C8BBFF] w-[100%] h-[48px] shrink-0 self-stretch rounded-xl bg-white flex flex-row items-center justify-start py-3 px-[9px] gap-[16px] z-[1] text-base tracking-[0.01em] leading-[100%] font-dm-sans text-secondary-text text-left"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px] z-[1]">
            <div className="relative text-xl  tracking-[0.01em] leading-[100%] font-dm-sans text-primary-text text-left">
              Email <span className="text-red-500">*</span>
            </div>
            <input
              id="email"
              type="text"
              placeholder="Example@email.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="relative border border-borderColor focus:border-transparent focus:outline-none focus:ring-1 focus:ring-[#C8BBFF] w-[100%] h-[48px] shrink-0 self-stretch rounded-xl bg-white flex flex-row items-center justify-start py-3 px-[9px] gap-[16px] z-[1] text-base tracking-[0.01em] leading-[100%] font-dm-sans text-secondary-text text-left"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px] z-[1]">
            <div className="relative text-xl  tracking-[0.01em] leading-[100%] font-dm-sans text-primary-text text-left">
              Password <span className="text-red-500">*</span>
            </div>
            <input
              id="password"
              type="password"
              placeholder="At least 8 characters"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="relative border border-borderColor focus:border-transparent focus:outline-none focus:ring-1 focus:ring-[#C8BBFF] w-[100%] h-[48px] shrink-0 self-stretch rounded-xl bg-white flex flex-row items-center justify-start py-3 px-[9px] gap-[16px] z-[1] text-base tracking-[0.01em] leading-[100%] font-dm-sans text-secondary-text text-left"
            />
          </div>
          <div className="w-[100%] flex flex-row items-center justify-between gap-[16px] z-[2] text-base text-darkslategray-100">
            <div className="my-0 mx-[!important] top-[202px] left-[27px] text-sm tracking-[0.01em] leading-[100%] font-dm-sans text-darkslateblue text-center z-[3]">
              <input
                className="mr-2 w-5 h-5"
                type="checkbox"
                defaultChecked={false}
                onChange={(e) => console.log(e.target.checked)}
              />
              <span className="absolute h-10 w-30 text-xl">Remember me</span>
            </div>
          </div>
          <button
            className="w-[100%] text-xl bg-black h-[48px] shrink-0 self-stretch rounded-xl bg-blue flex flex-row items-center justify-center py-3 px-[9px] gap-[16px] z-[4]  tracking-[0.01em] leading-[100%] font-dm-sans text-white text-left"
            color="primary"
            type="submit"
            disabled={buttonDisabled}
          >
            {loading ? "Loading" : "Sign up"}
          </button>
          <div className="w-[100%] flex flex-col items-center justify-center gap-[24px] z-[2] text-base text-darkslategray-100">
            {/* Error message */}
          </div>
          <p className="text-center -mb-1 text-secondaryText text-xl">
            Already have an account?{" "}
            <Link href="/login" className="text-[#4318FF] text-xl">
              Sign in
            </Link>
          </p>
          <div className="w-[100%] flex flex-col text-xl items-center justify-center  mt-[-10px]">
            © 2024 ALL RIGHTS RESERVED
          </div>
        </form>
      </div>
    </div>
  );
}