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
      />
    ) : (
      <div className="formStepTwo">
        <h1>Formularz cz. II</h1>
        <h3>Grafiki do wyboru:</h3>
        <div className="photosToChoose">
          <div className="overprint__photo">1</div>
          <div className="overprint__photo2">2</div>
          <div className="overprint__photo3">3</div>
        </div>
        <select name="chooseImage" onChange={this.props.chooseImage}>
          <option>...</option>
          <option value="https://picsum.photos/200/200">1</option>
          <option value="https://picsum.photos/300/300">2</option>
          <option value="https://picsum.photos/400/400">3</option>
        </select>
        <button onClick={this.props.previousPage}>Wstecz</button>
        <button onClick={this.props.nextPage2}>Dalej</button>
      </div>
    );
  }
}

export default StepTwo;
