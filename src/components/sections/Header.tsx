"use client";

import React from "react";
import MyImage from "../MyImage";
import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import SwitchLanguage from "../SwitchLanguage";
import { useTranslations } from "next-intl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const themeChanger = () => setTheme(theme === "dark" ? "light" : "dark");
  const t = useTranslations("header");

  return (
    <>
      <div className="items-center gap-2 md:gap-5 flex mt-20 mb-20 ">
        <MyImage className="rounded-full size-18 md:size-24" />
        <div className="flex-1">
          <h1 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
            {t("name")}
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            {t("title")}
          </p>
          <Link
            href={"https://www.verceel.com/"}
            target="blank"
            className="bg-neutral-300 px-2 py-[2px] hover:opacity-80 text-neutral-600 text-sm rounded-full 
            dark:bg-neutral-600 dark:text-neutral-400"
          >
            {t("link")}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip delayDuration={250}>
              <TooltipTrigger>
                <Link
                  href={
                    "https://drive.google.com/file/d/1lEhMGEAI9bfmN10vGw9po8w2olRrSldM/view?usp=sharing"
                  }
                  target="blank"
                >
                  <Button
                    className="cursor-pointer"
                    size="icon"
                    variant="ghost"
                  >
                    <Download className="dark:text-cyan-600 text-pink-600 hover:animate-none animate-pulse size-5 " />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-neutral-50 dark:bg-neutral-800 select-none text-neutral-800 dark:text-neutral-200 px-3 py-2 rounded-md mt-2" side="bottom">
                <p>Download PDF</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <SwitchLanguage />
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
