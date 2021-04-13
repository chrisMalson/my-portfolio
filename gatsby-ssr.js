/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import ThemeLayout from './src/utils/ThemeLayout';

export const wrapRootElement = ({ element }) => {
  return <ThemeLayout>{element}</ThemeLayout>;
};