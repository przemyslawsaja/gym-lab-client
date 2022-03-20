import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

export const ExerciseDetailsTable = styled.div`
  margin-top: 20px;
  width: 100%;
`

export const ExerciseDetailsName = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  padding: 0 10px;
  color: ${theme.colors.brand.quaternary300};
`

export const ExerciseDetailsTableHeader = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  background: ${theme.colors.brand.background500};
  font-weight: bold;
  border-radius: 10px;
  width: 100%;
  font-size: 1.4rem;
  gap: 5px;
  
  span {
    justify-self: center;
  }
`

export const ExerciseSetItem = styled.div`
  margin: 10px 0;
  border-radius: 10px;
  width: 100%;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  display: grid;  
  padding: 20px 0;
  background: ${theme.colors.brand.background100};
  font-size: 1.6rem;
  align-items: center;
  
  span {
    justify-self: center;

    &:last-child {
      margin-top: 2px;
    }
  }
  
  input { 
   
    align-self: center;
  }
`

export const ExerciseSeriesNumber = styled.div`
  width: 25px;
  height: 25px;
  background: ${theme.colors.brand.quaternary300};
  color: ${ theme.colors.brand.background300};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  justify-self: center;
`

export const ExerciseSetInputWrapper = styled.div`
  width: 90px;
  align-self: center;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
`