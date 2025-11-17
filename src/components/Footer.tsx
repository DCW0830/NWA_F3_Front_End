import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  FooterContainer,
  FooterMain,
  FooterInner,
  FooterContent,
  FooterLogo,
  FooterEmail,
  FooterSocial,
  FooterSocialButton,
  CopyrightBar,
} from './styled';
import logoHorizontal from '../assets/f3-logo-horizontal.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterMain>
        <FooterInner>
          <FooterContent>
            <FooterLogo src={logoHorizontal} alt="F3 North Arkansas Footer Logo" />
            <FooterEmail>
              | <a href="mailto:info@f3nwa.com">info@f3nwa.com</a> |
            </FooterEmail>
            <FooterSocial>
              <FooterSocialButton href="https://x.com/f3nwarkansas" target="_blank" aria-label="Twitter">
                <TwitterIcon />
              </FooterSocialButton>
              <FooterSocialButton href="https://www.facebook.com/F3NWArkansas/" target="_blank" aria-label="Facebook">
                <FacebookIcon />
              </FooterSocialButton>
              <FooterSocialButton href="https://www.instagram.com/f3nwarkansas/" target="_blank" aria-label="Instagram">
                <InstagramIcon />
              </FooterSocialButton>
            </FooterSocial>
          </FooterContent>
        </FooterInner>
      </FooterMain>
      <CopyrightBar>© COPYRIGHT 2015 - {currentYear}</CopyrightBar>
    </FooterContainer>
  );
};
