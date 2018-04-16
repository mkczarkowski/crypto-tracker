import React from "react";
import PropTypes from "prop-types";

import Field from "../Field/Field";
const containerPadding = "15%";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: containerPadding,
    paddingRight: containerPadding
  }
};
const Head = () => (
  <div style={styles.container}>
    <Field isLarge hasBoldText hasThinBorder>
      Name
    </Field>
    <Field hasBoldText hasThinBorder>
      Price
    </Field>
    <Field hasBoldText hasThinBorder>
      Change (24h)
    </Field>
    <Field hasBoldText hasThinBorder>
      Market cap
    </Field>
    <Field hasBoldText hasThinBorder>
      {" "}
      Circulating supply
    </Field>
  </div>
);

export default Head;
