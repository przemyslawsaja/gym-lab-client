import styled from 'styled-components';
import H1Proto from '../../components/atoms/H1/H1';

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
  width: 100%;
  position: relative;
  height: 550px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const TilesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;