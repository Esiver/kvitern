"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ILink {
  label: string;
  href: string;
}

const Navigation = () => {
  const currentPath = usePathname();

  const listClass =
    "flex space-x-4";

  const links: ILink[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Idea",
      href: "/idea",
    },
  ];

  return (
    <nav className="text-white text-2xl font-bold">
      <div className="container mx-auto py-4">
        <Link className="text-white text-2xl font-bold" href="/">Logo</Link>
        <ul className={listClass}>
          {links.map((link, index) => (
            <li key={index} className="mr-3">
              <Link
                key={index}
                href={link.href}
                className={`${
                  link.href === currentPath ? "text-gray-600" : "text-gray-300"
                } "text-gray-300 hover:text-white`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
