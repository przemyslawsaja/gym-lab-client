import styled from 'styled-components';
import H1Proto from '../../components/atoms/H1/H1';
import { device } from '../../devices/Breakpoints';

export const H1 = styled(H1Proto)`
  position: relative;
  margin-bottom: 17px;
  ::after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -17px;
    background: ${ ({ theme }) => theme.color400 };
    height: 1px;
  }
`;

export const AccountWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;


  @media ${ device.laptopL } {
    width: 50%;
  }
`;

export const TilesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
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