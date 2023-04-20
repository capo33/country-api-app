import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon,
} from './footerStyle'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            Country API
          </SocialLogo>
          <WebsiteRights>&copy; MOHAMED (CAPO) {year}</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://github.com/capo33"
              aria-label="Facebook"
            >
              <GitHubIcon />
            </SocialIconLink>
            <SocialIconLink href="/" aria-label="Twitter">
              <TwitterIcon />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/mohamed-capo/"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
