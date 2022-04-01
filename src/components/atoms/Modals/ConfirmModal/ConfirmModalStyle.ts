import styled from 'styled-components';
import { theme } from '../../../../theme/MainTheme';
import { device } from '../../../../devices/Breakpoints';

export const ConfirmModalWrapper = styled.div<{width?: number}>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  width: ${props => props.width ? props.width : '90%'};
  min-height: 250px;
  border-radius: 10px;
  background: ${theme.colors.brand.background100};
  -webkit-box-shadow: 0px 6px 24px -9px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 6px 24px -9px rgba(0, 0, 0, 1);
  box-shadow: 0px 6px 24px -9px rgba(0, 0, 0, 1);

  @media ${ device.tabletL } {
    width: 400px;
  }
  
  .close-modal {
    position: absolute;
    right: 10px;
    top: 10px;
  }

`
export const ConfirmModalBody = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-top: 50px;
  padding: 15px;
  width: 100%;
`

export const ConfirmModalFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 10px;
`