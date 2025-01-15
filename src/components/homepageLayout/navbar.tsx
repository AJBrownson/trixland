"use client";
import React from "react";
import Link from "next/link";
// import { signIn } from "../../configurations/auth"

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#contact", 
    label: "Contact",
  },
  {
    href: "#sign-in",
    label: "Sign In",
  },
  {
    href: "#sign-out",
    label: "Sign Out",
  },
];


export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="bg-[#000] shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="font-bold text-lg flex items-center">
          Trixland
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#home" className="px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors">
            Home
          </Link>
          <Link href="#contact" className="px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors">
            Contact
          </Link>
          {/* <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button type="submit" className="px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors">Sign In</button>
    </form> */}
          <Link href="/signin" >
            Sign In
          </Link>
          <Link href="/signout" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
            Sign Out
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute bg-white top-full left-0 right-0 mt-2 p-4 bg-card border border-secondary rounded-lg md:hidden">
            <nav className="flex flex-col gap-2">
              {routeList.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-secondary/80 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
    </header>
  );
};