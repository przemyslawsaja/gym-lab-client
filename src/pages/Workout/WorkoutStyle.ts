import styled from 'styled-components';
import { theme } from '../../theme/MainTheme';
import img from '../../assets/img/congrats-guy.png'
import { device } from '../../devices/Breakpoints';

const { primary300, background500 } = theme.colors.brand;

export const WorkoutWrapper = styled.div`
  width: 100%;
  position: relative;

  @media ${ device.laptopL } {
    display: grid;
    margin-top: 50px;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const CarouselWrapper = styled.div`
  @media ${ device.tabletS } {
    width: 70%;
  }

  @media ${ device.tabletL } {
    margin-top: 50px;
  }

  @media ${ device.laptop } {
    width: 60%;
  }

  @media ${ device.laptopL } {
    width: 100%
  }
`
export const WorkoutHeader = styled.div`
  margin-top: 20px;
  min-width: 50%;
`

export const WorkoutHeaderTitle = styled.span`
  font-weight: bold;
  font-size: 1.8rem;

  @media ${ device.laptop } {
    font-size: 3rem;
    color: ${ theme.colors.brand.text200 }
  }
`
export const WorkoutHeaderLine = styled.div`
  margin-top: 10px;
  width: 15rem;
  height: 2px;
  background: ${ primary300 };

  @media ${ device.laptop } {
    display: none;
  }
`

export const WorkoutTable = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media ${ device.laptop } {
    margin-top: 4rem;
  }
`

export const WorkoutTableHeader = styled.div`
  padding: 10px;
  border-radius: 10px;
  font-size: 1.3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  background: ${ background500 };
  font-weight: bold;
  text-align: center;

  @media ${ device.laptop } {
    font-size: 2rem;
  }
`

export const WorkoutTableBody = styled.div`
  width: 100%;
  padding: 10px;
`

export const CongratulationsMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  padding: 0 20px;
  gap: 20px;
  text-align: center;
`

export const CongratulationsImage = styled.div`
  width: 165px;
  height: 350px;
  background-image: url(${ img });
  background-repeat: no-repeat;
  background-size: contain;
`

export const WorkoutFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const WorkoutFooter = styled.div`
  display: none;

  @media ${ device.tabletL } {
    bottom: 100px;
    width: min-content;
    gap: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 100px 0 200px 0;
    padding-right: 20px;

    button {
      &:nth-child(1) {
        width: 220px;
        padding: 20px 0;
      }

      &:nth-child(3) {
        width: 200px;
        padding: 20px 0;
      }
    }
  }

  @media ${ device.laptop } {
    button {
      &:nth-child(1) {
        width: 300px;
        padding: 20px 0;
      }

      &:nth-child(3) {
        width: 300px;
        padding: 20px 0;
      }
    }
  }
`