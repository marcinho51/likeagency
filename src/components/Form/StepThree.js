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
        imageEditOption={this.props.imageEditOption}
      />
    ) : (
      <>
        <h1>Formularz cz. III</h1>
        <h3>Widok nadruku:</h3>
        <select name="editImage" onChange={this.props.editImage}>
          <option>...</option>
          <option value="normal">normalny</option>
          <option value="grayscale">grayscale</option>
          <option value="blur">blur</option>
        </select>
        {this.props.imageEditOption === "grayscale" && (
          <>
            <div
              className="chosenImage"
              style={{
                backgroundImage: `url(${this.props.image})`,
                filter: `grayscale(100%)`,
              }}
            ></div>
            <div className="price">
              <h3>Cena: 12</h3>
            </div>
            <button onClick={this.props.previousPage}>Wstecz</button>
            <button onClick={this.props.nextPage}>Dalej</button>
          </>
        )}
        {this.props.imageEditOption === "normal" && (
          <>
            <div
              className="chosenImage"
              style={{
                backgroundImage: `url(${this.props.image})`,
              }}
            ></div>
            <div className="price">
              <h3>Cena: 10</h3>
            </div>
            <button onClick={this.props.previousPage}>Wstecz</button>
            <button onClick={this.props.nextPage}>Dalej</button>
          </>
        )}

        {this.props.imageEditOption === "blur" && (
          <>
            <h3>Wybierz stopień rozmycia (1-10):</h3>
            <select name="blurOption" onChange={this.props.blurOption}>
              <option>...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

            <div
              className="chosenImage"
              style={{
                backgroundImage: `url(${this.props.image})`,
                filter: `blur(${this.props.blur}px)`,
              }}
            ></div>
            <div className="price">
              <h3>Cena: 13</h3>
            </div>
            <button onClick={this.props.previousPage}>Wstecz</button>
            <button onClick={this.props.nextPage}>Dalej</button>
          </>
        )}
      </>
    );
  }
}

export default StepThree;
