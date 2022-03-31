import { Link as LinkProp } from 'react-router-dom'
import { theme } from '../../../theme/MainTheme';
import styled from 'styled-components';

const ActiveColor = theme.colors.brand.primary300;
const RegularColor = theme.colors.brand.primary100;
const shadow1 = theme.colors.button.shadow.dark;
const size = 110;

export const TailWrapper = styled.button<{ active?: boolean }>`
  position: relative;
  min-width: ${ size }px;
  min-height: ${ size }px;
  background: ${ ({ active }) => active ? ActiveColor : RegularColor };
  border-radius: 15px;
  border: 3px solid ${ ({ active }) => active ? ActiveColor : RegularColor };
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 10px;
  -webkit-box-shadow: 5px 5px 20px 0px ${ shadow1 };
  -moz-box-shadow: 5px 5px 20px 0px ${ shadow1 };
  box-shadow: 5px 5px 20px 0px ${ shadow1 };


`

export const Link = styled(LinkProp)`
  text-decoration: none;

  &:active:visited {
    color: #fff;
  }
`

export const DetailsTabLabel = styled.div<{ isActive: boolean }>`
  color: ${ props => props.isActive ? theme.colors.brand.quaternary300 : theme.colors.brand.text400 };
  margin-right: 30px;
  font-size: 2rem;
  border-bottom:  ${ props => props.isActive ? ` 2px solid ${theme.colors.brand.quaternary300}` : null};
  margin-bottom: 50px;
  font-weight: ${ props => props.isActive ? 'bold' : 'normal'};

  &:hover {
    color: ${ theme.colors.brand.quaternary300 };
  }
`