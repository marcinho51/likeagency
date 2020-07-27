import React, { Component } from "react";

import UserData from "./UserData";

class OrderInfo extends Component {
  state = {
    toDataEntry: false,
  };

  toDataEntry = () => {
    this.setState({
      toDataEntry: true,
    });
  };

  render() {
    return this.state.toDataEntry ? (
      <UserData
        confirm1={this.props.confirm1}
        confirm2={this.props.confirm2}
        confirm3={this.props.confirm3}
        confirm4={this.props.confirm4}
        confirm5={this.props.confirm5}
        confirmStepOne={this.props.confirmStepOne}
        confirmStepTwo={this.props.confirmStepTwo}
        confirmStepThree={this.props.confirmStepThree}
        confirmStepFour={this.props.confirmStepFour}
        confirmStepFive={this.props.confirmStepFive}
        page={this.props.page}
        frontOrBack={this.props.frontOrBack}
      />
    ) : (
      <>
        <div className="orderInfo">
          <h1>Podsumowanie zamówienia:</h1>
          <h3>Typ koszulki: {this.props.frontOrBack}</h3>
          {this.props.confirm1 ? (
            <button
              className="confirmButton"
              onClick={this.props.confirmStepOne}
              style={{ color: "white", backgroundColor: "green" }}
            >
              Potwierdzone
            </button>
          ) : (
            <>
              <button
                className="confirmButton"
                onClick={this.props.confirmStepOne}
              >
                Potwierdź
              </button>
              <button onClick={() => this.props.editStep(1)}>Edytuj</button>
            </>
          )}

          <h3>Step2</h3>
          {this.props.confirm2 ? (
            <button
              className="confirmButton"
              onClick={this.props.confirmStepTwo}
              style={{ color: "white", backgroundColor: "green" }}
            >
              Potwierdzone
            </button>
          ) : (
            <>
              <button
                className="confirmButton"
                onClick={this.props.confirmStepTwo}
              >
                Potwierdź
              </button>
              <button onClick={() => this.props.editStep(2)}>Edytuj</button>
            </>
          )}

          <h3>Step3</h3>
          {this.props.confirm3 ? (
            <button
              className="confirmButton"
              onClick={this.props.confirmStepThree}
              style={{ color: "white", backgroundColor: "green" }}
            >
              Potwierdzone
            </button>
          ) : (
            <>
              <button
                className="confirmButton"
                onClick={this.props.confirmStepThree}
              >
                Potwierdź
              </button>{" "}
              <button onClick={() => this.props.editStep(3)}>Edytuj</button>
            </>
          )}

          {this.props.confirm1 && this.props.confirm2 && this.props.confirm3 && (
            <button className="toDataEntry" onClick={this.toDataEntry}>
              Dalej
            </button>
          )}
        </div>
      </>
    );
  }
}

export default OrderInfo;
