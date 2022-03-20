import styled, { css } from 'styled-components';

const ProfileImage = styled.img<{ size: string }>`
  ${ ({ size }) => css`
    width: ${ size };
    height: ${ size };
  ` };
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

export default ProfileImage