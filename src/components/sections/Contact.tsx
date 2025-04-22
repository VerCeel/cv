import { Github, LucideLinkedin, Mail, PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="cursor-default">
      <div className="mb-16">
        <h1 className="pb-8 font-medium text-neutral-800 dark:text-neutral-200">
          Contact
        </h1>
        <div className="flex flex-row pb-8">
          <div className="w-40 flex items-center gap-2">
          <PhoneIcon width={15} height={15}  className="text-neutral-600 dark:text-neutral-400"/>
            <p className="text-neutral-600 dark:text-neutral-400">
              Phone
            </p>
          </div>
          <div className="flex-1  text-neutral-800 dark:text-neutral-200">
            +33 7 66 49 91 36
          </div>
        </div>

        <div className="flex flex-row pb-8">
          <div className="w-40 flex items-center gap-2">
          <Mail width={15} height={15} className="text-neutral-600 dark:text-neutral-400"/>
            <p className="text-neutral-600 dark:text-neutral-400">
              Email
            </p>
          </div>
          <Link href={'mailto:hirich.oussama@gmail.com'}>hirich.oussama@gmail.com</Link>
        </div>

        <div className="flex flex-row pb-8">
          <div className="w-40 flex items-center gap-2">
            <LucideLinkedin width={15} height={15}  className="text-neutral-600 dark:text-neutral-400"/>
            <p className="text-neutral-600 dark:text-neutral-400">
            LinkedIn
            </p>
          </div>
          <Link href={'https://www.linkedin.com/in/oussama-hirich/'} target="blank">/HIRICH Oussama</Link>
        </div>

        <div className="flex flex-row pb-8">
          <div className="w-40 flex items-center gap-2">
            <Github width={15} height={15}  className="text-neutral-600 dark:text-neutral-400"/>
            <p className="text-neutral-600 dark:text-neutral-400">
              GitHub
            </p>
          </div>
          <Link href={'https://github.com/VerCeel'} target="blank">/VerCeel</Link>
        </div>

      </div>
    </div>
  );
};

export default Contact;
