import React from "react";
import "./contact.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="images/phone.png" alt="" className="c-icon" />
              +2347014613781, +2348166565217
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="images/email.png" alt="" />
              emekakingsley1804@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="images/address.png" alt="" />
              20, Karaole Estate Ogba-Ikeja,Lagos,Nigeria
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Do you like my projects portfolio and have a job for me?</b>Mail me immediately.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
