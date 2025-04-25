"use client";

import {
  Copy,
  CopyCheckIcon,
  Github,
  LucideLinkedin,
  Mail,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

const Contact = () => {
  const copyClipBoard = (value: string) => {
    navigator.clipboard.writeText(value);
    toast("Copied", {
      className: "max-w-fit space-x-2",
      icon: <CopyCheckIcon />,
    });
  };

  return (
    <div className="cursor-default mb-20">
        <h1 className="mb-4 font-medium text-neutral-800 dark:text-neutral-200">
          Contact
        </h1>

        <div className="flex w-full items-center mb-4">
          <div className="flex md:w-40 w-30 items-center gap-2">
            <PhoneIcon
              width={15}
              height={15}
              className="text-neutral-600 dark:text-neutral-400"
            />
            <p className="text-neutral-600 dark:text-neutral-400">
              Phone
            </p>
          </div>
          <div className="text-neutral-800 flex-1 text-sm md:text-md dark:text-neutral-200">
            +33 7 66 49 91 36
          </div>
          <div className=" ">
            <Button
              variant="ghost"
              className="hover:cursor-pointer"
              onClick={() => copyClipBoard("+33 7 66 49 91 36")}
            >
              <Copy
                width={15}
                height={15}
                className="text-neutral-600 dark:text-neutral-400"
              />
            </Button>
          </div>
        </div>


        <div className="flex w-full items-center mb-4">
          <div className="flex md:w-40 w-30 items-center gap-2">
            <Mail
              width={15}
              height={15}
              className="text-neutral-600 dark:text-neutral-400"
            />
            <p className="text-neutral-600  dark:text-neutral-400">
              Email
            </p>
          </div>
          <div className="text-neutral-800 flex-1 text-sm md:text-md dark:text-neutral-200">
            <Link href={"mailto:hirich.oussama@gmail.com"}
          className="text-sm md:text-md">
            hirich.oussama@gmail.com
          </Link>
          </div> 
          <div>
            <Button
              variant="ghost"
              className="hover:cursor-pointer"
              onClick={() => copyClipBoard("hirich.oussama@gmail.com")}
            >
              <Copy
                width={15}
                height={15}
                className="text-neutral-600 dark:text-neutral-400"
              />
            </Button>
          </div>
        </div>


        <div className="flex flex-row items-center mb-4">
          <div className="md:w-40 w-30 flex items-center gap-2">
            <LucideLinkedin
              width={15}
              height={15}
              className="text-neutral-600 dark:text-neutral-400"
            />
            <p className="text-neutral-600 dark:text-neutral-400">LinkedIn</p>
          </div>
          <Link
            href={"https://www.linkedin.com/in/oussama-hirich/"}
            target="blank"
          >
            /HIRICH Oussama
          </Link>
        </div>


        <div className="flex flex-row items-center mb-4">
          <div className="md:w-40 w-30 flex items-center gap-2">
            <Github
              width={15}
              height={15}
              className="text-neutral-600 dark:text-neutral-400"
            />
            <p className="text-neutral-600 dark:text-neutral-400">GitHub</p>
          </div>
          <Link href={"https://github.com/VerCeel"} target="blank">
            /VerCeel
          </Link>
        </div>
    </div>
  );
};

export default Contact;
