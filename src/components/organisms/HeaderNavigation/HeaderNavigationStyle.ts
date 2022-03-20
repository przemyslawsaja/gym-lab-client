import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

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
  background: ${theme.colors.brand.background300};
`
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`
