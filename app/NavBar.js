"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/record-new-case", label: "Record New Case" },
    { href: "/soap-note", label: "SOAP Note" },
    { href: "/case-feedback", label: "Case Feedback" },
    { href: "/ai-assistant", label: "AI Assistant" },
    { href: "/case-library", label: "Case Library" },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center gap-8 px-8 h-16 bg-white border-b border-gray-200 shadow-sm">
      <span className="font-bold text-xl tracking-wide text-blue-600 mr-8 select-none">
        MedMate
      </span>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`nav-link${pathname === href ? " nav-link-active" : ""}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
} 