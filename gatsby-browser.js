import ThemeLayout from './src/utils/ThemeLayout';
import '@fontsource/rubik';

export const wrapRootElement = ({ element }) => {
  return <ThemeLayout>{element}</ThemeLayout>;
};