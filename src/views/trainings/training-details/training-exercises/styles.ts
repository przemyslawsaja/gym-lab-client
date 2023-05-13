import styled from 'styled-components'

export const ExercisesHeader = styled.div`
  padding: 20px 20px 10px 20px;
 `
export const ExercisesContainer = styled.div`
  padding: 0 10px ;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
 
  &::-webkit-scrollbar {
   display: none; /* for Chrome, Safari, and Opera */
  }
 `