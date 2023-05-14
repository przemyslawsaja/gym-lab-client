import styled from 'styled-components';

export const TimerContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Timer = styled.div<{radius?: number}>`
  height: ${props => props.radius ? `${props.radius}px` : '200px'};
  width:  ${props => props.radius ? `${props.radius}px` : '200px'};
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const TimerEditWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const TimerEditLine = styled.div`
  padding: 0 20px;
  height: 2px;
  width: 50px;
  background-color: #434758;
`
