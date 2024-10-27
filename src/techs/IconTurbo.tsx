import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  type SvgProps,
} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" viewBox="20 20 64 44" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M51.888 37.926c-7.699 0-13.962 6.264-13.962 13.962 0 7.699 6.263 13.962 13.962 13.962 7.698 0 13.962-6.263 13.962-13.962 0-7.698-6.264-13.962-13.962-13.962Zm0 21.188a7.225 7.225 0 0 1-7.226-7.226 7.225 7.225 0 0 1 7.226-7.225 7.225 7.225 0 0 1 7.225 7.225 7.225 7.225 0 0 1-7.225 7.226Z"
      />
      <Path
        fill="url(#b)"
        fillRule="evenodd"
        d="M53.058 35.633V30.42c11.33.606 20.332 9.987 20.332 21.468 0 11.482-9.001 20.86-20.332 21.468v-5.213c8.445-.603 15.132-7.66 15.132-16.255 0-8.595-6.687-15.652-15.132-16.255ZM39.575 62.548a16.234 16.234 0 0 1-3.94-9.49H30.42a21.409 21.409 0 0 0 5.462 13.18l3.69-3.69h.002Zm11.143 10.808v-5.213a16.218 16.218 0 0 1-9.492-3.939l-3.69 3.69a21.407 21.407 0 0 0 13.18 5.462h.002Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={53.901}
        x2={32.768}
        y1={33.439}
        y2={54.572}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0096FF" />
        <Stop offset={1} stopColor="#FF1E56" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h104v104H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
