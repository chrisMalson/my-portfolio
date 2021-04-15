import ThemeLayout from './src/utils/ThemeLayout';

export const wrapRootElement = ({ element }) => {
  return <ThemeLayout>{element}</ThemeLayout>;
};