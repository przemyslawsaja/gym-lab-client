import styled from 'styled-components';

export const HomeWrapper = styled.div`
  padding: 30px 0;
  width: 350px;
  margin: 0 auto;
  height: 100vh;
  max-height: 800px;
  min-height: 600px;
  position: relative;
  & > div {
    margin-left: auto;
    margin-right: auto;
    &:first-of-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 335px;
      & > div {
        padding-right: 20px;
      }
    }
  }
`;

export const Rectangle = styled.div`
  width: 335px;
  height: 150px;
  background: ${ ({ theme }) => theme.color100 };
  border-radius: 15px;
  margin-top: 50px;
`;