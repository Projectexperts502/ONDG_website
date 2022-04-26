import styles from "../styles/Header/Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.hero}>
          <div className={` container ${styles.grid}`}>
            <div className={styles.slogan}>
              <h1>Groceries Household items</h1>
              <p>
                Delivery from your all favorite supermarkets, mini markets and
                convenience stores
              </p>
            </div>

            <div className={styles.advertise}>
              <p>Want to be notified on launch?</p>
              <div className={styles.email_input}>
                <div className="input">
                  <input placeholder="What's your email?" />
                </div>
              </div>
            </div>

            <div className={styles.hero_image}>Image</div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
