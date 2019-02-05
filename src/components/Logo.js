import React from "react";

class Logo extends React.Component {
  render() {
    return <img alt="logoAllocine" className={"logo"} src={this.props.url} />;
  }
}

export default Logo;
