import styles from "../styles/AboutUs/AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className={styles.aboutUs}>
            <div className="row direction">
              <div className="col-lg-6">
                <div className={styles.text}>
                  <h1>About us</h1>
                  <p>
                    Ondg is an on demand delivery app that is on a mission to
                    transform the on demand delivery industry by being a
                    customer focused on demand delivery app.
                  </p>
                  <p>
                    With Ondg you can order groceries and household items from
                    all your local and favourite supermarkets, mini markets and
                    convenient stores (corner shops).
                  </p>
                  <p className={styles.delivered_text}>
                      See it, order it and get it delivered!
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.delivery_image}>
                <img src="/images/delivery_boy.svg" alt="delivery_boy"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AboutUs;
