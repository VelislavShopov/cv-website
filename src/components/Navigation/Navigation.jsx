import { useState, useEffect } from "react";
import classes from "./Navigation.module.css";

export default function Navigation() {
  const [activePartPage, setActivePartPage] = useState("home");
  useEffect(() => {
    if (window.scrollY >= 3286) {
      setActivePartPage("contacts");
    } else if (window.scrollY >= 900) {
      setActivePartPage("aboutme");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 3286) {
        setActivePartPage("contacts");
      } else if (window.scrollY >= 900) {
        setActivePartPage("aboutme");
      } else {
        setActivePartPage("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={classes.nav}>
      <h3>Velislav Shopov</h3>
      <ul className={classes.ul}>
        <li>
          <a
            href="#home"
            onClick={() => setActivePartPage("home")}
            className={activePartPage === "home" ? classes.active : classes.a}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setActivePartPage("aboutme")}
            className={
              activePartPage === "aboutme" ? classes.active : classes.a
            }
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            onClick={() => setActivePartPage("contacts")}
            className={
              activePartPage === "contacts" ? classes.active : classes.a
            }
          >
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
}
