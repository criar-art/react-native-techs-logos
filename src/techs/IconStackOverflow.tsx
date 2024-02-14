import Svg, { type SvgProps, G, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 113 124" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path fill="#BBB" d="M88 80h11v44H0V80h11v33h77z" />
      <Path
        fill="#F58025"
        fillRule="nonzero"
        d="m22.988 76.73 54.025 11.355 2.27-10.8-54.024-11.36-2.271 10.805Zm7.149-25.869 50.046 23.308 4.662-10.009-50.047-23.308-4.661 10.009Zm13.848-24.553 42.428 35.331 7.066-8.485-42.428-35.33-7.066 8.484ZM71.372.192l-8.86 6.59 32.948 44.3 8.86-6.589L71.372.192ZM22 102h55V91H22v11Z"
      />
    </G>
  </Svg>
);
export default SvgComponent;
