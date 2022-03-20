import styled, { css } from 'styled-components';

const TileSize = {
  width: '150px',
  height: '125px',
}

export const Tile = styled.div`
  width: ${ TileSize.width };
  height: ${ TileSize.height };
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 15px;
  ${ ({ theme }) => css`
    background: ${ theme.colors.background.gradient.color1 };
    box-shadow: 0 3px 15px ${ theme.colors.button.shadow.dark };
    & > p {
      :first-of-type {
        text-transform: capitalize;
        margin-top: 7px;
      }
    }
  ` };
`;

export const Hr = styled.hr`
  width: 70%;
  background: ${ ({ theme }) => theme.colors.secondary.color3 };
  height: 1px;
  margin: 5px 0;
`;