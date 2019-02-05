import React from "react";
import Logo from "./Logo";
import allocineLogo from "../assets/img/allocine_logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo url={allocineLogo} />
      </header>
    );
  }
}

export default Header;
