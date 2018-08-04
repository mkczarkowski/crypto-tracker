import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  PERCENT_CHANGE_MINUS_COLOR,
  PERCENT_CHANGE_PLUS_COLOR,
} from '../../../../shared/styles/constants';

const PercentChange = styled.div`
  color: ${props =>
    props.change > 0 ? PERCENT_CHANGE_PLUS_COLOR : PERCENT_CHANGE_MINUS_COLOR};
`;

PercentChange.propTypes = {
  change: PropTypes.number.isRequired,
};

export default PercentChange;
