import styled from 'styled-components';
import { theme } from '../../theme/MainTheme';

export const AuthorizationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
`
export const AuthorizationButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  gap: 20px;
  width: 100%;
`

export const AuthorizationForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`

export const AuthorizationSubLink = styled.span`
  font-size: 1.3rem;
  text-align: center;
  color: grey;
  
  a {
    font-weight: bold;
    color: ${theme.colors.brand.primary300};
    border-bottom: 1px solid  ${theme.colors.brand.primary300};
    
    &:hover {
      color: ${theme.colors.brand.primary400};
      border-bottom: 1px solid  ${theme.colors.brand.primary400};
    }
  }
`