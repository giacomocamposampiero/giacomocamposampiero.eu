import normalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    text-align: justify;
    text-justify: inter-word;
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.5em;
    font-size: 1.8rem;
    font-family: 'Rubik', sans-serif;
    word-break: break-word;
    background-color: white;
    color: black;
  }

  article {
    margin-bottom: 1em;
  }

  p.info {
    margin-top: -0.5em;
    color: #999;
  }

  a.info {
    color: #999;
  }

  h1, h2, h4, h5, h6 {
    font-family: 'Rubik', sans-serif;
    margin: 0.5em 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  blockquote {
    margin-left: 1em;
    margin-right: 1em;

    @media (min-width: 520px) {
      margin-left: 2em;
      margin-right: 2em;
    }
  }

  a {
    text-decoration: none;
    color: #808080;
    border-bottom: 2px solid transparent;

    &:hover {
      color: #999;
      border-color: #999;
    }

    &.anchor {
      border: none;
    }
  }

  .subtit {
    font-weight: bold;
  }

  

`;

export default GlobalStyle;