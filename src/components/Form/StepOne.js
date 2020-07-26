import React, { Component } from "react";
import StepTwo from "./StepTwo";

class StepOne extends Component {
  state = {};

  render() {
    return this.props.page !== 1 ? (
      <>
        <StepTwo
          editStep={this.props.editStep}
          frontOrBack={this.props.frontOrBack}
          previousPage={this.props.previousPage}
          nextPage={this.props.nextPage}
          page={this.props.page}
        />
      </>
    ) : (
      <div className="formStepOne">
        <div className="overprint">
          <h3>Gdzie ma się znajdować nadruk?</h3>
          <select name="frontOrBack" onChange={this.props.frontOrBackChoose}>
            <option>...</option>
            <option value="front">Przód</option>
            <option value="back">Tył</option>
          </select>
          <div className="overprint__photo"></div>
        </div>

        <div className="tShirt">
          <h3>Your t-shirt:</h3>
          <div className="tShirt__photo"></div>
          <h3>Price: </h3>
        </div>

        <button onClick={this.props.nextPage}>Dalej</button>
      </div>
    );
  }
}

export default StepOne;
