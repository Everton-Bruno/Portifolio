"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export function Header() {
  const links: NavLink[] = [
    { label: "Projetos", href: "/projetos" },
    {
      label: "Linkedin",
      href: "https://www.linkedin.com/in/evertonbruno006/",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/Everton-Bruno",
      external: true,
    },
    {
      label: "Contato",
      href: "https://api.whatsapp.com/send?phone=5511952053101",
      external: true,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-6 md:px-20 py-3">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo do site"
            aria-label="Página Inicial"
            priority={true}
            width={60}
            height={60}
            className="rounded-full "
          />
        </Link>

        <nav className="hidden md:flex gap-6" aria-label="Menu Principal">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#87CEEB] transition-colors">
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#87CEEB] transition-colors">
                {link.label}
              </Link>
            )
          )}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          className=" md:hidden relative flex flex-col justify-between items-center border p-3 rounded-md gap-1">
          <span
            className={`block h-1 w-8 bg-white rounded transform transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}></span>
          <span
            className={`block h-1 w-8 bg-white rounded ${
              open ? "opacity-0" : "opacity-100"
            }`}></span>
          <span
            className={`block h-1 w-8 bg-white rounded transform transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}></span>
        </button>
      </div>

      {/*Menu Responsivo*/}

      {open ? (
        <nav className="flex flex-col md:hidden items-center justify-center mt-6">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:bg-[#87CEEB] hover:text-black w-full text-center p-5 rounded-md">
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:bg-[#87CEEB] hover:text-black w-full text-center p-5 rounded-md">
                {link.label}
              </Link>
            )
          )}
        </nav>
      ) : (
        ""
      )}
    </header>
  );
}
