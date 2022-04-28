import styles from "../styles/ContactUs/ContactUs.module.css";
import { IoMailOutline, IoPersonOutline, IoChatboxOutline } from "react-icons/io5";

function ContactUs() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className={styles.contactUs}>
            <div className="row direction justify-content-between">
              <div className="col-lg-4">
                <div className={styles.contact_form}>
                  <h1>Let's talk</h1>
                  <p>Ask us anything or just say hi...</p>
                  <form className={styles.form}>
                    <div className={`input ${styles.form_input}`}>
                      <input placeholder="Your Name" type="text" />
                      <IoPersonOutline
                        size={18}
                        color="var(--black-color)"
                        className={styles.form_icon}
                      />
                    </div>

                    <div className={`input ${styles.form_input}`}>
                      <input placeholder="Your Email" type="email" />
                      <IoMailOutline
                        size={18}
                        color="var(--black-color)"
                        className={styles.form_icon}
                      />
                    </div>

                    <div className={`input ${styles.form_input}`}>
                      <textarea placeholder="Your Message" type="text" cols="50" rows="4"/>
                      <IoChatboxOutline
                        size={18}
                        color="var(--black-color)"
                        className={styles.form_icon}
                      />
                    </div>

                    <div className={styles.form_button}>
                    <button className="button">Send</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
              <div className={styles.contact_image}>
                <img src="/images/contact_boy.svg" alt="contact_boy"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactUs;
