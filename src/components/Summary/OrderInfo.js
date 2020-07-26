import React, { Component } from "react";

import UserData from "./UserData";

class OrderInfo extends Component {
  state = {
    cashbox: false,
  };

  toCashbox = () => {
    this.setState({
      cashbox: true,
    });
  };

  render() {
    return this.state.cashbox ? (
      <UserData />
    ) : (
      <>
        <div class="orderInfo">
          <h1>Podsumowanie zamówienia:</h1>
          <h3>Typ koszulki: {this.props.frontOrBack}</h3>
          <button>Potwierdź</button>
          <button onClick={() => this.props.editStep(1)}>Edytuj</button>
          <h3>Step2</h3>
          <button>Potwierdź</button>
          <button onClick={() => this.props.editStep(2)}>Edytuj</button>
          <h3>Step3</h3>
          <button>Potwierdź</button>
          <button onClick={() => this.props.editStep(3)}>Edytuj</button>
          <button class="toCashbox" onClick={this.toCashbox}>
            Do kasy
          </button>
        </div>
      </>
    );
  }
}

export default OrderInfo;
