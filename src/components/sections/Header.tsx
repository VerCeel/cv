"use client";

import React from "react";
import MyImage from "../MyImage";
import Link from "next/link";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const themeChanger = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
    
      <div className="items-center gap-5 flex mt-20 mb-16 ">
        <MyImage height={100} width={100} className="rounded-full" />
        
        <div className="flex-1">
          <h1 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200">
            HIRICH Oussama
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 ">
            Junior Full Stack Devloper
          </p>
          <Link
            href={"https://verceel.com"}
            target="blank"
            className="bg-neutral-300 px-2 py-[2px] hover:opacity-80 text-neutral-600 text-sm rounded-full 
            dark:bg-neutral-600 dark:text-neutral-400"
          >
            verceel.com/
          </Link>
        </div>
        
        <div>
          <Button
            className="cursor-pointer"
            size="icon"
            variant="ghost"
            onClick={() => themeChanger()}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
