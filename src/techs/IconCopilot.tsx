import Svg, {
  type SvgProps,
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 120 120" {...props}>
    <Path
      fill="url(#a)"
      d="M85.855 18.313A11.574 11.574 0 0 0 74.75 10h-3.379a11.574 11.574 0 0 0-11.384 9.485L54.2 51.018l1.436-4.913a11.574 11.574 0 0 1 11.11-8.327H86.38l8.235 3.207 7.937-3.207h-2.316a11.574 11.574 0 0 1-11.105-8.313z"
    />
    <Path
      fill="url(#b)"
      d="M36.326 101.64A11.574 11.574 0 0 0 47.445 110h7.176c6.276 0 11.409-5.002 11.57-11.277l.781-30.405-1.634 5.583a11.574 11.574 0 0 1-11.108 8.321H34.432l-7.058-3.829-7.641 3.83h2.278c5.154 0 9.687 3.408 11.119 8.36z"
    />
    <Path
      fill="url(#c)"
      d="M74.248 10H34.15c-11.457 0-18.33 15.142-22.913 30.283-5.43 17.939-12.534 41.93 8.02 41.93H36.57c5.174 0 9.716-3.421 11.138-8.396 3.01-10.531 8.286-28.903 12.43-42.889 2.105-7.107 3.86-13.211 6.551-17.012C68.2 11.785 70.715 10 74.248 10"
    />
    <Path
      fill="url(#d)"
      d="M74.248 10H34.15c-11.457 0-18.33 15.142-22.913 30.283-5.43 17.939-12.534 41.93 8.02 41.93H36.57c5.174 0 9.716-3.421 11.138-8.396 3.01-10.531 8.286-28.903 12.43-42.889 2.105-7.107 3.86-13.211 6.551-17.012C68.2 11.785 70.715 10 74.248 10"
    />
    <Path
      fill="url(#e)"
      d="M46.744 110h40.099c11.456 0 18.33-15.144 22.913-30.288 5.429-17.942 12.533-41.937-8.02-41.937H84.422a11.576 11.576 0 0 0-11.138 8.396c-3.01 10.533-8.286 28.909-12.43 42.897-2.106 7.109-3.86 13.214-6.552 17.016-1.51 2.131-4.025 3.916-7.558 3.916"
    />
    <Path
      fill="url(#f)"
      d="M46.744 110h40.099c11.456 0 18.33-15.144 22.913-30.288 5.429-17.942 12.533-41.937-8.02-41.937H84.422a11.576 11.576 0 0 0-11.138 8.396c-3.01 10.533-8.286 28.909-12.43 42.897-2.106 7.109-3.86 13.214-6.552 17.016-1.51 2.131-4.025 3.916-7.558 3.916"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-27.40125 -33.47302 31.47539 -25.76598 95.512 51.286)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.096} stopColor="#00AEFF" />
        <Stop offset={0.773} stopColor="#2253CE" />
        <Stop offset={1} stopColor="#0736C4" />
      </RadialGradient>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(51.84 -70.254 70.14) scale(39.9779 38.7796)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFB657" />
        <Stop offset={0.634} stopColor="#FF5F3D" />
        <Stop offset={0.923} stopColor="#C02B3C" />
      </RadialGradient>
      <RadialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-31.67773 90.58917 -108.5232 -37.949 103.796 30.703)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.066} stopColor="#8C48FF" />
        <Stop offset={0.5} stopColor="#F2598A" />
        <Stop offset={0.896} stopColor="#FFB152" />
      </RadialGradient>
      <LinearGradient
        id="c"
        x1={31.75}
        x2={37.471}
        y1={18.75}
        y2={84.938}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.156} stopColor="#0D91E1" />
        <Stop offset={0.487} stopColor="#52B471" />
        <Stop offset={0.652} stopColor="#98BD42" />
        <Stop offset={0.937} stopColor="#FFC800" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={36.75}
        x2={39.874}
        y1={10}
        y2={82.213}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3DCBFF" />
        <Stop offset={0.247} stopColor="#0588F7" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={106.964}
        x2={106.923}
        y1={33.365}
        y2={53.037}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.058} stopColor="#F8ADFA" />
        <Stop offset={0.708} stopColor="#A86EDD" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
