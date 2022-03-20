import styled from 'styled-components';

const buttonSize = {
  width: '150px',
  height: '150px',
}

export const Button = styled.button`
  width: ${ buttonSize.width };
  height: ${ buttonSize.height };
  border-radius: 50%;
  background: none;
  border: none;
  padding: 0;
  position: relative;
`;

export const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: rgba(51, 51, 51, .8);
  display: flex;
  justify-content: center;
  align-items: center;
`;