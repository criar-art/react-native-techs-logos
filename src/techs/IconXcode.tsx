import Svg, {
  type SvgProps,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 32" {...props}>
    <Circle cx={16} cy={16} r={14} fill="url(#a)" />
    <Path
      fill="#fff"
      d="M18.447 8.654a1.106 1.106 0 0 0-.404-1.507 1.096 1.096 0 0 0-1.5.406l-.528.921-.527-.92a1.096 1.096 0 0 0-1.5-.407 1.106 1.106 0 0 0-.404 1.507l1.164 2.032-3.683 6.429H8.098A1.1 1.1 0 0 0 7 18.218a1.1 1.1 0 0 0 1.098 1.104h10.334c.091-.24.186-.65.085-1.027-.153-.567-.717-1.18-1.663-1.18H13.6l4.847-8.461ZM11.636 20.542c-.187-.21-.607-.543-.975-.653-.561-.168-.987-.063-1.202.029l-.818 1.428a1.106 1.106 0 0 0 .404 1.507 1.095 1.095 0 0 0 1.5-.406l1.091-1.905Z"
    />
    <Path
      fill="#fff"
      d="M22.23 19.322h1.672A1.1 1.1 0 0 0 25 18.218a1.1 1.1 0 0 0-1.098-1.103h-2.937l-3.308-5.774c-.245.235-.716.834-.788 1.514-.091.873.046 1.609.458 2.329 1.385 2.422 2.772 4.842 4.158 7.263.303.528.974.71 1.5.406.526-.304.707-.979.404-1.507l-1.16-2.024Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={16}
        x2={16}
        y1={2}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2AC9FA" />
        <Stop offset={1} stopColor="#1F65EB" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
