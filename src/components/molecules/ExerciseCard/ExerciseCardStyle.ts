import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

export const ExerciseCardWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background: ${theme.colors.brand.background100};
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  margin: 10px 0;
  
  button {
    width: auto;
  }
`

export const ExerciseName = styled.div`
  width: 60%;
  font-size: 2rem;
`