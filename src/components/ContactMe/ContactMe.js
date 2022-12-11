import React, { useState, useRef, useEffect } from "react";

import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { StyledContactForm } from "./ContactMeStyles";
import { TypingText } from "../../utilities/TypingTexts";
import { fadeIn, staggerContainer, textVariant, slideIn } from "../../utilities/motion";

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_6yp6zr4",
          "template_5wi77oe",
          form.current,
          "9vpJJ_hXU6Zqbm0Xm"
        )
        .then(
          (result) => {
            toast.success('Message Sent Successfully');
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <Section
    id="contact"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <SectionDivider />
    <br />
    <SectionTitle main><TypingText title="| Contact Me" /></SectionTitle>
      <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
    </Section>
  );
};

export default ContactMe;
