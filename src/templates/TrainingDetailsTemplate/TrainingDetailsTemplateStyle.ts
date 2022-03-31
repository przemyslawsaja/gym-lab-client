import styled from 'styled-components'

export const TailsWrapper = styled.div`
  display: flex; 
  overflow-x: scroll;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`