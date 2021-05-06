import ThemeLayout from './src/utils/ThemeLayout';
import '@fontsource/rubik';
import '@fontsource/rock-salt'

export const wrapRootElement = ({ element }) => {
  return <ThemeLayout>{element}</ThemeLayout>;
};