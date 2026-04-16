"use client";
import { BsTelegram } from "react-icons/bs";
import "./contact.scss";
import { Playfair_Display } from "next/font/google";
import { IoMdMail } from "react-icons/io";

const playfair = Playfair_Display({
  variable: "--playfair-font",
  subsets: ["latin"],
});
const playfair_Italic = Playfair_Display({
  variable: "--playfair-font-italic",
  subsets: ["latin"],
  style: "italic",
});

const Contact = () => {
  const handleEmail = () => {
    const user = "georgystavissky";
    const domain = "gmail.com";
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <section id="contact">
      <h2 className={`${playfair.className} contact-title reveal`}>
        Let&apos;s build something
        <br />
        <em className={`${playfair_Italic.className}`}>extraordinary.</em>
      </h2>
      <p className="contact-body reveal">
        Open to full-time roles, freelance projects, and good conversations.
      </p>
      <div className="contact-actions reveal">
        <a href="https://t.me/gestoff" className="btn-white" target="_blank">
          <BsTelegram /> Telegram
        </a>
        <a onClick={handleEmail} className="btn-ghost-white">
          <IoMdMail /> Send an email
        </a>
      </div>
    </section>
  );
};

export default Contact;
