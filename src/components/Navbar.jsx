"use client";

import { navItems } from "@/lib/constaints";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import * as motion from "motion/react-client";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      {/* ================== TOP BAR ================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-50 flex items-center justify-between h-14">
          {/* Logo */}
          <h1 className="text-2xl font-black font-heading text-primary">
            MyGym
          </h1>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary px-3 py-1 text-md font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center space-x-2">
            <ThemeToggle />
            <Button className="font-semibold">Join Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-foreground"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ================== MOBILE MENU ================== */}
      <div
        className={`
          sm:hidden absolute top-14 left-0 right-0 z-40
          bg-background border-t border-border
          transition-all duration-300 ease-in-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <div className="flex flex-col items-center text-center px-6 py-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-semibold text-foreground hover:text-primary active:text-primary  focus-visible:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <ThemeToggle />

          <Button className="w-full max-w-xs font-semibold">Join Now</Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
