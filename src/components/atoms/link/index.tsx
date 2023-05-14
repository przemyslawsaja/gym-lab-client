import React, { FC } from 'react'
import styled from 'styled-components'
import { Link as LinkProp, LinkProps } from 'react-router-dom'

const StyledLink = styled(LinkProp)`
  text-decoration: none;
  color: #fff;

  *:active:visited {
    color: #fff;
  }
`

interface ILink extends LinkProps {
  children: React.ReactNode;
}

const Link: FC<ILink> = ({ to, children }) => {
  return (
    <StyledLink to={ to }>
      { children }
    </StyledLink>
  )
}

export default Link
