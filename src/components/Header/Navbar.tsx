"use client";
import { Pages, Routes } from "@/constants/enums";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const links = [
    {
      id: crypto.randomUUID(),
      name: "Home",
      href: Routes.ROOT,
    },
    {
      id: crypto.randomUUID(),
      name: "Projects",
      href: Routes.PROJECTS,
    },
    {
      id: crypto.randomUUID(),
      name: "Contact Us",
      href: Pages.CONTACT,
    },
  ];
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex justify-center items-center gap-4">
        {links.map((link) => {
          const isPathname =
            link.href === Routes.ROOT
              ? pathname === "/"
              : pathname === `/${link.href}`;
          return (
            <li
              key={link.id}
              className="relative group font-semibold text-[16px]"
            >
              <Link
                href={`/${link.href}`}
                className={`${
                  isPathname ? "text-primary" : "hover:text-primary"
                } transition-colors duration-300`}
              >
                {link.name}
              </Link>
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-primary w-[70%] transition-transform duration-300 origin-left rounded-e-full ${
                  isPathname
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              ></span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
