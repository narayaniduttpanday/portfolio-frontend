import { useState } from "react";
import { profile } from "../profile";

const links = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">{profile.name.split(" ")[0]}<span>.</span></a>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
        <nav className={open ? "links open" : "links"}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
