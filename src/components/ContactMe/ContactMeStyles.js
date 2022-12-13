import { motion } from "framer-motion";
import styled from "styled-components";

export const Boxes = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;
export const StyledContactForm = styled(motion.div)`
  width: 600px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #00dbd8;
      &:focus {
        border: 2px solid #b133ff;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      margin-bottom: 2rem;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid #00DBD8;
      }
    }
    label {
      margin-top: 1rem;
      max-width: 800px;
      font-weight: 300;
      font-size: 18px;
      line-height: 32px;
      color: rgba(255, 255, 255, 0.75);

      @media ${(props) => props.theme.breakpoints.md} {
        max-width: 672px;
        font-size: 16px;
        line-height: 25px;
      }

      @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 14px;
        line-height: 22px;
      }
    }
    input[type="submit"] {
      width: ${({ alt }) => (alt ? "150px" : "262px")};
      height: ${({ alt }) => (alt ? "52px" : "64px")};
      border-radius: 50px;
      border: none;
      font-size: ${({ alt }) => (alt ? "20px" : "24px")};
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: ${({ alt, form }) => (alt || form ? "0" : "0 0 80px")};
      color: #fff;
      background: ${({ alt }) =>
        alt
          ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)"
          : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"};
      cursor: pointer;
      transition: 0.5s ease;
      position: relative;
      overflow: hidden;
      opacity: ${({ disabled }) => (disabled ? ".5" : "1")};

      @media ${(props) => props.theme.breakpoints.md} {
        width: ${({ alt }) => (alt ? "150px" : "184px")};
        height: ${({ alt }) => (alt ? "52px" : "48px")};
        font-size: ${({ alt }) => (alt ? "20px" : "16px")};
        margin-bottom: ${({ alt }) => (alt ? "0" : "64px")};
      }

      @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
        height: 32px;
        font-size: 14px;
        margin-bottom: ${({ alt }) => (alt ? "0" : "32px")};
      }
    }
  }
`;
