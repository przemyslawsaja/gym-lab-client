import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

const Paragraph = styled.p<{ color?: string,  fontSize?: string, inline?: boolean}>`
  font-size: ${ ({ fontSize }) => fontSize ? fontSize : theme.fontSizes.m }; 
  color: ${ ({ color }) => color ? color : theme.colors.brand.text400 };
  margin: 0;
  display: ${({inline}) => inline ? 'inline' : 'block'};
`;

export default Paragraph;