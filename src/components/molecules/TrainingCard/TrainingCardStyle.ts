import { theme } from '../../../theme/MainTheme';
import { Link as LinkProp } from 'react-router-dom'
import styled from 'styled-components'

export const CardSize = {
  width: '330px',
  height: '150px',
}

export const Link = styled(LinkProp)`
  text-decoration: none;
`
export const Card = styled.div`
  cursor: pointer;
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 25px;
  padding: 20px 10px 20px 20px;
  width: ${ CardSize.width };
  height: ${ CardSize.height };
  background: ${ theme.colors.brand.background100 };
  -webkit-box-shadow: 0px 3px 13px -4px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 3px 13px -4px rgba(0, 0, 0, 1);
  box-shadow: 0px 3px 15px -10px rgba(0, 0, 0, 1);
  

  &:hover {
    outline: 2px solid ${ theme.colors.brand.quaternary300 };
  }
`

export const CardBackgroundImage = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  width: 60%;
  background-size: contain;
  opacity: 0.15;
  background: url("https://media.istockphoto.com/photos/holding-weight-and-sitting-picture-id1277242852?b=1&k=20&m=1277242852&s=170667a&w=0&h=JRJsVDFKO_i9omBAMNySqCfwvRTB-yeVrjJY2jd7JZw=") no-repeat center;
  border-radius: 0 25px 25px 0;
`
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  
  p {
    font-size: 1.4rem;
  }
`

export const CardOptions = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  gap: 10px;
`

export const WorkoutBtnWrapper = styled.div`
  z-index: 10;
`
