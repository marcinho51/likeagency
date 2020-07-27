import React, { Component } from "react";
import StepTwo from "./StepTwo";

class StepOne extends Component {
  state = {};

  render() {
    return this.props.page !== 1 ? (
      <>
        <StepTwo
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
          editStep={this.props.editStep}
          frontOrBack={this.props.frontOrBack}
          previousPage={this.props.previousPage}
          nextPage={this.props.nextPage}
          page={this.props.page}
        />
      </>
    ) : (
      <div className="formStepOne">
        <h1>Formularz cz. I</h1>
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
          <h3>Twoja koszulka:</h3>
          <div className="tShirt__photo"></div>
          <h3>Cena: </h3>
        </div>

        <button onClick={this.props.nextPage}>Dalej</button>
      </div>
    );
  }
}

export default StepOne;
