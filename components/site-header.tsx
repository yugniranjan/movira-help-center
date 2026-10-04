"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./icons";
import { SearchBox } from "./search-box";

const adminUrl = process.env.NEXT_PUBLIC_ADMIN_APP_URL || "https://app.movira360.com";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const showHeaderSearch = pathname !== "/";
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Movira Help Center home">
          <span className="brand-mark"><Image src="/movira360-logo.png" alt="" width={38} height={38} priority /></span>
          <span className="brand-copy"><strong>Movira360</strong><span>Help Center</span></span>
        </Link>
        {showHeaderSearch && <div className="header-search"><SearchBox compact /></div>}
        <nav className={open ? "header-nav is-open" : "header-nav"} aria-label="Primary navigation">
          <Link href="/categories">Browse guides</Link>
          <a href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@movira360.com"}`}>Contact support</a>
          <a className="header-login" href={adminUrl} target="_blank" rel="noreferrer">Open Movira <Icon name="external" size={15} /></a>
          {showHeaderSearch && <div className="mobile-header-search"><SearchBox compact /></div>}
        </nav>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
