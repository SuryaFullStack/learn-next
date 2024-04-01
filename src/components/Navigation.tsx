"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none gap-5">
      <Link
        href="/"
        className={pathname === "/" ? "font-bold text-amber-500" : ""}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={pathname === "/about" ? "font-bold text-amber-500" : ""}
      >
        About
      </Link>
      <Link
        href="/blog"
        className={pathname === "/blog" ? "font-bold text-amber-500" : ""}
      >
        Blog
      </Link>
      <Link
        href="/products"
        className={
          pathname.includes("/products") ? "font-bold text-amber-500" : ""
        }
      >
        Products
      </Link>
      <Link
        href="/dashboard"
        className={
          pathname.includes("/dashboard") ? "font-bold text-amber-500" : ""
        }
      >
        Dashboard
      </Link>
    </div>
  );
}

export default Navigation;
