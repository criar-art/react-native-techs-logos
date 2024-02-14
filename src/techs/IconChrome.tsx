import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#EF3F36"
      d="M16 2.004s8.253-.37 12.628 7.896h-13.33s-2.515-.08-4.664 2.96c-.617 1.276-1.28 2.591-.536 5.182-1.073-1.81-5.695-9.83-5.695-9.83S7.663 2.331 16 2.004Z"
    />
    <Path
      fill="#FCD900"
      d="M28.2 22.986s-3.808 7.308-13.176 6.947l6.667-11.503s1.331-2.13-.24-5.504c-.798-1.173-1.612-2.4-4.235-3.053 2.11-.019 11.389 0 11.389 0s3.476 5.755-.406 13.113Z"
    />
    <Path
      fill="#61BC5B"
      d="M3.86 23.043s-4.449-6.939.55-14.842l6.664 11.502s1.188 2.214 4.903 2.544c1.416-.103 2.89-.192 4.773-2.125-1.038 1.83-5.695 9.826-5.695 9.826s-6.744.123-11.196-6.905Z"
    />
    <Path
      fill="#5AB055"
      d="m15.02 30.001 1.875-7.796s2.06-.161 3.79-2.049c-1.073 1.88-5.664 9.845-5.664 9.845Z"
    />
    <Path
      fill="#fff"
      d="M9.72 16.089c0-3.437 2.797-6.224 6.246-6.224 3.449 0 6.246 2.787 6.246 6.224 0 3.437-2.797 6.224-6.246 6.224-3.45-.004-6.246-2.787-6.246-6.224Z"
    />
    <Path
      fill="url(#a)"
      d="M10.766 16.09c0-2.86 2.326-5.183 5.2-5.183 2.87 0 5.2 2.318 5.2 5.182 0 2.86-2.325 5.182-5.2 5.182-2.87 0-5.2-2.322-5.2-5.182Z"
    />
    <Path
      fill="#EACA05"
      d="m28.6 9.877-7.72 2.256s-1.164-1.703-3.668-2.256c2.172-.012 11.389 0 11.389 0Z"
    />
    <Path
      fill="#DF3A32"
      d="M9.947 17.758c-1.084-1.872-5.544-9.546-5.544-9.546l5.718 5.636s-.587 1.203-.367 2.925l.193.985Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={15.966}
        x2={15.966}
        y1={10.98}
        y2={20.959}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#86BBE5" />
        <Stop offset={1} stopColor="#1072BA" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
