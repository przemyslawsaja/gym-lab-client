import styled, { css } from 'styled-components';
import { theme } from '../../../theme/MainTheme';

const ActiveColor1 = theme.colors.button.secondary.color1;
const ActiveColor2 = theme.colors.button.secondary.color2;
const RegularColor1 = theme.colors.card.color1;
const RegularColor2 = theme.colors.card.color2;
const shadow1 = theme.colors.button.shadow.dark;
const shadow2 = theme.colors.button.shadow.light;


export const BookmarkWrapper = styled.div<{ isBookMarkExpanded: boolean }>`
  width: 100%;
  min-height: 50px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 20px 0px ${ shadow1 }, -5px -5px 20px 0px ${ shadow2 };
  -moz-box-shadow: 5px 5px 20px 0px ${ shadow1 }, -5px -5px 20px 0px ${ shadow2 };    
  box-shadow: 5px 5px 20px 0px ${ shadow1 }, -5px -5px 20px 0px ${ shadow2 };

  ${ ({ isBookMarkExpanded }) => css`  
    background: -moz-linear-gradient(135deg, 
                ${ isBookMarkExpanded ? ActiveColor1 : RegularColor1 } 0%, 
                ${ isBookMarkExpanded ? ActiveColor2 : RegularColor2 } 100%); 
    background: -webkit-linear-gradient(135deg, 
                ${ isBookMarkExpanded ? ActiveColor1 : RegularColor1 } 0%, 
                ${ isBookMarkExpanded ? ActiveColor2 : RegularColor2 } 100%);       
    background: linear-gradient(135deg,
                ${ isBookMarkExpanded ? ActiveColor1 : RegularColor1 } 0%, 
                ${ isBookMarkExpanded ? ActiveColor2 : RegularColor2 } 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(
    startColorstr=${ isBookMarkExpanded ? ActiveColor1 : RegularColor1 },
    endColorstr =${ isBookMarkExpanded ? ActiveColor1 : RegularColor2 },
    Gr adientType=1);
  ` }
 
`
export const BookmarkItems = styled.div`
  z-index: -1;
  width: 100%;
  padding: 10px 0 20px;
  transition: ease-in 0.5s;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
