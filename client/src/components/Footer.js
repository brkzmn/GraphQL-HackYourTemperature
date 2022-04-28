import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer-container row">
      <div className="col l6 s12">
        <ul>
          <li>{"\u00a9"} Copyright 2022 - brkzmn</li>
        </ul>
      </div>
      <div className="col l6 s12">
        <ul className="contact-wrapper">
          <li>
            <a
              href="https://www.linkedin.com/in/burak-%C3%B6zmen/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/brkzmn"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
