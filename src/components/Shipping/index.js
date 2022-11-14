import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default Shipping = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [CreditCardNumber, setCreditCardNumber] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Full name here"
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email here"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="tel"
        placeholder="Phone number here"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Address here"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <input
        type="tel"
        placeholder="Credit card number"
        onChange={(e) => {
          setCreditCardNumber(e.target.value);
        }}
      />
      <button onClick={handleClick}></button>
    </form>
  );
};
