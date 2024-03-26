"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("/api/users/ami");
        setUsername(response.data.data.username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <>
      <Header pathname={""} />
      <div className="flex justify-center items-center h-screen bg-violet-400">
        <div className="text-center mr-8">
          <h2 className="text-4xl font-bold sm:text-5xl">
            WELCOME TO Dinner to Door {" "}
            <br />
            <span style={{ color: "green" }}>{username}</span>
          </h2>

          <p className="text-xl sm:text-2xl mt-4">
            We are committed to give the best Foods
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <Image
              src="https://i.ibb.co/5BCcDYB/Remote2.png"
              alt="hero"
              height={500}
              width={500}
            />
          </div>
        </div>
        <div style={{ transform: "rotate(360deg)" }}>
          <Image
            src="https://cdn.dribbble.com/users/623476/screenshots/1827550/foodpanda.png?resize=400x300&vertical=center"
            alt="hero"
            height={300}
            width={300}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
