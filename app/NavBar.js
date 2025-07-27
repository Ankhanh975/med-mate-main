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
      <div className="ml-auto flex items-center gap-4">
        {/* Language Button */}
        <button
          className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-100 border border-gray-200 text-sm"
          title="Change language"
        >
          <span role="img" aria-label="globe">🌐</span> EN
        </button>
        {/* Notification Button */}
        <button
          className="relative p-2 rounded-full hover:bg-gray-100 border border-gray-200"
          title="Notifications"
        >
          <span role="img" aria-label="bell">🔔</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </button>
        {/* User Panel */}
        <div className="relative group">
          <button className="w-9 h-9 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center text-lg focus:outline-none">
            SC
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
            <div className="p-4 border-b border-gray-100">
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-xs text-gray-500">Year 4</div>
            </div>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Settings</button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Log out</button>
          </div>
        </div>
      </div>
    </nav>
  );
} 