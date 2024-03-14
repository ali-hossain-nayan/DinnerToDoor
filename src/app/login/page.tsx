"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", {
        email: email,
        password: password,
      });
      console.log("Login success", response.data);
      toast.success("Login successful", { duration: 2000 });
      router.push("/");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error("Login failed. Please check your credentials.", { duration: 2000 })
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="scale-[.8] flex flex-col  w-[55%] mt-[15%] mb-96 mr-196 ">
        <Toaster/>
      <div className="w-[100%] flex flex-col items-start justify-start gap-[19px] z-[0]">
        <h1 className="relative text-inherit tracking-[0.01em] leading-[100%] whitespace-pre-wrap font-inherit">
          <b className="text-2xl  ">{`Welcome Back `}</b>
          <span> 👋</span>
        </h1>
        {/* <div className="relative text-base tracking-[0.01em] leading-[160%] text-secondary-text text-left"> */}
        {/* <p className="m-0">{`Today is a new day. It's your day. You shape it. `}</p> */}
        {/* <p className="m-0">Sign in to start managing your visitors.</p> */}
        {/* </div> */}
      </div>
      {/* <b className="text-2xl ml-128">Welcome Back </b> */}
      {/* <h3></h3> */}
      <div className="text-2xl justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="m-0 mb-12  mx-auto -mr-48 self-stretch flex flex-col  relative gap-[24px] z-[1] top-4 "
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px] z-[0]">
            <div className="relative text-xl  tracking-[0.01em] leading-[100%] font-dm-sans text-primary-text text-left">
              Email <span className="text-red-500">*</span>
            </div>
            <input
              className="relative border border-borderColor focus:border-transparent focus:outline-none focus:ring-1 focus:ring-[#C8BBFF] w-[100%] h-[48px] shrink-0 self-stretch rounded-xl bg-white flex flex-row items-center justify-start py-3 px-[9px] gap-[16px] z-[1] text-base tracking-[0.01em] leading-[100%] font-dm-sans text-secondary-text text-left"
              // color="primary"
              placeholder="Example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              className="text-red-500 text-sm -mb-1"
              style={{ height: "2px" }}
            >
              {/* Error message */}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px] z-[1]">
            <div className="relative text-xl  tracking-[0.01em] leading-[100%] font-dm-sans text-primary-text text-left">
              Password <span className="text-red-500">*</span>
            </div>
            <input
              className="relative text-sm border border-borderColor focus:border-transparent focus:outline-none focus:ring-1 focus:ring-[#C8BBFF] w-[100%] h-[48px] shrink-0 self-stretch rounded-xl bg-white flex flex-row items-center justify-start py-3 px-[9px] gap-[16px] z-[1]  tracking-[0.01em] leading-[100%] font-dm-sans text-secondary-text text-left"
              color="primary"
              placeholder="At least 8 characters"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="text-red-500 text-sm mb-0"
              style={{ height: "2px" }}
            >
              {/* Error message */}
            </div>
          </div>
          <div className="w-[100%] flex flex-row items-center justify-between gap-[16px] z-[2] text-base text-darkslategray-100">
            <div className="my-0 mx-[!important] top-[202px] left-[27px] text-sm tracking-[0.01em] leading-[100%] font-dm-sans text-darkslateblue text-center z-[3]">
              <input
                className="mr-2 w-5 h-5"
                type="checkbox"
                color="primary"
                defaultChecked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="absolute h-10 w-30 text-xl">Remember me</span>
            </div>
            <Link
              href="/reset"
              className="cursor-pointer text-xl [border:none] p-0 bg-[transparent] relative  tracking-[0.01em] leading-[100%] font-dm-sans text-blue text-center inline-block"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="w-[100%] flex flex-col items-center justify-center gap-[24px] z-[2] text-base text-darkslategray-100">
            {/* Error message */}
          </div>
          <button
            className="w-[100%] text-xl bg-black h-[48px] shrink-0 self-stretch rounded-xl bg-blue flex flex-row items-center justify-center py-3 px-[9px] gap-[16px] z-[4]  tracking-[0.01em] leading-[100%] font-dm-sans text-white text-left"
            color="primary"
            type="submit"
          >
            Sign in
          </button>
          <label
            className="absolute my-0 mx-[!important] top-[187px] left-[-3px] z-[5]"
            //   placeholder=""
          >
            {/* Placeholder */}
          </label>
          <div className="w-[100%] flex flex-col items-center justify-center gap-[24px] z-[2] text-base text-darkslategray-100">
            <div className="w-[388px] shrink-0 flex flex-row items-center justify-center py-2.5 px-0 box-border gap-[16px]">
              <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-gainsboro" />
              {/* <div className="relative tracking-[0.01em] leading-[100%]">Or</div> */}
              <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-gainsboro" />
            </div>
            <div className="w-[100%] flex flex-col items-center justify-center">
              <Link
                href="/"
                className="w-[100%] self-stretch rounded-xl bg-whitesmoke flex flex-row items-center justify-center py-3 px-[9px] gap-[16px]"
              >
                {/* <img
                className="relative w-7 h-7 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/google@2x.png"
              /> */}
                {/* <div className="cursor-pointer [border:none] p-0  relative text-base tracking-[0.01em] leading-[100%] font-dm-sans text-secondary-text text-left flex items-center">
                Sign in with Google
              </div> */}
              </Link>
            </div>
            <p className="text-center -mb-1 text-secondaryText text-xl">
              Don't have an account?{" "}
              <Link href="/signup" className=" text-[#4318FF] text-xl">
                Sign up
              </Link>
            </p>
            <div className="w-[100%] flex flex-col text-xl items-center justify-center  mt-[-10px]">
              © 2024 ALL RIGHTS RESERVED
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
