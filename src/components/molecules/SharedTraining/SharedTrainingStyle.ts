import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';
import { Input } from '../../atoms/Inputs/Input/Input';

export const SharedTrainingWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

export const SharedTrainingAuthorWrapper = styled.div`
  display: flex;
  gap: 5px;
`

export const SharedTrainingAuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const SharedTrainingAuthorName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`

export const SharedTrainingAuthorLabel = styled.div`
  color: ${theme.colors.brand.text200};
  font-size: 1rem;
`

export const SharedBackgroundImageWrapper = styled.div`
  position: relative;
  height: 100%;
  margin-top: 10px;
  width: 100vw;
  margin-left: -20px
;
`
export const SharedTrainingTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`

export const SharedBackgroundImage = styled.div`
  height: 150px;
  width: 100%;
  right: 0;
  top: 0;
  opacity: 0.2;
  background: url("https://media.istockphoto.com/photos/holding-weight-and-sitting-picture-id1277242852?b=1&k=20&m=1277242852&s=170667a&w=0&h=JRJsVDFKO_i9omBAMNySqCfwvRTB-yeVrjJY2jd7JZw=") no-repeat center;
  background-size: cover;
`

export const SharedTrainingTile = styled.div`
  box-shadow: 0px 18px 24px 0px rgba(0, 0, 0, 0.05);
  width: 100vw;
  margin-left: -20px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: ${theme.colors.brand.background100};
`

export const SharedTrainingSettings = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
`

export const SharedTrainingIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 5px 0;
  align-items: center;

`
export const SharedTrainingLeftIcons = styled.div`
  display: flex;
  gap: 15px;
`

export const AddCommentWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 4fr 1fr;
  gap: 10px;
  margin: 10px 0;
  
  button {
    width: 80px;
  }
`

export const SkeletonWrapper = styled.div`
  width: 100vw;
  margin-left: -20px;
  padding: 20px;
  background: ${theme.colors.brand.background100};
  margin-bottom: 20px;
`