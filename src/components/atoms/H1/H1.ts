import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

const H1 = styled.h1<{ color?: string }>`
  font-size: ${ theme.fontSizes.l };
  color: ${ ({ color }) => color ? color : '#fff' };
  margin: 0;
`;

export default H1;