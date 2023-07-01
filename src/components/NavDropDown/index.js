import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
} from "./NavDropDown";

const NavDropDown = (props) => (
  <DropDownContainer active={props.isOpen}>
    <DropDownItem>
      <DropDownIcon>
        <AiFillPhone />
        <AiOutlineMail />
        <FaLocationArrow />
      </DropDownIcon>
      <DropDownItemTitle>Hello wordl</DropDownItemTitle>
      <DropDownTextContainer>Hello wordl</DropDownTextContainer>
      <DropDownItemDesc>asdasdasdasd</DropDownItemDesc>
    </DropDownItem>
  </DropDownContainer>
);

export default NavDropDown;
