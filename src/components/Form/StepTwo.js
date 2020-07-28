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
        editImage={this.props.editImage}
        blurOption={this.props.blurOption}
        blur={this.props.blur}
        imageEditOption={this.props.imageEditOption}
      />
    ) : (
      <div className="formStepTwo">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <h1>Formularz cz. II</h1>
            <h3>Którą grafikę wybierasz?</h3>
            <select name="chooseImage" onChange={this.props.chooseImage}>
              <option>...</option>
              <option value="https://picsum.photos/200/200">1</option>
              <option value="https://picsum.photos/300/300">2</option>
              <option value="https://picsum.photos/400/400">3</option>
              <div className="col-4"></div>
            </select>
          </div>
        </div>
        <div className="photosToChoose">
          <div className="overprint__photo">
            <h3>1</h3>
          </div>
          <div className="overprint__photo2">
            <h3>2</h3>
          </div>
          <div className="overprint__photo3">
            <h3>3</h3>
          </div>{" "}
        </div>
        <div className="row">
          <div className="col-4"></div>

          <div className="price col-4">
            <h3>Cena: 10</h3>

            <button onClick={this.props.previousPage}>Wstecz</button>
            {this.props.image !== "" && (
              <button onClick={this.props.nextPage}>Dalej</button>
            )}
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}

export default StepTwo;
