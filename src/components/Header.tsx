"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/cjm-mark-dark.png"
            alt="CJM Engenharia e Limpeza de Coifas"
            width={215}
            height={100}
            priority
            className="h-10 w-auto"
          />
          <span className="hidden text-xs font-normal uppercase tracking-widest text-brand-steel-light sm:inline xl:hidden">
            Engenharia e Limpeza de Coifas
          </span>
        </Link>

        <nav className="hidden gap-4 text-sm font-medium xl:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-green">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/solicitar-orcamento"
          className="hidden rounded-sm bg-brand-green px-4 py-2 text-sm font-semibold uppercase tracking-wide transition hover:bg-brand-green-dark xl:inline-block"
        >
          Solicitar orçamento
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-sm font-semibold uppercase tracking-wide xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 text-sm xl:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 transition hover:text-brand-green"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/solicitar-orcamento"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm bg-brand-green px-4 py-2 text-center font-semibold uppercase tracking-wide"
          >
            Solicitar orçamento
          </Link>
        </nav>
      )}
    </header>
  );
}
