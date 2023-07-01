import { motion } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: grid;
  max-width: 1280px;
  width: 100%;
  margin: auto;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: ${({ isOpen }) => (isOpen ? "repeat(2, 60px)" : "")};
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const MenuButton = styled.button`
  display: none;
  cursor: pointer;
  background: transparent;
  border: 0;
  color: #fff;
  font-size: 3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;
export const CloseButton = styled.button`
 display: none;
  cursor: pointer;
  background: transparent;
  border: 0;
  color: #fff;
  font-size: 3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`
export const FixedHeader = styled(motion.div)`
  position: ${(props) => props.position};
  width: 100%;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid;
  border-image: ${(props) =>
    props.position
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  border-image-slice: 1;

  background-color: ${(props) =>
    props.position ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)"};
  backdrop-filter: ${(props) =>
    props.position
      ? "blur(5px) saturate(200%) contrast(100%) brightness(80%)"
      : ""};
  -webkit-backdrop-filter: ${(props) =>
    props.position
      ? "blur(5px) saturate(200%) contrast(100%) brightness(80%)"
      : ""};
  transition: ${(props) => (props.position ? "all 0.3s ease-in-out" : "")};
`;
export const Span = styled.span`
  font-size: 2rem;
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 /4;
  display: flex;
  item-align: center;
  justify-content: space-around;
  transition: 0.3s ease-in;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 2 / 3 / 3 / 5;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    z-index: 10;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 3 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled(motion.a)`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
