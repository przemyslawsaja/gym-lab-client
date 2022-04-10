import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

const Paragraph = styled.p<{ color?: string,  fontSize?: string, inline?: boolean, bold?: boolean, cursor?: string, hoverColor?: string}>`
  font-size: ${ ({ fontSize }) => fontSize ? fontSize : theme.fontSizes.m }; 
  color: ${ ({ color }) => color ? color : theme.colors.brand.text400 };
  margin: 0;
  font-weight: ${({bold}) => bold ? 'bold' : 'medium'};
  display: ${({inline}) => inline ? 'inline' : 'block'};
  cursor: ${({cursor}) => cursor ?? 'unset'};
  transition: 0.3s ease-in-out;
  
  &:hover {
    color: ${({hoverColor}) => hoverColor ?? 'none'}
  }
`;

export default Paragraph;