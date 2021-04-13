/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from "./Header"

const useStyles = makeStyles({
  pageWrapper: {
    // overflow: 'hidden',
    // margin: `0 auto`,
    // maxWidth: 960,
    // padding: `0 1.0875rem 1.45rem`,
  },
  footer: {
    // marginTop: `2rem`,
  }
});

const Layout = ({ children }) => {

  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [yPos, setYPos] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setYPos(window.pageYOffset);
    };
  }, []);

  const { pageWrapper, footer } = useStyles();

  return (
    <>
      {yPos > window.innerHeight && <Header />}
      <div className={pageWrapper}>
        <main>{children}</main>
        {/* <footer className={footer}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
    </>
  );
};

export default Layout;
