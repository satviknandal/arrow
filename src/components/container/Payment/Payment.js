import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ExpiryDateInput from "../ExpiryDateInput/ExpiryDateInput";
import DropdownList from "../../presentation/DropdownList/DropdownList";
import TextInput from "../../presentation/Input/TextInput/TextInput";
import "./Payment.scss";
import "../../presentation/DropdownList/DropdownList.scss";
import "../../presentation/Input/TextInput/TextInput.scss";
import { MockData } from "../../../MockData";

const PaymentComponent = ({ data }) => {
  const [selectedFirstName, setSelectedFirstName] = useState("");
  const [selectedLastName, setSelectedLastName] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [selectedCardNumber, setSelectedCardNumber] = useState("");
  const [selectedCVV, setSelectedCVV] = useState("");
  const [isCardSelected, setIsCardSelected] = useState(true);

  useEffect(() => {
    setSelectedCountry(MockData?.selectedCountry);
    setSelectedCard(MockData?.selectedCard);
  }, []);

  const changeCardType = (e) => {
    if (e.value === "paynow") {
      setIsCardSelected(false);
    } else {
      setIsCardSelected(true);
    }
  };

  const renderBillingSection = () => {
    return (
      <>
        <h6>{MockData?.labels?.billingHeading}</h6>
        <div className="payment-billing">
          <div className="payment-billing_country">
            <DropdownList
              className="nationality-dropdown"
              selected={selectedCountry}
              isImage
              isText={false}
              list={MockData?.countryData}
              path="value"
              placeholderText={"Please Select"}
              inputId="nationality"
              isDisabled={false}
              onSelect={(e) => console.log("onselect", e)}
            />
            <TextInput
              type="text"
              inputId="phoneNumber"
              value={selectedPhoneNumber}
              className={"st-text-input--nomargin"}
              placeholderText={MockData?.labels?.phoneNumber}
              isDisabled={false}
              onClick={() => {}}
              maxLength="8"
              onChange={(e) => setSelectedPhoneNumber(e.target.value)}
            />
          </div>

          <div className="payment-billing_name">
            <TextInput
              type="text"
              inputId="firstname"
              value={selectedFirstName}
              placeholderText={MockData?.labels?.firstName}
              isDisabled={false}
              onClick={() => {}}
              maxLength="20"
              onChange={(e) => setSelectedFirstName(e.target.value)}
            />
            <TextInput
              type="text"
              inputId="lastname"
              value={selectedLastName}
              placeholderText={MockData?.labels?.lastName}
              isDisabled={false}
              onClick={() => {}}
              maxLength="20"
              onChange={(e) => setSelectedLastName(e.target.value)}
            />
          </div>

          <TextInput
            type="text"
            inputId="email"
            value={selectedEmail}
            placeholderText={"Email"}
            isDisabled={false}
            onClick={() => {}}
            maxLength="25"
            onChange={(e) => setSelectedEmail(e.target.value)}
          />
        </div>
      </>
    );
  };

  const renderAddressSection = () => {
    return (
      <div className="payment-address">
        <DropdownList
          className="nationality-dropdown"
          selected={selectedCountry}
          isImage
          isText={false}
          list={MockData?.countryData}
          path="title"
          placeholderText={"Please Select"}
          inputId="nationality"
          isDisabled={false}
          onSelect={(e) => console.log("onselect", e)}
        />
        <TextInput
          type="text"
          inputId="cardnumber"
          value={selectedAddress}
          className={"st-text-input--nomargin"}
          placeholderText={MockData?.labels?.address}
          isDisabled={false}
          onClick={() => {}}
          maxLength="100"
          onChange={(e) => setSelectedAddress(e.target.value)}
        />
      </div>
    );
  };

  const renderPaymentMethod = () => {
    return (
      <>
        <h6>{MockData?.labels?.paymentHeading}</h6>
        <div className="payment-card">
          <DropdownList
            isImageText
            selected={selectedCard}
            list={MockData?.cardData}
            path="title"
            placeholderText={MockData?.labels?.card}
            inputId="card"
            isDisabled={false}
            onChange={(e) => changeCardType(e)}
            onSelect={(e) => changeCardType(e)}
          />
        </div>
      </>
    );
  };

  const renderCardDetails = () => {
    return (
      isCardSelected && (
        <div className="payment-cardnumber">
          <TextInput
            type="text"
            inputId="cardnumber"
            value={selectedCardNumber}
            placeholderText={MockData?.labels?.cardNumber}
            isDisabled={false}
            onClick={() => {}}
            maxLength="16"
            onChange={(e) => setSelectedCardNumber(e.target.value)}
          />
          <div className="payment-cardnumber--cvv">
            <ExpiryDateInput></ExpiryDateInput>
            <TextInput
              type="text"
              inputId="cvv"
              value={selectedCVV}
              placeholderText={MockData?.labels?.cvv}
              isDisabled={false}
              onClick={() => {}}
              maxLength="3"
              onChange={(e) => setSelectedCVV(e.target.value)}
            />
          </div>
        </div>
      )
    );
  };

  const renderButton = () => {
    return (
      <div className="payment-confirm btn btn--primary">
        <button
          className="disabled"
          onClick={() => console.log("Button Clicked")}
        >
          {MockData?.labels?.confirmBtn}
        </button>
      </div>
    );
  };

  return (
    <div className="payment">
      {renderBillingSection()}
      {renderAddressSection()}
      {renderPaymentMethod()}
      {renderCardDetails()}
      {renderButton()}
    </div>
  );
};

PaymentComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PaymentComponent;
