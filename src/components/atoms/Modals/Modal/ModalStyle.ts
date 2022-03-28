import styled from 'styled-components';
import { theme } from '../../../../theme/MainTheme';

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: absolute;
  background: black;
  opacity: 0.5;
  z-index: 1000;
`
export const ModalWrapper = styled.div<{fillWindow?: boolean}>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  width: ${props => props.fillWindow ? '100vw' : '60%'};
  height: ${props => props.fillWindow ? '100vh' : 'auto'};
  border-radius: 10px;
  background: ${theme.colors.brand.background300};
  -webkit-box-shadow: 0px 6px 24px -9px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 6px 24px -9px rgba(0, 0, 0, 1);
  box-shadow: 0px 6px 24px -9px rgba(0, 0, 0, 1);

  .close-modal {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  
`

export const ModalHeader = styled.div`
  display: flex;
  width: 60%;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
  margin-top: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;
`

export const ModalBody = styled.div`
  padding: 10px;
  width: 100%;
  height: 700px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`

export const ModalFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background: ${theme.colors.brand.background300};
  display: flex;
  gap: 10px;
  border-radius: 0 0 10px 10px;
`