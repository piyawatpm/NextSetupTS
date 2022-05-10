import '../styles/globals.css';
import * as NextImage from 'next/image';

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, 'default', {
//   configurable: false,
//   value: (props) => <OriginalNextImage {...props} unoptimized={true} />,
// });

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => typeof props.src === 'string' ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ) : (
    <OriginalNextImage {...props} unoptimized />
  ),
});

Object.defineProperty(NextImage, "__esModule", {
  configurable: true,
  value: true
});
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};
