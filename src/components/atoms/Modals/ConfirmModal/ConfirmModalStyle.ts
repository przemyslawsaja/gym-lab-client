import styled from 'styled-components';
import { theme } from '../../../../theme/MainTheme';

export const ConfirmModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  width: 90%;
  min-height: 250px;
  border-radius: 10px;
  background: ${theme.colors.brand.background100};
  -webkit-box-shadow: 0px 6px 24px -9px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 6px 24px -9px rgba(0, 0, 0, 1);
  box-shadow: 0px 6px 24px -9px rgba(0, 0, 0, 1);

  .close-modal {
    position: absolute;
    right: 10px;
    top: 10px;
  }

`
export const ConfirmModalBody = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-top: 50px;
  padding: 10px;
  width: 100%;
  text-align: center;
`

export const ConfirmModalFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 10px;
`