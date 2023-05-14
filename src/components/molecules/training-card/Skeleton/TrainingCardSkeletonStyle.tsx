import styled from 'styled-components';
import { theme } from '../../../../theme/main-theme';
import { CardSize } from '../TrainingCardStyle';
import { device } from '../../../../devices/Breakpoints';

export const CardSkeleton = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  border-radius: 25px;
  padding: 20px 10px 20px 20px;
  transition: 0.2s ease-in-out;
  width: 100%;
  max-width: ${ CardSize.maxWidth };
  height: ${ CardSize.height };
  background: ${ theme.colors.brand.background100 };

  @media ${ device.tabletL } {
    height: 350px;
  }
`

export const CardDetailsSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const CardOptionsSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`
