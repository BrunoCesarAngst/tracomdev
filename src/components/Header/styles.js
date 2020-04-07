import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '../../styles/colors';

export const Container = styled.header`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  // margin: 50px 0;
  background-color: ${colors.greyA};
  padding: 15px;
`;

export const Links = styled(Link)`
  display: flex;
  align-items: center;
  // text-decoration: none;
  transition: 0.2s;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: ${colors.blueA};
    }
    span {
      font-size: 12px;
      color: ${colors.blueA};
    }
  }
`;
