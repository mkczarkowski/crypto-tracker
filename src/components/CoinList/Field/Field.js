import React from "react";
import PropTypes from "prop-types";

const Field = ({ text, isLarge, hasBoldText, hasThinBorder, additionalStyling, children }) => {
  const fieldBorderColor = "#dedede";
  const fieldPadding = 10;
  const largeFieldFlex = "1 0 25%";
  const smallFieldFlex = "1 0 10%";

  const styles = {
    fieldContainer: {
      display: "flex",
      alignItems: "center",
      flex: isLarge ? largeFieldFlex : smallFieldFlex,
      fontWeight: hasBoldText ? 700 : 300,
      paddingTop: fieldPadding,
      paddingBottom: fieldPadding,
      borderBottom: `${hasThinBorder ? 4 : 2}px solid ${fieldBorderColor}`,
    }
  };

  return (
    <div
      style={{
        ...styles.fieldContainer,

        ...additionalStyling
      }}
    >
      {children}
    </div>
  );
};

Field.defaultProps = {
  additionalStyling: {}
};

export default Field;
