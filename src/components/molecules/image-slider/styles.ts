import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 180px;
  border-radius: 15px;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 0 12px ${ ({ theme }) => theme.colors.button.shadow.light };
`;

export const Dot = styled.div<{ activated: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 0 3px;
  ${ ({ theme, activated }) => css`
    background: ${ activated ? theme.colors.secondary.color1 : theme.colors.secondary.color2 };
    ${ activated && 'transform: scale(1.5)' };
  ` };
`;

export const DotsContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwitchImageButton = styled.button`
  position: absolute;
  height: 100%;
  background: none;
  top: 0;
  border: none;
  & > svg {
    color: ${ ({ theme }) => theme.colors.secondary.color2 };
  }
`;