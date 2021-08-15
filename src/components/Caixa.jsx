import React, { Component } from "react";
import "../css/caixa.css";

class Caixa extends Component {
  render() {
    return <button className="caixa">
        {this.props.dia}
    </button>;
  }
}

export default Caixa;
