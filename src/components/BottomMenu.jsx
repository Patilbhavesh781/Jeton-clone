import React, { useState } from "react";
import "../styles/BottomMenu.css";

const menuItems = [
  { label: "Home", icon: "🏠", href: "/" },
  {
    label: "Personal",
    icon: "👤",
    drawer: [
      { label: "Jeton Card", href: "/jeton-card" },
      { label: "Fees", href: "/fees" },
    ],
  },
  { label: "Business", icon: "💼", href: "https://www.jetonbank.com", external: true },
  {
    label: "Company",
    icon: "🏢",
    drawer: [
      { label: "About", href: "/about" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Partnerships", href: "/partnerships" },
    ],
  },
];

export default function BottomMenu() {
  const [openDrawer, setOpenDrawer] = useState(null);

  return (
    <nav className="_menu" data-variant="drawers">
      <ul className="menu-bar">
        {menuItems.map((item, idx) => (
          <li key={idx} className="menu-item">
            {item.drawer ? (
              <>
                <button
                  className="_menu-button"
                  onClick={() => setOpenDrawer(openDrawer === idx ? null : idx)}
                  aria-expanded={openDrawer === idx}
                >
                  {item.icon} <span>{item.label}</span>
                  <span className="_icon">▼</span>
                </button>
                {openDrawer === idx && (
                  <div className="_menu-drawer">
                    <ul>
                      {item.drawer.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <a href={sub.href} className="drawer-link">
                            <div className="dot"></div>
                            <div className="label">{sub.label}</div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <a
                href={item.href}
                className="_menu-button"
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.icon} <span>{item.label}</span>
              </a>
            )}
          </li>
        ))}
      </ul>

      {openDrawer !== null && <div className="shade" onClick={() => setOpenDrawer(null)} />}
    </nav>
  );
}
