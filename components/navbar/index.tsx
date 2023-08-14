"use client";
import { logo, menu, close } from "@/assets";
import { navLinks } from "@/constants";
import { styles } from "@/styles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { ThemeContext, ThemeProvider } from "@/context";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);
  const { theme, setTheme } = useTheme();

  // const handleThemeToggle = () => {
  //   setTheme(e.target.value);
  // };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((current: any) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);
  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-between items-center max-w-7xl mx-auto "
        >
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Image src={logo} alt="" className="w-9 h-9 object-contain" />
            <p
              className={`${
                scrolled || theme === "dark" ? "text-white" : "text-[#222222]"
              }  text-[18px] font-bold cursor-pointer flex`}
            >
              Sam &nbsp;
              <span className="sm:block hidden"> | Full Stack Developer</span>
            </p>
          </Link>

          <motion.ul className="list-none flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.id ? "text-white" : ""} ${
                  scrolled || theme === "dark"
                    ? "hover:text-white  text-secondary"
                    : "hover:text-[#ff9301]"
                } text-[18px] font-medium cursor-pointer hidden sm:flex `}
              >
                <Link href={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
            <button
              id="theme-toggle"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              type="button"
              className={`${
                theme === "dark"
                  ? "text-gray-300 border-gray-300"
                  : "text-gray-800 border-gray-500"
              } border-2  rounded-lg text-sm p-2  sm:flex`}
            >
              <svg
                id="theme-toggle-dark-icon"
                className={`${theme === "dark" ? "hidden" : ""} w-5 h-5 `}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className={`${theme === "dark" ? "" : "hidden"} w-5 h-5`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </motion.ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient dark:bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer  text-[16px] 
                  ${active === nav.id ? "text-white" : "text-secondary"}`}
                    onClick={() => setToggle(!toggle)}
                  >
                    <Link href={`#${nav.id}`}>{nav.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
