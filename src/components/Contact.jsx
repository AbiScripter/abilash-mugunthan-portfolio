import { IconMail, IconMapSearch } from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Don't be shy! Hit me up! 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <IconMapSearch width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Thrissur, Kerala</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <IconMail width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:abilashb2000@gmail@gmail.com">
                    abilashb2000@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //!implement this form later----------------------------------------- */}
        {/* <form
          action="https://formsubmit.co/abimugunthan2000@gmail.com"
          method="POST"
        >
          <input
            type="text"
            placeholder="Name"
            required
            class="contact-anime"
          />
          <input
            type="email"
            placeholder="Email"
            required
            class="contact-anime"
          />
          <input
            type="hidden"
            name="_next"
            value="https://abilash.pages.dev/thanks.html"
            class="contact-anime"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            placeholder="Message"
            name="message"
            id="message"
            cols="30"
            rows="10"
            class="contact-anime"
          />
          <button class="contact-btn contact-anime" type="submit">
            Send
          </button>
        </form> */}
      </section>
    </>
  );
}

export default Contact;
