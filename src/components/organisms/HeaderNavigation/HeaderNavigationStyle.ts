import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';
import { device } from '../../../devices/Breakpoints';

const { background300, primary300 } = theme.colors.brand;

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 20px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  z-index: 999;
  background: ${ background300 };

  @media ${ device.tablet } {
    padding: 0 50px 0 120px;
    margin-top: 100px;
    font-size: 2rem;
  }
`
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${ device.tablet } {
    border-bottom: 2px solid ${primary300};
    padding-bottom: 10px;
  }

`

export const BigButtonWrapper = styled.div`
  width: 250px;
`