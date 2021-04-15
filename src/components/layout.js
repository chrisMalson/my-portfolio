import { useState, useEffect } from 'react';

import Header from "./Header"

const Layout = ({ children }) => {
  const [yPos, setYPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => setYPos(window.pageYOffset);
  }, []);

  useEffect(() => {
    if (yPos > window.innerHeight - 1) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }
  }, [yPos])

  return (
    <>
      {headerVisible && <Header />}
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
