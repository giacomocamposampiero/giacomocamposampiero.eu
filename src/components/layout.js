import React from 'react';
import styled from 'styled-components';
import 'prismjs/themes/prism.css';
import Nav from './navbar';
import Header from './header';
import GlobalStyle from './style';

const Main = styled.main`
  max-width: 83rem;
  padding: 1em 1em 2em;
  margin: 0 auto;

  @media (min-width: 350px) {
    padding: 1em 1.5em 4em;
  }

  @media (min-width: 520px) {
    padding: 2rem 2em 6rem;
  }
`;

const StyledHeader = styled.header`
  margin-bottom: 4rem;
`;

const StyledTitle = styled.h1`
  // margin-bottom: 2rem;
  margin: 0.3em 0;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;

  @media (min-width: 350px) {
    margin: 0.5em 0 0.2em;
  }

  @media (min-width: 520px) {
    margin: 0.667em 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyle />
      <Header />
      <StyledHeader>
        <StyledTitle>
          giacomo camposampiero
        </StyledTitle>

        <Nav />
      </StyledHeader>

      {children}
    </Main>
  );
};

export default Layout;