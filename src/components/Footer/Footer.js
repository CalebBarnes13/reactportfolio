import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:253-820-3149">253-820-3149</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:iamcalebbarnes@gmail.com">iamcalebbarnes@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Just keep moving</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/CalebBarnes13">
        <AiFillGithub size={"3rem"}/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/calebbarnes13/in">
        <AiFillLinkedin size={"3rem"}/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/iamcalebbarnes/">
        <AiFillInstagram size={"3rem"}/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
