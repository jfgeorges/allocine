import React from "react";
import Logo from "./Logo";
import allocineLogo from "../assets/img/allocine_logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div class="container">
          <Logo url={allocineLogo} />
        </div>
      </header>
    );
  }
}

export default Header;
