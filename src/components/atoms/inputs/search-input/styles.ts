import styled from 'styled-components';
import { theme } from '../../../../theme/main-theme';

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  
  .search-icon {
    position: absolute;
    right: 12px;
    top: 12px;
  }
`

export const StyledSearchInput = styled.input<{ disabled?: boolean }>`
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 10px;
  font-family: inherit;
  color: white;
  outline: none;
  padding: 1.25rem;
  box-shadow: none;
  background: none;
  cursor: ${props => props.disabled && 'not-allowed'} ;
  
  &:hover {
    border-color: ${theme.colors.brand.primary100};
  }
  
  &:focus {
    border-color: ${theme.colors.brand.primary200};
  }
`;
