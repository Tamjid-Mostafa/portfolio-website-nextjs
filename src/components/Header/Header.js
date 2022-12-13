import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { navVariants } from "../../utils/motion";

import {
  Container,
  Div1,
  Div2,
  Div3,
  FixedHeader,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";
import { Logo } from "./Logo";

const Header = () => {
  const [fix, setFix] = useState(false);

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
      <Container>
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
        <Div2>
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
            <NavLink href="/#contact">
              Contact Me
            </NavLink>
          </li>
        </Div2>
        <Div3>
          <SocialIcons
            initial={{ opacity: 0, scale: 0.5 }}
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
            initial={{ opacity: 0, scale: 0.5 }}
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
          {/* <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem"/>
      </SocialIcons> */}
        </Div3>
      </Container>
    </FixedHeader>
  );
};

export default Header;
