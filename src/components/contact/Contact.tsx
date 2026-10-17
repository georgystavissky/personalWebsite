"use client";
import { BsTelegram } from "react-icons/bs";
import "./contact.scss";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import SetkaLogo from "@/lib/img/setka.png";
import { profile } from "@/data/profile";

const Contact = () => {
  const { contact } = profile;

  const handleEmail = () => {
    window.location.href = `mailto:${contact.emailUser}@${contact.emailDomain}`;
  };

  return (
    <section id="contact">
      <h2 className="contact-title reveal">
        {contact.title}
        <br />
        <em>{contact.accent}</em>
      </h2>
      <p className="contact-body reveal">{contact.body}</p>
      <div className="contact-actions reveal">
        <a
          href={contact.telegram}
          className="btn-white"
          target="_blank"
          style={{ gap: "0.5rem" }}
        >
          <BsTelegram /> Telegram
        </a>
        <a onClick={handleEmail} className="btn-ghost-white">
          <IoMdMail /> Send an email
        </a>

        <a
          href={contact.setka}
          target="_blank"
          className="btn-ghost-white"
          style={{ gap: "0.7rem" }}
        >
          <Image src={SetkaLogo} height={20} alt="setka logo" /> Setka
        </a>
      </div>
    </section>
  );
};

export default Contact;
