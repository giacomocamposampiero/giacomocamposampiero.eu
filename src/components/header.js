import React from 'react';
import Helmet from 'react-helmet';

const Header = () => {
  return (
    <Helmet>
        <title>Giacomo Camposampiero</title>
        <meta property="og:title" content="Giacomo Camposampiero" />
        <meta property="og:description" content="Personal Website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://giacomocamposampiero.github.io" />
        <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

export default Header;