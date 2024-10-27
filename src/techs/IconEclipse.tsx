import Svg, {
  type SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Path,
} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg preserveAspectRatio="xMidYMid" viewBox="0 -8 256 256" {...props}>
    <Defs>
      <LinearGradient id="a" x1="50%" x2="50%" y1="1089.396%" y2="-159.5%">
        <Stop offset="30.33%" stopColor="#473788" />
        <Stop offset="87.2%" stopColor="#2C2255" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1="49.999%"
        x2="49.999%"
        y1="896.537%"
        y2="-352.359%"
      >
        <Stop offset="30.33%" stopColor="#473788" />
        <Stop offset="87.2%" stopColor="#2C2255" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1="49.999%"
        x2="49.999%"
        y1="215.17%"
        y2="-166.715%"
      >
        <Stop offset="30.33%" stopColor="#473788" />
        <Stop offset="86.31%" stopColor="#2C2255" />
      </LinearGradient>
    </Defs>
    <Path
      fill="#2C2255"
      d="M251.481 152.82c-5.235 17.822-14.944 33.8-29.15 47.913l-.626.625c-17.739 17.625-38.397 28.192-61.953 31.748a123.214 123.214 0 0 1-18.406 1.368c-31.642 0-58.7-11.237-81.202-33.741-14.115-14.118-23.756-30.091-28.952-47.913Zm4.422-26.648c-.21 4.245-.65 8.394-1.285 12.464l-.22 1.353H28.296a119.367 119.367 0 0 1-1.415-12.406l-.077-1.411h229.1Zm-1.509-26.648a118.928 118.928 0 0 1 1.424 12.406l.078 1.411H26.803c.208-4.244.643-8.392 1.275-12.463l.217-1.354h226.099ZM251.486 86.69c-5.23-17.87-14.942-33.919-29.156-48.135-17.831-17.831-38.64-28.53-62.395-32.13a123.693 123.693 0 0 0-18.59-1.389c-31.641 0-58.701 11.176-81.201 33.52C46.024 52.77 36.378 68.818 31.185 86.69"
    />
    <Path
      fill="#F7941E"
      d="M19.99 119.76C19.99 59.24 65.442 8.957 124.571.112 123.104.06 121.63 0 120.15 0 53.795 0 0 53.62 0 119.76c0 66.143 53.793 119.76 120.149 119.76 1.486 0 2.96-.056 4.432-.11-59.139-8.845-104.59-59.13-104.59-119.65Z"
    />
    <Path
      fill="url(#a)"
      d="M156.201 14.27A78.06 78.06 0 0 0 153.83.452H2.65A77.99 77.99 0 0 0 .277 14.27H156.2Z"
      transform="translate(63.11 99.07)"
    />
    <Path
      fill="url(#b)"
      d="M156.201 27.103H.28A77.847 77.847 0 0 0 2.65 40.92h151.182a78.058 78.058 0 0 0 2.37-13.817Z"
      transform="translate(63.11 99.07)"
    />
    <Path
      fill="url(#c)"
      d="M78.24 98.936c31.396 0 58.459-18.498 70.921-45.185H7.32C19.78 80.438 46.844 98.936 78.24 98.936Z"
      transform="translate(63.11 99.07)"
    />
    <Path
      fill="#FFF"
      d="M254.368 139.987a113.596 113.596 0 0 1-3.032 12.833H31.19c-1.254-4.183-2.128-8.467-2.897-12.833Zm1.334-26.648c.126 2.21.208 4.429.208 6.667 0 2.07-.06 4.125-.168 6.166H26.762a116.869 116.869 0 0 1-.168-6.166c0-2.238.082-4.46.209-6.667Zm-5.116-26.648a113.864 113.864 0 0 1 3.084 12.833H28.295c.79-4.368 1.613-8.655 2.888-12.833Z"
    />
  </Svg>
);
export default SvgComponent;