import React, { Component } from "react";
import OrderInfo from "../Summary/OrderInfo";

class StepThree extends Component {
  state = {};
  render() {
    return this.props.page !== 3 ? (
      <OrderInfo
        page={this.props.page}
        frontOrBack={this.props.frontOrBack}
        editStep={this.props.editStep}
      />
    ) : (
      <>
        <h1>StepThree</h1>
        <button onClick={this.props.previousPage}>Wstecz</button>
        <button onClick={this.props.nextPage}>Dalej</button>
      </>
    );
  }
}

export default StepThree;
