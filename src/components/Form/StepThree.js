import React, { Component } from "react";
import OrderInfo from "../Summary/OrderInfo";

class StepThree extends Component {
  state = {};
  render() {
    return this.props.page !== 3 ? (
      <OrderInfo
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
        editStep={this.props.editStep}
      />
    ) : (
      <>
        <h1>Formularz cz. III</h1>
        <div
          className="chosenImage"
          style={{ backgroundImage: `url(${this.props.image})` }}
        ></div>
        <button onClick={this.props.previousPage}>Wstecz</button>
        <button onClick={this.props.nextPage}>Dalej</button>
      </>
    );
  }
}

export default StepThree;
