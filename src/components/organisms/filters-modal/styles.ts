import styled, {css} from 'styled-components'

export const ModalWrapper = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  padding: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  ${({theme}) => css`
  background: ${theme.colors.background.gradient.color1};
  background: -moz-linear-gradient(0deg, 
            ${theme.colors.background.gradient.color1} 0%, 
            ${theme.colors.background.gradient.color2} 100%);
  background: -webkit-linear-gradient(0deg, 
            ${theme.colors.background.gradient.color1} 0%, 
            ${theme.colors.background.gradient.color2} 100%);
  background: linear-gradient(0deg,
            ${theme.colors.background.gradient.color1} 0%, 
            ${theme.colors.background.gradient.color2} 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(
    startColorstr=${theme.colors.background.gradient.color1},
    endColorstr=${theme.colors.background.gradient.color2},
    GradientType=1
    );
  `}
`
export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
`
export const RadioForm = styled.form`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`
export const LabelDetails = styled.span`
  color: ${({theme}) => theme.colors.secondary.color3};

`
export const BookmarksContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`
export const FiltersButtons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
`