// base
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// assets
import 'antd/dist/antd.css';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Nodebird</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default App;