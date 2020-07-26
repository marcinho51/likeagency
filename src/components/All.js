import React, { Component } from "react";
import StepOne from "./Form/StepOne";

class All extends Component {
  state = { frontOrBack: "", page: 1 };

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
