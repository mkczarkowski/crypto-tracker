import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { formatAsCurrency } from '../../shared/utils/helpers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Header = ({ cap }) => (
  <Wrapper>
    <Title>Crypto Tracker</Title>
    <p>Market Cap: {formatAsCurrency(cap)}</p>
  </Wrapper>
);

Header.propTypes = {
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Header;
