import styled from 'styled-components';
import { device } from '../../devices/Breakpoints';

export const TrainingsWrapper = styled.ul`
  list-style-type: none;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  max-height: 78vh;
  overflow-x: hidden;
  overflow-y: auto;

  @media ${device.laptop} {
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
  }
  
`