import React, { Component } from "react";
import Final from "./Final";
class Delivery extends Component {
  state = {
    pickup: true,
    nameDelivery: "",
    surnameDelivery: "",
    streetDelivery: "",
    houseNumberDelivery: "",
    flatNumberDelivery: "",
    postcodeDelivery: "",
    cityDelivery: "",
    phoneDelivery: "",
    emailDelivery: "",
    // allDataEntriedDelivery: false,
  };

  handleChange = (event) => {
    this.setState({
      [`${event.target.name}`]: event.target.value,
    });
  };

  toggleChange = () => {
    this.setState({
      pickup: !this.state.pickup,
    });
  };

  // goWithoutDelivery = () => {
  //   this.setState({
  //     allDataEntriedDelivery: true,
  //     pageSummary: 3,
  //   });
  // };

  theSameAddress = (e) => {
    this.setState({
      nameDelivery: this.props.name,
      surnameDelivery: this.props.surname,
      streetDelivery: this.props.street,
      houseNumberDelivery: this.props.houseNumber,
      flatNumberDelivery: this.props.flatNumber,
      postcodeDelivery: this.props.postcode,
      cityDelivery: this.props.city,
      phoneDelivery: this.props.phone,
      emailDelivery: this.props.email,
    });
    e.preventDefault();
  };

  formValidation = (e) => {
    if (this.state.nameDelivery.length < 2) {
      this.setState({
        nameDelivery: "ZA KRÓTKIE IMIĘ",
      });
    }

    if (this.state.surnameDelivery.length < 2) {
      this.setState({
        surnameDelivery: "ZA KRÓTKIE NAZWISKO",
      });
    }

    if (this.state.streetDelivery.length < 2) {
      this.setState({
        streetDelivery: "ZA KRÓTKA NAZWA ULICY",
      });
    }

    if (this.state.houseNumberDelivery.length < 1) {
      this.setState({
        houseNumberDelivery: "BŁĘDNY NUMER DOMU",
      });
    }

    if (
      this.state.postcodeDelivery.length !== 6 &&
      this.state.postcodeDelivery.indexOf("-") === -1
    ) {
      this.setState({
        postcodeDelivery: "BŁĘDNY KOD POCZTOWY",
      });
    }

    if (this.state.cityDelivery.length < 2) {
      this.setState({
        cityDelivery: "BŁĘDNA NAZWA MIASTA",
      });
    }

    let isnum = /^\d+$/.test(this.state.phoneDelivery);

    if (isnum == false || this.state.phoneDelivery.length !== 9) {
      this.setState({
        phoneDelivery: "BŁĘDNY NUMER TELEFONU",
      });
    }

    if (
      typeof this.state.emailDelivery.length < 6 ||
      this.state.emailDelivery.indexOf("@") === -1
    ) {
      this.setState({
        emailDelivery: "BŁĘDNY ADRES EMAIL",
      });
    }

    if (
      this.state.nameDelivery.length >= 2 &&
      this.state.surnameDelivery.length >= 2 &&
      this.state.streetDelivery.length >= 2 &&
      this.state.houseNumberDelivery.length >= 1 &&
      this.state.postcodeDelivery.length === 6 &&
      this.state.postcodeDelivery.indexOf("-") !== -1 &&
      this.state.cityDelivery.length >= 2 &&
      isnum == true &&
      this.state.phoneDelivery.length === 9 &&
      this.state.emailDelivery.length >= 6 &&
      this.state.emailDelivery.indexOf("@") !== -1
    ) {
      this.props.goWithoutDelivery();
    }
    e.preventDefault();
  };

  render() {
    const emptyForm = (
      <>
        <form>
          <label>
            Imię:
            <input
              type="text"
              name="nameDelivery"
              value={this.state.nameDelivery}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Nazwisko:
            <input
              type="text"
              name="surnameDelivery"
              value={this.state.surnameDelivery}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Ulica:
            <input
              type="text"
              name="streetDelivery"
              value={this.state.streetDelivery}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Numer domu:
            <input
              type="text"
              name="houseNumberDelivery"
              value={this.state.houseNumberDelivery}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Numer mieszkania:
            <input
              type="number"
              name="flatNumberDelivery"
              value={this.state.flatNumberDelivery}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Kod pocztowy:
            <input
              type="text"
              name="postcodeDelivery"
              value={this.state.postcodeDelivery}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Miasto:
            <input
              type="text"
              name="cityDelivery"
              value={this.state.cityDelivery}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Telefon:
            <input
              type="text"
              name="phoneDelivery"
              value={this.state.phoneDelivery}
              onChange={this.handleChange}
            />
          </label>
          <label>
            E-mail:
            <input
              type="text"
              name="emailDelivery"
              value={this.state.emailDelivery}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <button onClick={this.theSameAddress}>
          Adres taki sam, jak adres rachunku
        </button>
        <button className="nextButton" onClick={this.formValidation}>
          Dalej
        </button>
      </>
    );

    return this.props.allDataEntriedDelivery && this.props.pageSummary !== 2 ? (
      <Final
        confirm1={this.props.confirm1}
        confirm2={this.props.confirm2}
        confirm3={this.props.confirm3}
        confirm4={this.props.confirm4}
        confirm5={this.props.confirm5}
        frontOrBack={this.props.frontOrBack}
        confirmStepOne={this.props.confirmStepOne}
        confirmStepTwo={this.props.confirmStepTwo}
        confirmStepThree={this.props.confirmStepThree}
        confirmStepFour={this.props.confirmStepFour}
        confirmStepFive={this.props.confirmStepFive}
        pageSummary={this.props.pageSummary}
        editStepSummary={this.props.editStepSummary}
        name={this.props.name}
        surname={this.props.surname}
        street={this.props.street}
        houseNumber={this.props.houseNumber}
        flatNumber={this.props.flatNumber}
        postcode={this.props.postcode}
        city={this.props.city}
        phone={this.props.phone}
        email={this.props.email}
        pickup={this.state.pickup}
        nameDelivery={this.state.nameDelivery}
        surnameDelivery={this.state.surnameDelivery}
        streetDelivery={this.state.streetDelivery}
        houseNumberDelivery={this.state.houseNumberDelivery}
        flatNumberDelivery={this.state.flatNumberDelivery}
        postcodeDelivery={this.state.postcodeDelivery}
        cityDelivery={this.state.cityDelivery}
        phoneDelivery={this.state.phoneDelivery}
        emailDelivery={this.state.emailDelivery}
      />
    ) : (
      <>
        <h1>Opcje dostawy towaru</h1>
        <form>
          <label>
            Odbiór osobisty
            <input
              type="checkbox"
              checked={this.state.pickup}
              onChange={this.toggleChange}
            />
          </label>
          <label>
            Wysyłka
            <input
              type="checkbox"
              checked={!this.state.pickup}
              onChange={this.toggleChange}
            />
          </label>

          {this.state.pickup === false ? (
            emptyForm
          ) : (
            <button
              className="nextButton"
              onClick={this.props.goWithoutDelivery}
            >
              Dalej
            </button>
          )}
        </form>
      </>
    );
  }
}

export default Delivery;
