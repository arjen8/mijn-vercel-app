'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/',              label: 'Home' },
  { href: '/vragenlijsten', label: 'Vragenlijsten' },
  { href: '/dashboard',     label: 'Dashboard' },
  { href: '/contact',       label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-based-700">
          <span className="bg-based-700 text-white text-xs font-black px-1.5 py-0.5 rounded">B</span>
          BASED
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'bg-based-50 text-based-700'
                    : 'text-slate-600 hover:text-based-700 hover:bg-slate-50'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-based-700 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-based-800 transition-colors"
          >
            Demo aanvragen
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          aria-label="Menu openen"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === href
                  ? 'bg-based-50 text-based-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-based-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center"
          >
            Demo aanvragen
          </Link>
        </div>
      )}
    </header>
  );
}
