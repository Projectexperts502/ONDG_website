import styles from "../styles/Navbar/Narbar.module.css";
import { useState } from "react";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <nav className={styles.D_navbar}>
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.logo}>
              <img src="/images/ondg_logo_white.png" />
            </div>

            <div
              className={
                openNav ? `${styles.links} ${styles.active}` : `${styles.links}`
              }
            >
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* HAMBURGER */}
            <div class={styles.hamburger} onClick={() => setOpenNav(!openNav)}>
              <input class={styles.checkbox} type="checkbox" />
              <div class={styles.hamburger_lines}>
                <span class={`${styles.line} ${styles.line1}`}></span>
                <span class={`${styles.line} ${styles.line2}`}></span>
                <span class={`${styles.line} ${styles.line3}`}></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
