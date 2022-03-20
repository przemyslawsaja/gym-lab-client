import styled from 'styled-components';
import { theme } from '../../theme/MainTheme';
import img from '../../assets/img/congrats-guy.png'
const { primary300, background500, background100 } = theme.colors.brand;

export const WorkoutWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const WorkoutHeader = styled.div`
  margin-top: 20px;
  min-width: 50%;
`

export const WorkoutHeaderLine = styled.div`
  margin-top: 10px;
  width: 15rem;
  height: 2px;
  background: ${primary300};
`

export const WorkoutTable = styled.div`
  width: 100%;
  margin-top: 2rem;
`

export const WorkoutTableHeader = styled.div`
  padding: 10px;
  border-radius: 10px;
  font-size: 1.3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  background: ${background500};
  font-weight: bold;
  text-align: center;
`

export const WorkoutTableBody = styled.div`
  width: 100%;
  padding: 10px;
`

export const CongratulationsMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  padding: 0 20px;
  gap: 20px;
  text-align: center;
`

export const CongratulationsImage = styled.div`
  width: 165px;
  height: 350px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
`