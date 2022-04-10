import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

const Paragraph = styled.p<{ color?: string,  fontSize?: string, inline?: boolean, bold?: boolean}>`
  font-size: ${ ({ fontSize }) => fontSize ? fontSize : theme.fontSizes.m }; 
  color: ${ ({ color }) => color ? color : theme.colors.brand.text400 };
  margin: 0;
  font-weight: ${({bold}) => bold ? 'bold' : 'medium'};
  display: ${({inline}) => inline ? 'inline' : 'block'};
`;

export default Paragraph;