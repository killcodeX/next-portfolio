import React, { useState } from "react";
import Image from "next/image";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
      e.preventDefault();
    alert('Message Sent :)')
  };

  return (
    <section className="section heading-section" id="contact-section">
      <h2 className="mb-4">Contacts</h2>
      <div className="container">
        <div className="row mobile-row-reverse">
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  placeholder="Full Name"
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  aria-describedby="name"
                  onChange={() => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  placeholder="Email Address"
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  aria-describedby="emailHelp"
                  onChange={() => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  {"I'll never share your email with anyone else."}
                </div>
              </div>
              <div className="mb-3">
                <input
                  placeholder="Your Message"
                  type="textarea"
                  className="form-control"
                  id="message"
                  value={message}
                  aria-describedby="emailHelp"
                  onChange={() => setMessage(e.target.value)}
                />
              </div>
              <button type='submit' className='contact-btn'>Send Message</button>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="unset-img img-contact">
              <Image
                src={"/contact-us.png"}
                alt="contact"
                layout="fill"
                className="custom-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
