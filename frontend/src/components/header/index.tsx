"use client";

import Image from "next/image";
import Link from "next/link";

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

  return (
    <header className="w-full px-6 md:px-20 py-3">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo do site"
            priority={true}
            width={60}
            height={60}
            className="rounded-full "
          />
        </Link>

        <nav className="hidden md:flex gap-6">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#87CEEB]">
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#87CEEB]">
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
