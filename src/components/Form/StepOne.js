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
          image={this.props.image}
          chooseImage={this.props.chooseImage}
          editImage={this.props.editImage}
          blurOption={this.props.blurOption}
          blur={this.props.blur}
          imageEditOption={this.props.imageEditOption}
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

        <div className="price">
          <h3>Cena: 10</h3>
        </div>
        {this.props.frontOrBack !== "" && (
          <button onClick={this.props.nextPage}>Dalej</button>
        )}
      </div>
    );
  }
}

export default StepOne;
