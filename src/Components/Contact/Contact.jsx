import React from 'react';
import './Contact.css';
import contactBg from '../../Assets/NavigationPics/contact-bg.png'; // temporary bg image

function Contact() {
    return (
        <div className="contact-page">
            {/* HERO with background + yellow shape */}
            <section
                className="contact-hero"
                style={{backgroundImage: `url(${contactBg})`}}
            >
                <div className="contact-yellow"/>

                <div className="contact-content">
                    <h1 className="contact-title">CONTACT US</h1>
                    <p className="contact-subtitle">
                        Trusted Home Improvement <br/>
                        Solutions for Suffolk County
                    </p>

                    <p className="contact-blurb">
                        Have questions or ready to start <br/>
                        your project? Reach out today and <br/>
                        our licensed team will be happy <br/>
                        to provide a free consultation, <br/>
                        discuss your ideas, and guide <br/>
                        you through the next steps.
                    </p>
                </div>
            </section>

            {/* DETAILS */}
            <section className="contact-info">
                <p className="contact-intro">
                    Feel free to use our email to inquire any questions or request.
                    Old-fashioned phone calls or text message work too.
                </p>

                {/* Phone */}
                <div className="contact-row">
          <span className="ci-icon">
            {/* Phone circle */}
              <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" fill="none" stroke="#F5D014" strokeWidth="2"/>
              <path
                  d="M15.5 16.5c-2.9-1-5.1-3.2-6.1-6.1l2.1-2.1c.2-.2.2-.6 0-.9L9.1 5.1c-.2-.2-.6-.2-.9 0L6.4 6.8c-.3.3-.5.8-.4 1.2c.9 4 4 7.1 7.9 8c.5.1 1-.1 1.3-.4l1.7-1.8c.2-.2.2-.6 0-.8l-2.3-2.3c-.2-.2-.6-.2-.8 0l-2 2z"
                  fill="#F5D014"/>
            </svg>
          </span>
                    <a className="ci-text" href="tel:6319257506">631.925.7506</a>
                </div>

                {/* Email */}
                <div className="contact-row">
          <span className="ci-icon">
            {/* Envelope */}
              <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#F5D014" strokeWidth="2"/>
              <path d="M4 7l8 6l8-6" fill="none" stroke="#F5D014" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
                    <a className="ci-text" href="mailto:donaldgooddeals@gmail.com">donaldgooddeals@gmail.com</a>
                </div>

                {/* Address */}
                <div className="contact-row">
  <span className="ci-icon">
    {/* Map pin */}
      <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s7-6.3 7-12a7 7 0 10-14 0c0 5.7 7 12 7 12z" fill="#F5D014"/>
      <circle cx="12" cy="10" r="3" fill="#fff"/>
    </svg>
  </span>
                    <div className="ci-text">
                        17 Croley St<br/>
                        Huntington, NY 11743
                    </div>
                </div>

            </section>

        </div>
    );
}

export default Contact;
