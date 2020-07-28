import React, { Component } from "react";
import StepOne from "./Form/StepOne";

class All extends Component {
  state = {
    frontOrBack: "",
    page: 1,
    confirm1: false,
    confirm2: false,
    confirm3: false,
    confirm4: false,
    confirm5: false,
    image: "",
    imageEditOption: "",
    blurOption: "",
    blur: "",
    price: 0,
  };

  confirmStepOne = () => {
    this.setState((state) => ({
      confirm1: !state.confirm1,
    }));
  };

  confirmStepTwo = () => {
    this.setState((state) => ({
      confirm2: !state.confirm2,
    }));
  };

  confirmStepThree = () => {
    this.setState((state) => ({
      confirm3: !state.confirm3,
    }));
  };

  confirmStepFour = () => {
    this.setState((state) => ({
      confirm4: !state.confirm4,
    }));
  };

  confirmStepFive = () => {
    this.setState((state) => ({
      confirm5: !state.confirm5,
    }));
  };

  frontOrBackChoose = (event) => {
    this.setState({
      frontOrBack: event.target.value,
      price: 10,
    });
  };

  editStep = (value) => {
    this.setState({
      page: value,
    });
  };

  previousPage = () => {
    this.setState({
      page: this.state.page - 1,
    });
  };

  nextPage = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  chooseImage = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  editImage = (event) => {
    this.setState({
      imageEditOption: event.target.value,
    });
  };

  blurOption = (event) => {
    this.setState({
      blur: event.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <StepOne
          confirm1={this.state.confirm1}
          confirm2={this.state.confirm2}
          confirm3={this.state.confirm3}
          confirm4={this.state.confirm4}
          confirm5={this.state.confirm5}
          confirmStepOne={this.confirmStepOne}
          confirmStepTwo={this.confirmStepTwo}
          confirmStepThree={this.confirmStepThree}
          confirmStepFour={this.confirmStepFour}
          confirmStepFive={this.confirmStepFive}
          editStep={this.editStep}
          frontOrBack={this.state.frontOrBack}
          frontOrBackChoose={this.frontOrBackChoose}
          previousPage={this.previousPage}
          nextPage={this.nextPage}
          page={this.state.page}
          image={this.state.image}
          chooseImage={this.chooseImage}
          editImage={this.editImage}
          blurOption={this.blurOption}
          blur={this.state.blur}
          imageEditOption={this.state.imageEditOption}
          price={this.state.price}
        />
      </div>
    );
  }
}

export default All;
