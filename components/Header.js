import styles from "../styles/Header/Header.module.css";
import { IoMailOutline } from "react-icons/io5";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.hero}>
          <div className={` container ${styles.grid}`}>
            <div className={styles.slogan}>
              <h1>Groceries Household items</h1>
              <p>
              “Delivering customers joy, saving customers money and time”
              </p>
            </div>

            <div className={styles.advertise}>
              <div className={styles.notify}>
              <p>Want to be notified on launch?</p>
              <form className={styles.email_input}>
                <div className={`input ${styles.input}`}>
                  <input placeholder="What's your email?" type="email"/>
                  <IoMailOutline size={18} color="var(--black-color)" className={styles.email_icon} />
                  
                </div>
                <button className="button">Send</button>
              </form>
              </div>

              <div className={styles.store_badges}>
                  <div className={styles.badge}>
                      <img src="/images/play_store_badge.svg" alt="play_store_badge"/>
                  </div>
                  <div className={styles.badge} style={{padding:"5px"}}>
                      <img src="/images/app_store_badge.svg" alt="app_store_badge"/>
                  </div>
              </div>
            </div>

            <div className={styles.hero_image}>
                <div>
                    <img src="/images/ondg_iphone_ss.png"/>
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
