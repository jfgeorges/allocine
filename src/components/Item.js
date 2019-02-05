import React from "react";

class Item extends React.Component {
  render() {
    let textClass = "itemText";
    if (this.props.bold) {
      textClass = textClass + " bold";
    }

    return (
      <div className={"info"}>
        <span className={"itemLabel"}>{this.props.label}</span> <span className={textClass}>{this.props.text}</span>
      </div>
    );
  }
}

export default Item;
