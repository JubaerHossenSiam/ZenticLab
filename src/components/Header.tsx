"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./designs/Logo";

const groups = [
  {
    label: "Services",
    href: "/services",
    items: [
      {
        label: "E-Commerce Website",
        href: "/services?tab=ecommerce",
        description: "Sell your products online",
        icon: "cart",
      },
      {
        label: "Business Website",
        href: "/services?tab=business",
        description: "Show your business and get more leads",
        icon: "business",
      },
    ],
  },
  {
    label: "Hosting & Care",
    href: "/hosting-care",
    items: [
      {
        label: "Domain & Hosting Plans",
        href: "/domain-hosting-plans",
        description: "Keep your website online and fast",
        icon: "hosting",
      },
      {
        label: "Content Update Plans",
        href: "/content-update-plans",
        description: "Text, photo and product changes",
        icon: "edit",
      },
      {
        label: "Security & Maintenance Plans",
        href: "/security-maintenance-plans",
        description: "Updates, backups and security checks",
        icon: "security",
      },
    ],
  },
];

function Icon({ name }: { name: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "cart" && (
        <>
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
          <path d="M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L21 7H6" />
        </>
      )}
      {name === "business" && (
        <>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
        </>
      )}
      {name === "hosting" && (
        <>
          <rect x="2" y="3" width="20" height="8" rx="2" />
          <rect x="2" y="13" width="20" height="8" rx="2" />
          <path d="M6 7h.01M6 17h.01" />
        </>
      )}
      {name === "edit" && (
        <>
          <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5zM15 5l4 4" />
        </>
      )}
      {name === "security" && (
        <>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-5" />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className={`site-header${open ? " menu-open" : ""}`}>
      <div className="header-inner">
        <Link
          href="/"
          aria-label="Zentic Lab home"
          className="site-logo"
          onClick={close}
        >
          <Logo />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="m6 6 12 12M6 18 18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <nav
          id="main-navigation"
          aria-label="Main"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              close();
              document
                .querySelector<HTMLButtonElement>(".menu-toggle")
                ?.focus();
            }
          }}
        >
          {groups.map((group) => (
            <div className="zl-dd" key={group.href}>
              <Link
                href={group.href}
                className="zl-nav"
                aria-current={pathname === group.href ? "page" : undefined}
                data-active={
                  pathname === group.href ||
                  group.items.some((item) => item.href === pathname)
                    ? "true"
                    : undefined
                }
                onClick={close}
              >
                {group.label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5 8h14l-7 9z" />
                </svg>
              </Link>
              <div className="zl-dd-menu">
                <div className="dropdown-inner">
                  {group.items.map((item) => (
                    <Link
                      className="zl-dd-item"
                      href={item.href}
                      key={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      onClick={close}
                    >
                      <Icon name={item.icon} />
                      <span className="dropdown-copy">
                        <span>{item.label}</span>
                        <small>{item.description}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link
            className="zl-nav"
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            onClick={close}
          >
            About Us
          </Link>
          <Link
            className="zl-nav"
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            onClick={close}
          >
            Contact
          </Link>
        </nav>
        <a
          className="zl-btn-outline header-whatsapp"
          href="https://wa.me/8801814090134"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m3.5 20.5 1.3-4.2A8.5 8.5 0 1 1 8 19.3l-4.5 1.2z" />
            <path
              transform="translate(6.72 6.72) scale(0.44)"
              fill="currentColor"
              stroke="none"
              d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
            />
          </svg>
          Message Us on WhatsApp
        </a>
      </div>
    </header>
  );
}
