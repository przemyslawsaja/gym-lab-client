import styled from 'styled-components'
import { device } from '../../devices/Breakpoints';

export const Container = styled.div`
  height: 100vh;
  overflow: auto;
  margin-top: 80px;
  margin-bottom: 90px;
  padding: 0 20px;
  padding-bottom: 170px;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.tabletL} {
    padding-bottom: 0;
    margin: 10rem 0 0 100px;
  }
`
