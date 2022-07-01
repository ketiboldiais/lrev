import React from "react";
import {useState, useEffect} from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

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
        <div className={styles.toggleWrapper}>
          <button onClick={switchTheme}>
            {theme === "light" ? "light mode" : "dark mode"}
          </button>
          {/* <input type="checkbox" className="dn" id="dn" onClick={switchTheme} />
          <label htmlFor="dn" className={styles.toggle} theme={theme}>
            <span className={styles.toggleHandler}>dark mode</span>
          </label> */}
        </div>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
