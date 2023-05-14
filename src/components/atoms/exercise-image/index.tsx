import styled from 'styled-components'

export const ExerciseImage = styled.img`
  width: 120px;
  height: 80px;
  border-radius: 10px;
  border: 2px solid ${ ({ theme }) => theme.colors.primmary.color1 };
  background-size: cover;
  box-shadow: 5px 5px 11px -6px ${ ({ theme }) => theme.colors.button.shadow.dark },
    -5px -5px 11px -6px ${ ({ theme }) => theme.colors.button.shadow.light };
`