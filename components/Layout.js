import React from "react";
import {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

const Layout = ({children}) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    let localTheme = window.localStorage.getItem("theme");
    setTheme(localTheme);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className={`${styles.mainContent} ${theme}`}>
      <div className={styles.titleBar}>
        <Nav />
        <div>
          <input type="checkbox" className={styles.themeCheck} id="themeToggle" />
          <label
            htmlFor="themeToggle"
            className={styles.themeToggler}
            onClick={switchTheme}
            theme={theme}>
            <FontAwesomeIcon icon={faMoon} className={styles.faMoon} />
            <FontAwesomeIcon icon={faSun} className={styles.faSun} />
            <div className={styles.toggleBall}></div>
          </label>
        </div>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
