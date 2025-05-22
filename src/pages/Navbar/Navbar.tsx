import React, { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/icons/Logo.svg";
import { useNavigate } from "react-router";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [railStyle, setRailStyle] = useState({ width: 0, left: 0 });
  const itemRefs = useRef<Record<string, HTMLLIElement>>({});

  const navigate = useNavigate();

  const navItems = [
    { text: "Home", value: "home" },
    { text: "About Us", value: "about-us" },
    { text: "Departments", value: "departments" },
    { text: "Services", value: "services" },
    { text: "Branches", value: "branches" },
    { text: "Career", value: "career" }
  ];
 
  useEffect(() => {
    const currentEl = itemRefs.current[activeLink];
    if (currentEl) {
      setRailStyle({
        width: currentEl.offsetWidth,
        left: currentEl.offsetLeft,
      });
    }
  }, [activeLink]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} onClick={()=>navigate("/")}/>
      </div>

      <ul className={styles.navLinks}>
        <span
          className={styles.railTop}
          style={{ width: railStyle.width, left: railStyle.left }}
        />
        <span
          className={styles.railBottom}
          style={{ width: railStyle.width, left: railStyle.left }}
        />
        {navItems.map((item, ind) => (
          <li
            key={ind}
            ref={(el) => {
              if (el) itemRefs.current[item["text"]] = el;
            }}
          >
            <Link to={`${item["value"]}`} smooth={true} duration={500}
              className={activeLink === item["text"] ? styles.active : ""}
              onClick={() => {setActiveLink(item["text"]);
                navigate("/")}}>{item["text"]}</Link>
          </li>
        ))}
        <li>
          <button className={styles.contactBtn} onClick={() => navigate('/contact-us')}>Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
