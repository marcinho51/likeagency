import React, { Component } from "react";
import ThankYou from "./ThankYou";
class Final extends Component {
  state = {
    toThankYou: false,
  };

  toThankYou = () => {
    this.setState({
      toThankYou: true,
    });
  };

  render() {
    const form = (
      <>
        <h3>Typ koszulki: {this.props.frontOrBack}</h3>
        {this.props.confirm1 ? (
          <button
            className="confirmButton"
            onClick={this.props.confirmStepOne}
            style={{ color: "white", backgroundColor: "green" }}
          >
            Potwierdzone
          </button>
        ) : (
          <>
            <button
              className="confirmButton"
              onClick={this.props.confirmStepOne}
            >
              Potwierdź
            </button>
            <button onClick={() => this.props.editStepSummary(1)}>
              Edytuj
            </button>
          </>
        )}

        <h3>Step2</h3>
        {this.props.confirm2 ? (
          <button
            className="confirmButton"
            onClick={this.props.confirmStepTwo}
            style={{ color: "white", backgroundColor: "green" }}
          >
            Potwierdzone
          </button>
        ) : (
          <>
            <button
              className="confirmButton"
              onClick={this.props.confirmStepTwo}
            >
              Potwierdź
            </button>
            <button onClick={() => this.props.editStepSummary(2)}>
              Edytuj
            </button>
          </>
        )}

        <h3>Step3</h3>
        {this.props.confirm3 ? (
          <button
            className="confirmButton"
            onClick={this.props.confirmStepThree}
            style={{ color: "white", backgroundColor: "green" }}
          >
            Potwierdzone
          </button>
        ) : (
          <>
            <button
              className="confirmButton"
              onClick={this.props.confirmStepThree}
            >
              Potwierdź
            </button>{" "}
            <button onClick={() => this.props.editStep(3)}>Edytuj</button>
          </>
        )}
      </>
    );

    const personalData = (
      <>
        <h5>Imię: {this.props.name}</h5>
        <h5>Nazwisko: {this.props.surname}</h5>
        <h5>Ulica: {this.props.street}</h5>
        <h5>Numer budynku: {this.props.houseNumber}</h5>
        <h5>Numer mieszkania: {this.props.flatNumber}</h5>
        <h5>Kod pocztowy: {this.props.postcode}</h5>
        <h5>Telefon: {this.props.phone}</h5>
        <h5>E-mail: {this.props.email}</h5>

        {this.props.confirm4 ? (
          <button
            className="confirmButton"
            onClick={this.props.confirmStepFour}
            style={{ color: "white", backgroundColor: "green" }}
          >
            Potwierdzone
          </button>
        ) : (
          <>
            <button
              className="confirmButton"
              onClick={this.props.confirmStepFour}
            >
              Potwierdź
            </button>
            <button onClick={() => this.props.editStepSummary(1)}>
              Edytuj
            </button>
          </>
        )}
      </>
    );

    const personalDataDelivery = (
      <>
        <h5>Imię: {this.props.nameDelivery}</h5>
        <h5>Nazwisko: {this.props.surnameDelivery}</h5>
        <h5>Ulica: {this.props.streetDelivery}</h5>
        <h5>Numer budynku: {this.props.houseNumberDelivery}</h5>
        <h5>Numer mieszkania: {this.props.flatNumberDelivery}</h5>
        <h5>Kod pocztowy: {this.props.postcodeDelivery}</h5>
        <h5>Telefon: {this.props.phoneDelivery}</h5>
        <h5>E-mail: {this.props.emailDelivery}</h5>
        {this.props.confirm5 ? (
          <button
            className="confirmButton"
            onClick={this.props.confirmStepFive}
            style={{ color: "white", backgroundColor: "green" }}
          >
            Potwierdzone
          </button>
        ) : (
          <>
            <button
              className="confirmButton"
              onClick={this.props.confirmStepFive}
            >
              Potwierdź
            </button>
            <button onClick={() => this.props.editStepSummary(2)}>
              Edytuj
            </button>
          </>
        )}
      </>
    );

    return this.state.toThankYou ? (
      <ThankYou
        frontOrBack={this.props.frontOrBack}
        name={this.props.name}
        surname={this.props.surname}
        street={this.props.street}
        houseNumber={this.props.houseNumber}
        flatNumber={this.props.flatNumber}
        postcode={this.props.postcode}
        city={this.props.city}
        phone={this.props.phone}
        email={this.props.email}
        pickup={this.props.pickup}
        nameDelivery={this.props.nameDelivery}
        surnameDelivery={this.props.surnameDelivery}
        streetDelivery={this.props.streetDelivery}
        houseNumberDelivery={this.props.houseNumberDelivery}
        flatNumberDelivery={this.props.flatNumberDelivery}
        postcodeDelivery={this.props.postcodeDelivery}
        cityDelivery={this.props.cityDelivery}
        phoneDelivery={this.props.phoneDelivery}
        emailDelivery={this.props.emailDelivery}
        imageEditOption={this.props.imageEditOption}
      />
    ) : (
      <div className="finalSummary">
        <h1>Finalne podsumowanie zamówienia</h1>
        <h3>Produkt</h3>
        {form}
        <h3>Twoje dane</h3>
        {personalData}
        <h3>Opcja dostawy</h3>
        {this.props.pickup ? (
          <>
            <h5>Odbiór osobisty</h5>
            {this.props.confirm5 ? (
              <button
                className="confirmButton"
                onClick={this.props.confirmStepFive}
                style={{ color: "white", backgroundColor: "green" }}
              >
                Potwierdzone
              </button>
            ) : (
              <>
                <button
                  className="confirmButton"
                  onClick={this.props.confirmStepFive}
                >
                  Potwierdź
                </button>
                <button onClick={() => this.props.editStepSummary(2)}>
                  Edytuj
                </button>
              </>
            )}
          </>
        ) : null}
        {this.props.pickup === false &&
        this.props.surnameDelivery === this.props.surname &&
        this.props.emailDelivery === this.props.email ? (
          <>
            <h5>Wysyłka - dane jak powyżej</h5>
            {this.props.confirm5 ? (
              <button
                className="confirmButton"
                onClick={this.props.confirmStepFive}
                style={{ color: "white", backgroundColor: "green" }}
              >
                Potwierdzone
              </button>
            ) : (
              <>
                <button
                  className="confirmButton"
                  onClick={this.props.confirmStepFive}
                >
                  Potwierdź
                </button>
                <button onClick={() => this.props.editStepSummary(2)}>
                  Edytuj
                </button>
              </>
            )}
          </>
        ) : null}
        {this.props.pickup === false &&
        this.props.surnameDelivery !== this.props.surname &&
        this.props.emailDelivery !== this.props.email ? (
          <>
            <h5>Wysyłka</h5>
            {personalDataDelivery}
          </>
        ) : null}
        {this.props.confirm1 &&
          this.props.confirm2 &&
          this.props.confirm3 &&
          this.props.confirm4 &&
          this.props.confirm5 && (
            <button className="toThankYou" onClick={this.toThankYou}>
              Dalej
            </button>
          )}
        <div className="price">
          <h3>
            Cena:{" "}
            {this.props.imageEditOption === "normal" &&
            this.props.pickup === true
              ? 10
              : null}
            {this.props.imageEditOption === "normal" &&
            this.props.pickup === false
              ? 15
              : null}
            {this.props.imageEditOption === "grayscale" &&
            this.props.pickup === true
              ? 12
              : null}
            {this.props.imageEditOption === "grayscale" &&
            this.props.pickup === false
              ? 17
              : null}
            {this.props.imageEditOption === "blur" && this.props.pickup === true
              ? 13
              : null}
            {this.props.imageEditOption === "blur" &&
            this.props.pickup === false
              ? 18
              : null}
          </h3>
        </div>
      </div>
    );
  }
}

export default Final;
