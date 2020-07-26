import React, { Component } from "react";
import StepThree from "./StepThree";
class StepTwo extends Component {
  state = {};
  render() {
    return this.props.page !== 2 ? (
      <StepThree
        confirm1={this.props.confirm1}
        confirm2={this.props.confirm2}
        confirm3={this.props.confirm3}
        confirmStepOne={this.props.confirmStepOne}
        confirmStepTwo={this.props.confirmStepTwo}
        confirmStepThree={this.props.confirmStepThree}
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
