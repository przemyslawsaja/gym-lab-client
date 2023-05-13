import styled from 'styled-components';
import { device } from '../../devices/Breakpoints';

export const AccountWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;


  @media ${ device.laptopL } {
    width: 50%;
  }
`;

export const ProfileImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${ device.laptopL } {
    justify-content: flex-start;
    margin-left: 50px;
  }
`

export const SignOutButton = styled.div`
  @media ${ device.laptopL } {
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 300px;
  }
`
