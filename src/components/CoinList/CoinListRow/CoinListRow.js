import React from 'react';
import PropTypes from 'prop-types';
import Radium from "radium";

import mainStyles from "../../../shared/styles";

const CoinListRow = ({children}) => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: mainStyles.contentPadding,
            paddingRight: mainStyles.contentPadding,
            "@media (max-width: 800px)": {
                paddingLeft: mainStyles.smallContentPadding,
                paddingRight: mainStyles.smallContentPadding,
                fontSize: "0.8em"
            }
        },
    };

    return <div style={styles.container}>{children}</div>
};

CoinListRow.propTypes = {
    additionalStyling: PropTypes.object,
    children: PropTypes.node.isRequired,
};

CoinListRow.defaultProps = {
    additionalStyling: {},
};

export default Radium(CoinListRow);
