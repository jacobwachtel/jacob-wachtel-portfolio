import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Sidebar = () => {
   return (
      <Wrapper>
         <WhiteLine />
         <SocialList>
            <a href="https://github.com/jacobwachtel">
               <GitHub />
            </a>
            <a href="https://twitter.com/jacobwachtel">
               <Twitter />
            </a>
            <a href="https://www.linkedin.com/in/jacob-wachtel/">
               <LinkedIn />
            </a>
         </SocialList>
      </Wrapper>
   );
};

export default Sidebar;

const Wrapper = styled.div`
   height: 100vh;
   width: 10rem;
   position: fixed;
   top: -10%;
   left: 0;
   display: flex;
   align-items: flex-end;
   justify-content: center;
`;

const WhiteLine = styled.div`
   height: 30%;
   border-left: 1px solid #b9b9b9;
   align-self: flex-start;
   position: relative;
   bottom: -50%;
   left: 2rem;
`;

const SocialList = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: 2rem;
   color: #eee;

   & > a {
      padding: 1rem;
      text-decoration: none;
   }
`;

const GitHub = styled(FiGithub)`
   color: var(--color-red);
`;

const Twitter = styled(FiTwitter)`
   color: var(--color-red);
`;
const LinkedIn = styled(FiLinkedin)`
   color: var(--color-red);
`;
