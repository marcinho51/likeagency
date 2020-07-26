import React, { Component } from "react";

import UserData from "./UserData";

class OrderInfo extends Component {
  state = {
    cashbox: false,
    confirm1: false,
    confirm2: false,
    confirm3: false,
  };

  toDataEntry = () => {
    this.setState({
      cashbox: true,
    });
  };

  confirmStepOne = () => {
    this.setState((state) => ({
      confirm1: !state.confirm1,
    }));
  };

  confirmStepTwo = () => {
    this.setState((state) => ({
      confirm2: !state.confirm2,
    }));
  };

  confirmStepThree = () => {
    this.setState((state) => ({
      confirm3: !state.confirm3,
    }));
  };

  render() {
    return this.state.cashbox ? (
      <UserData />
    ) : (
      <>
        <div class="orderInfo">
          <h1>Podsumowanie zamówienia:</h1>
          <h3>Typ koszulki: {this.props.frontOrBack}</h3>
          {this.state.confirm1 ? (
            <button
              class="confirmButton"
              onClick={this.confirmStepOne}
              style={{ backgroundColor: "green" }}
            >
              Potwierdzone
            </button>
          ) : (
            <button class="confirmButton" onClick={this.confirmStepOne}>
              Potwierdź
            </button>
          )}
          <button onClick={() => this.props.editStep(1)}>Edytuj</button>
          <h3>Step2</h3>
          {this.state.confirm2 ? (
            <button
              class="confirmButton"
              onClick={this.confirmStepTwo}
              style={{ backgroundColor: "green" }}
            >
              Potwierdzone
            </button>
          ) : (
            <button class="confirmButton" onClick={this.confirmStepTwo}>
              Potwierdź
            </button>
          )}
          <button onClick={() => this.props.editStep(2)}>Edytuj</button>
          <h3>Step3</h3>
          {this.state.confirm3 ? (
            <button
              class="confirmButton"
              onClick={this.confirmStepThree}
              style={{ backgroundColor: "green" }}
            >
              Potwierdzone
            </button>
          ) : (
            <button class="confirmButton" onClick={this.confirmStepThree}>
              Potwierdź
            </button>
          )}
          <button onClick={() => this.props.editStep(3)}>Edytuj</button>
          {this.state.confirm1 && this.state.confirm2 && this.state.confirm3 && (
            <button class="toDataEntry" onClick={this.toDataEntry}>
              Dalej
            </button>
          )}
        </div>
      </>
    );
  }
}

export default OrderInfo;
