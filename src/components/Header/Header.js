import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillGithub,AiFillInstagram,AiFillLinkedin } from "react-icons/ai";
import { navVariants } from "../../utils/motion";

import {
  CloseButton,
  Container,
  Div1,
  Div2,
  Div3,
  FixedHeader,
  MenuButton,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";
import { Logo } from "./Logo";

const Header = () => {
  const [fix, setFix] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fixedHeader = () => {
      if (window.scrollY >= 392) {
        setFix(true);
      } else {
        setFix(false);
      }
    };
    window.addEventListener("scroll", fixedHeader);
    return () => window.removeEventListener("scroll", fixedHeader);
  }, []);

  return (
    <FixedHeader position={`${fix ? "sticky" : ""}`}
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    >
      <Container >

        <Div1>
          <Link href="/"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
            >
              <Logo />
              <Span>Tamjid</Span>
          </Link>
        </Div1>
        <Div2 isOpen={isOpen}>
          <li>
            <NavLink href="/#projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink href="/#tech">
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink href="/#about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink href="/#contact">
              Contact Me
            </NavLink>
          </li>
        </Div2>
        
        <Div3>
          <SocialIcons
            initial={{ opacity: 0, scale: 5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            href="https://github.com/Tamjid-Mostafa"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            initial={{ opacity: 0, scale: 5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            viewport={{ once: false, amount: 0.25 }}
            href="https://www.linkedin.com/in/tamjid-mostafa/"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
          initial={{ opacity: 0, scale: 5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          viewport={{ once: false, amount: 0.25 }}
          href="https://www.instagram.com/tamjid_mostafa/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
        {
          !isOpen ? <MenuButton onClick={() => setIsOpen(true)}>☰</MenuButton>
          : <CloseButton onClick={() => setIsOpen(false)}>✕</CloseButton>
        }
        </Div3>
      </Container>
    </FixedHeader>
  );
};

export default Header;
