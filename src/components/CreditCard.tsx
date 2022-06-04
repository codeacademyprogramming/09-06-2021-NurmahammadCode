import "@repay/react-credit-card/dist/react-credit-card.css";
import Card from "@repay/react-credit-card";
import React from "react";
import { useState } from "react";
import {
  FormControl,
  TextField,
  FormLabel,
  FormGroup,
} from "@material-ui/core";

interface IValues {
  name: string;
  number: string;
  expiration: string;
  cvc: string;
}

export default function CreditCard() {
  const [values, setValues] = React.useState<IValues>({
    name: "",
    number: "",
    expiration: "",
    cvc: "",
  });

  const handleChange = React.useCallback(
    (event) => {
      const { name, value } = event.target;
      if (name === "number") {
        setValues((v) => ({ ...v, [name]: value.slice(0, 16) }));
      } else if (name === "expiration") {
        setValues((v) => ({ ...v, [name]: value.slice(0, 4) }));
      } else {
        setValues((v) => ({ ...v, [name]: value }));
      }
    },
    [setValues]
  );

  const [focused, setFocus] = React.useState<any | undefined>(undefined);
  const handleFocus = React.useCallback(
    (event) => setFocus(event.target.name),
    [setFocus]
  );
  const handleBlur = React.useCallback(() => setFocus(undefined), [setFocus]);
  return (
    <FormGroup
      style={{
        width: 350,
        margin: "auto",
        padding: "2%",
        borderWidth: 1,
        borderColor: "gray",
        borderStyle: "solid",
      }}
    >
      <FormControl style={{ marginTop: "7%" }}>
        <FormLabel>Name on card</FormLabel>
        <TextField
          name="name"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={values.name}
        />
      </FormControl>
      <FormControl style={{ marginTop: "7%" }}>
        <FormLabel>Card Number</FormLabel>
        <TextField
          name="number"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={values.number}
        />
      </FormControl>
      <FormControl style={{ marginTop: "7%" }}>
        <FormLabel>Expiration</FormLabel>
        <TextField
          name="expiration"
          placeholder="MM/YY"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={values.expiration}
        />
      </FormControl>
      <FormControl style={{ marginTop: "7%" }}>
        <FormLabel>CVC</FormLabel>
        <TextField
          name="cvc"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={values.cvc}
        />
      </FormControl>
      <div style={{ alignSelf: "center", marginTop: "3%" }}>
        <Card {...values} focused={focused} />
      </div>
    </FormGroup>
  );
}
