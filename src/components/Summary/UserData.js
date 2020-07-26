import React, { Component } from "react";

import Delivery from "./Delivery";

class UserData extends Component {
  state = {
    name: "",
    surname: "",
    street: "",
    houseNumber: "",
    flatNumber: "",
    postcode: "",
    city: "",
    phone: "",
    email: "",
    allDataEntried: false,
  };

  handleChange = (event) => {
    this.setState({
      [`${event.target.name}`]: event.target.value,
    });
  };

  formValidation = () => {
    if (this.state.name.length < 2) {
      this.setState({
        name: "ZA KRÓTKIE IMIĘ",
      });
    }

    if (this.state.surname.length < 2) {
      this.setState({
        surname: "ZA KRÓTKIE NAZWISKO",
      });
    }

    if (this.state.street.length < 2) {
      this.setState({
        street: "ZA KRÓTKA NAZWA ULICY",
      });
    }

    if (this.state.houseNumber.length < 1) {
      this.setState({
        houseNumber: "BŁĘDNY NUMER DOMU",
      });
    }

    if (
      this.state.postcode.length !== 6 &&
      this.state.postcode.indexOf("-") === -1
    ) {
      this.setState({
        postcode: "BŁĘDNY KOD POCZTOWY",
      });
    }

    if (this.state.city.length < 2) {
      this.setState({
        city: "BŁĘDNA NAZWA MIASTA",
      });
    }

    let isnum = /^\d+$/.test(this.state.phone);

    if (isnum == false || this.state.phone.length !== 9) {
      this.setState({
        phone: "BŁĘDNY NUMER TELEFONU",
      });
    }

    if (
      typeof this.state.email.length < 6 ||
      this.state.email.indexOf("@") === -1
    ) {
      this.setState({
        email: "BŁĘDNY ADRES EMAIL",
      });
    }

    if (
      this.state.name.length >= 2 &&
      this.state.surname.length >= 2 &&
      this.state.street.length >= 2 &&
      this.state.houseNumber.length >= 1 &&
      this.state.postcode.length === 6 &&
      this.state.postcode.indexOf("-") !== -1 &&
      this.state.city.length >= 2 &&
      isnum == true &&
      this.state.phone.length === 9 &&
      this.state.email.length >= 6 &&
      this.state.email.indexOf("@") !== -1
    ) {
      this.setState({
        allDataEntried: true,
      });
    }
  };

  render() {
    return this.state.allDataEntried ? (
      <Delivery />
    ) : (
      <>
        <form>
          <label>
            Imię:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Nazwisko:
            <input
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Ulica:
            <input
              type="text"
              name="street"
              value={this.state.street}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Numer domu:
            <input
              type="text"
              name="houseNumber"
              value={this.state.houseNumber}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Numer mieszkania:
            <input
              type="number"
              name="flatNumber"
              value={this.state.flatNumber}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Kod pocztowy:
            <input
              type="text"
              name="postcode"
              value={this.state.postcode}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Miasto:
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Telefon:
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            E-mail:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <button onClick={this.formValidation}>Dalej</button>
      </>
    );
  }
}

export default UserData;
