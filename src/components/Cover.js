import React from "react";

class Cover extends React.Component {
  render() {
    return <img alt="Cover" className={"cover"} src={this.props.url} />;
  }
}

export default Cover;
