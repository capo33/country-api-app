import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PublicIcon from '@material-ui/icons/Public'
import * as global from '../../variable'

export const FooterContainer = styled.div`
  background-color: ${global.grayColor};
  color: ${global.darkColor};
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  display: flex;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: ${global.darkColor};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

export const SocialIcon = styled(PublicIcon)`
  margin-right: 10px;
`

export const WebsiteRights = styled.small`
  color: ${global.darkColor};
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-bottom: 16px;
`

export const SocialIconLink = styled.a`
  color: ${global.darkColor};
  font-size: 24px;
  margin-bottom: 16px;
`
