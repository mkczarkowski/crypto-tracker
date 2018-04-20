import React from 'react';
import PropTypes from 'prop-types';
import Radium from "radium";

const CoinListCell = ({
                          isLarge,
                          hasBoldText,
                          hasThinBorder,
                          additionalStyling,
                          children,
                      }) => {
    const fieldBorderColor = '#dedede';
    const fieldPadding = 10;
    const largeFieldFlex = '1 0 25%';
    const smallFieldFlex = '1 0 10%';

    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            flex: isLarge ? largeFieldFlex : smallFieldFlex,
            fontWeight: hasBoldText ? 700 : 300,
            paddingTop: fieldPadding,
            paddingBottom: fieldPadding,
            borderBottom: `${hasThinBorder ? 4 : 2}px solid ${fieldBorderColor}`,
        },
    };

    return (
        <div
            style={[
                styles.container,
                additionalStyling,
            ]}
        >
            {children}
        </div>
    );
};

CoinListCell.propTypes = {
    isLarge: PropTypes.bool,
    hasBoldText: PropTypes.bool,
    hasThinBorder: PropTypes.bool,
    additionalStyling: PropTypes.object,
    children: PropTypes.node.isRequired,
};

CoinListCell.defaultProps = {
    isLarge: false,
    hasBoldText: false,
    hasThinBorder: false,
    additionalStyling: {},
};

export default Radium(CoinListCell);
