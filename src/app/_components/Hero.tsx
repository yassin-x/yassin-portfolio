"use client";
import { Button } from "@/components/ui/button";
import { StarsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="text-3xl font-bold text-primary">
              Yassin Ibrahim | Portfolio
            </h1>
            <p className="text-lg text-accent max-w-md">
              Passionate full-stack developer specializing in building
              high-performance web applications using modern technologies like
              <span className="text-primary">
                {" "}
                Next.js, React.js, and Node.js.
              </span>{" "}
              Focused on scalability, security, and seamless user experiences.
            </p>
            <div className="flex flex-row gap-2 items-center">
              <Button className="rounded-full">Preview CV</Button>
              <Button variant={"ghost"}>
                <Link
                  href={"https://github.com/yassin-x"}
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  Github <FaGithub />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-start flex-row gap-2 py-6 md:py-0">
            <p className="border-primary p-2 rounded-full border-[1px] gap-2 items-center text-accent hidden md:flex">
              <StarsIcon className="text-primary w-4 h-4" /> Full-Stack
              Developer
            </p>
            <Image
              src={"/me.jpg"}
              alt={"me_photo"}
              width={300}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
