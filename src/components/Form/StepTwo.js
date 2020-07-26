import React, { Component } from "react";
import StepThree from "./StepThree";
class StepTwo extends Component {
  state = {};
  render() {
    return this.props.page !== 2 ? (
      <StepThree
        editStep={this.props.editStep}
        frontOrBack={this.props.frontOrBack}
        previousPage={this.props.previousPage}
        nextPage={this.props.nextPage}
        page={this.props.page}
      />
    ) : (
      <>
        <h1>hehe</h1>
        <button onClick={this.props.previousPage}>Wstecz</button>
        <button onClick={this.props.nextPage}>Dalej</button>
      </>
    );
  }
}

export default StepTwo;
