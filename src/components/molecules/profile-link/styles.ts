import styled from 'styled-components';
import { Link as LinkProto } from 'react-router-dom';

export const Link = styled(LinkProto)`
  width: auto;
  height: auto;
  text-decoration: none;
  & > button {
    text-transform: capitalize;
  }
`;

export const Span = styled.span`
  color: ${ ({ theme }) => theme.colors.secondary.color1 };
  margin-left: 15px;
`;