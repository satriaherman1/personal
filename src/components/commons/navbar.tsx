"use client";

import DarkModeSwitcher from "@src/components/commons/dark-mode-switcher";
import DecoratorLeft from "@src/components/commons/decorator-left";
import Logo from "@src/components/commons/logo";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiMenu3Line } from "react-icons/ri";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll and set the state
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={classNames(
        "z-[999] transition-colors md:py-2 duration-300 dark:text-white", // Smooth transition effect
        className,
        {
          "bg-white shadow-[0px_5px_60px_-15px_rgba(0,0,0,0.2)] dark:bg-slate-900 ":
            isScrolled,
        } // Add background color and shadow when scrolled
      )}
    >
      {/* Desktop Navbar */}
      <div className="container hidden md:block">
        <div className="flex justify-between items-center py-4">
          <section>
            <a href="/" className="text-xl font-bold">
              <Logo width="35" height="35" />
            </a>
          </section>

          <section className="flex gap-x-10 text-xl">
            <Link href="/">Home</Link>
            <Link href="/">Projects</Link>
            <a href="https://blog.satriaherman.com" target="_blank">
              Blogs
            </a>
          </section>

          {/* <button className="btn btn-outlined btn-small">Get In Touch</button> */}
          <DarkModeSwitcher className=" relative" />
        </div>
      </div>

      {/* menubar */}
      <section
        className={classNames({
          "fixed  left-0 w-full h-full dark:bg-gray-900 bg-white z-[999] duration-300":
            true,
          "top-0 opacity-100": isMobileMenuOpen,
          "top-[100vh] opacity-0": !isMobileMenuOpen,
        })}
      >
        {/* <button className="absolute right-8 top-5 text-2xl">
          <CgClose />
        </button> */}

        <DecoratorLeft className="absolute z-[1001] bottom-0" fill="#525452" />

        <DarkModeSwitcher className="absolute right-4 top-3" />
        <div className="flex flex-col text-center gap-y-10 justify-center h-full dark:text-white">
          <Link href="/" className=" text-3xl px-4 ">
            Home
          </Link>
          <Link href="/" className=" text-3xl px-4 ">
            Projects
          </Link>
          <Link
            href="https://blog.satriaherman.com"
            target="_blank"
            className=" text-3xl px-4 "
          >
            Blogs
          </Link>
        </div>
      </section>

      {/* end menubar */}
      {/* Mobile Navbar */}
      <div className="md:hidden container justify-between items-center flex p-4 dark:bg-slate-800 bg-white shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.7)] z-[1000] relative">
        <a href="/" className="text-xl font-bold">
          <Logo width="35" height="35" />
        </a>

        <span className="text-xl font-semibold dark:text-white">
          Satria Herman
        </span>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <GrClose fontSize={20} className="dark:text-white duration-200" />
          ) : (
            <RiMenu3Line
              fontSize={20}
              className="dark:text-white duration-200"
            />
          )}
        </button>
      </div>
    </nav>
  );
}
