import React, { Component } from "react";
import StepOne from "./Form/StepOne";

class All extends Component {
  state = {
    frontOrBack: "",
    page: 1,
    confirm1: false,
    confirm2: false,
    confirm3: false,
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

  frontOrBackChoose = (event) => {
    this.setState({
      frontOrBack: event.target.value,
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
    if (this.state.frontOrBack !== "") {
      this.setState({
        page: this.state.page + 1,
      });
    } else {
      return alert("Musisz wybrać stronę koszulki!");
    }
  };

  render() {
    return (
      <StepOne
        confirm1={this.state.confirm1}
        confirm2={this.state.confirm2}
        confirm3={this.state.confirm3}
        confirmStepOne={this.confirmStepOne}
        confirmStepTwo={this.confirmStepTwo}
        confirmStepThree={this.confirmStepThree}
        editStep={this.editStep}
        frontOrBack={this.state.frontOrBack}
        frontOrBackChoose={this.frontOrBackChoose}
        previousPage={this.previousPage}
        nextPage={this.nextPage}
        page={this.state.page}
      />
    );
  }
}

export default All;
