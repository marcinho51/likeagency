import React, { Component } from "react";

class ThankYou extends Component {
  state = {};
  render() {
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
      </>
    );
    return (
      <div className="thankYou row">
        <div className="col-4"></div>
        <div className="col-4">
          <h1>Dziękujemy za zakupy</h1>
          <h3>Właśnie dokonałeś zakupu koszulki:</h3>
          <h5>Typ koszulki: {this.props.frontOrBack}</h5>
          <h5>
            Wybrany nadruk (przed edycją):{" "}
            <div
              style={{
                backgroundImage: `url(${this.props.image})`,
                height: "200px",
                width: "200px",
              }}
            ></div>
          </h5>
          <h5>
            Wybrany nadruk (po edycji):{" "}
            {this.props.imageEditOption === "normal" && (
              <div
                style={{
                  backgroundImage: `url(${this.props.image})`,
                  height: "200px",
                  width: "200px",
                }}
              ></div>
            )}
            {this.props.imageEditOption === "grayscale" && (
              <div
                style={{
                  backgroundImage: `url(${this.props.image})`,
                  height: "200px",
                  width: "200px",
                  filter: `grayscale(100%)`,
                }}
              ></div>
            )}
            {this.props.imageEditOption === "blur" && (
              <div
                style={{
                  backgroundImage: `url(${this.props.image})`,
                  height: "200px",
                  width: "200px",
                  filter: `blur(${this.props.blur}px)`,
                }}
              ></div>
            )}
          </h5>
          <h3>Dane zamawiającego:</h3>
          <h5>Imię: {this.props.name}</h5>
          <h5>Nazwisko: {this.props.surname}</h5>
          <h5>Ulica: {this.props.street}</h5>
          <h5>Numer budynku: {this.props.houseNumber}</h5>
          <h5>Numer mieszkania: {this.props.flatNumber}</h5>
          <h5>Kod pocztowy: {this.props.postcode}</h5>
          <h5>Telefon: {this.props.phone}</h5>
          <h5>E-mail: {this.props.email}</h5>
          <h3>Opcja dostawy:</h3>
          {this.props.pickup ? (
            <>
              <h5>Odbiór osobisty</h5>
            </>
          ) : null}
          {this.props.pickup === false &&
          this.props.surnameDelivery === this.props.surname &&
          this.props.emailDelivery === this.props.email ? (
            <>
              <h5>Wysyłka - dane jak powyżej</h5>
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
              {this.props.imageEditOption === "blur" &&
              this.props.pickup === true
                ? 13
                : null}
              {this.props.imageEditOption === "blur" &&
              this.props.pickup === false
                ? 18
                : null}
            </h3>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    );
  }
}

export default ThankYou;
