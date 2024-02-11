import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M22.594 19.84 8.892 28l17.742-1.207L28 8.852 22.594 19.84Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#b)"
      fillRule="evenodd"
      d="m26.663 26.78-1.525-10.554-4.154 5.5 5.68 5.055Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#c)"
      fillRule="evenodd"
      d="m26.684 26.78-11.172-.88-6.56 2.077 17.732-1.197Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#d)"
      fillRule="evenodd"
      d="m8.967 27.98 2.79-9.169-6.14 1.317 3.35 7.852Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#e)"
      fillRule="evenodd"
      d="m27.418 11.812-6.947-5.69-1.935 6.272 8.882-.582Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#f)"
      fillRule="evenodd"
      d="m24.168 4.093-4.085 2.265-2.578-2.295 6.663.03Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#g)"
      fillRule="evenodd"
      d="m4 23.203 1.712-3.13-1.385-3.73L4 23.204Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m4.235 16.226 1.393 3.962 6.053-1.361 6.911-6.44 1.95-6.213L17.472 4 12.25 5.96c-1.645 1.533-4.837 4.569-4.952 4.626-.114.058-2.108 3.837-3.064 5.64Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#h)"
      d="m11.723 18.788 6.869-6.402.003-.01 2.388 9.38-9.26-2.968Z"
    />
    <Path
      fill="url(#i)"
      fillRule="evenodd"
      d="M9.126 9.108c3.565-3.545 8.16-5.639 9.925-3.855 1.762 1.785-.107 6.121-3.672 9.665-3.565 3.543-8.104 5.753-9.866 3.968-1.764-1.783.048-6.235 3.613-9.778Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#j)"
      fillRule="evenodd"
      d="m8.967 27.976 2.769-9.198 9.196 2.963c-3.325 3.126-7.023 5.77-11.965 6.235Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#k)"
      fillRule="evenodd"
      d="m18.604 12.368 2.36 9.377c2.778-2.928 5.27-6.077 6.492-9.971l-8.852.594Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#l)"
      fillRule="evenodd"
      d="M27.432 11.822c.945-2.86 1.163-6.962-3.293-7.723l-3.656 2.025 6.949 5.698Z"
      clipRule="evenodd"
    />
    <Path
      fill="#9E1209"
      fillRule="evenodd"
      d="M4 23.162c.13 4.72 3.526 4.79 4.972 4.83l-3.34-7.823L4 23.162Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#m)"
      fillRule="evenodd"
      d="M18.617 12.383c2.134 1.315 6.436 3.957 6.523 4.006.136.076 1.855-2.907 2.245-4.593l-8.768.587Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#n)"
      fillRule="evenodd"
      d="m11.732 18.778 3.702 7.162c2.19-1.19 3.903-2.641 5.473-4.195l-9.175-2.967Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#o)"
      fillRule="evenodd"
      d="m5.617 20.178-.524 6.263c.99 1.356 2.351 1.474 3.78 1.368-1.034-2.579-3.098-7.735-3.256-7.63Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#p)"
      fillRule="evenodd"
      d="m20.462 6.14 7.354 1.034c-.393-1.668-1.598-2.744-3.652-3.08l-3.702 2.045Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={25.086}
        x2={20.002}
        y1={30.183}
        y2={21.231}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FB7655" />
        <Stop offset={0.41} stopColor="#E42B1E" />
        <Stop offset={0.99} stopColor="#900" />
        <Stop offset={1} stopColor="#900" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={27.609}
        x2={21.072}
        y1={22.653}
        y2={18.279}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#871101" />
        <Stop offset={0.99} stopColor="#911209" />
        <Stop offset={1} stopColor="#911209" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={22.388}
        x2={15.852}
        y1={30.454}
        y2={26.08}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#871101" />
        <Stop offset={0.99} stopColor="#911209" />
        <Stop offset={1} stopColor="#911209" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={8.688}
        x2={9.705}
        y1={19.474}
        y2={26.066}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.23} stopColor="#E57252" />
        <Stop offset={0.46} stopColor="#DE3B20" />
        <Stop offset={0.99} stopColor="#A60003" />
        <Stop offset={1} stopColor="#A60003" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={21.819}
        x2={22.941}
        y1={7.1}
        y2={11.92}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.18} stopColor="#E46342" />
        <Stop offset={0.4} stopColor="#C82410" />
        <Stop offset={0.99} stopColor="#A80D00" />
        <Stop offset={1} stopColor="#A80D00" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={18.412}
        x2={23.225}
        y1={5.402}
        y2={3.002}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.54} stopColor="#C81F11" />
        <Stop offset={0.99} stopColor="#BF0905" />
        <Stop offset={1} stopColor="#BF0905" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={4.473}
        x2={4.871}
        y1={17.794}
        y2={21.766}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.31} stopColor="#DE4024" />
        <Stop offset={0.99} stopColor="#BF190B" />
        <Stop offset={1} stopColor="#BF190B" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={15.645}
        x2={16.02}
        y1={13.319}
        y2={20.046}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.23} stopColor="#E4714E" />
        <Stop offset={0.56} stopColor="#BE1A0D" />
        <Stop offset={0.99} stopColor="#A80D00" />
        <Stop offset={1} stopColor="#A80D00" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={1.752}
        x2={20.408}
        y1={22.84}
        y2={3.711}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#BD0012" />
        <Stop offset={0.07} stopColor="#fff" />
        <Stop offset={0.17} stopColor="#fff" />
        <Stop offset={0.27} stopColor="#C82F1C" />
        <Stop offset={0.33} stopColor="#820C01" />
        <Stop offset={0.46} stopColor="#A31601" />
        <Stop offset={0.72} stopColor="#B31301" />
        <Stop offset={0.99} stopColor="#E82609" />
        <Stop offset={1} stopColor="#E82609" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={16.002}
        x2={10.396}
        y1={24.775}
        y2={23.396}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8C0C01" />
        <Stop offset={0.54} stopColor="#990C00" />
        <Stop offset={0.99} stopColor="#A80D0E" />
        <Stop offset={1} stopColor="#A80D0E" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={25.625}
        x2={20.635}
        y1={18.031}
        y2={13.571}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#7E110B" />
        <Stop offset={0.99} stopColor="#9E0C00" />
        <Stop offset={1} stopColor="#9E0C00" />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={27.454}
        x2={24.967}
        y1={9.823}
        y2={7.172}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#79130D" />
        <Stop offset={0.99} stopColor="#9E120B" />
        <Stop offset={1} stopColor="#9E120B" />
      </LinearGradient>
      <LinearGradient
        id="o"
        x1={7.231}
        x2={5.2}
        y1={27.97}
        y2={21.099}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8B2114" />
        <Stop offset={0.43} stopColor="#9E100A" />
        <Stop offset={0.99} stopColor="#B3100C" />
        <Stop offset={1} stopColor="#B3100C" />
      </LinearGradient>
      <LinearGradient
        id="p"
        x1={22.732}
        x2={27.266}
        y1={5.19}
        y2={7.186}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B31000" />
        <Stop offset={0.44} stopColor="#910F08" />
        <Stop offset={0.99} stopColor="#791C12" />
        <Stop offset={1} stopColor="#791C12" />
      </LinearGradient>
      <RadialGradient
        id="m"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(6.09995 0 0 6.11692 21.423 13.643)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A80D00" />
        <Stop offset={0.99} stopColor="#7E0E08" />
        <Stop offset={1} stopColor="#7E0E08" />
      </RadialGradient>
      <RadialGradient
        id="n"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(8.10906 0 0 8.13164 12.976 21.704)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A30C00" />
        <Stop offset={0.99} stopColor="#800E08" />
        <Stop offset={1} stopColor="#800E08" />
      </RadialGradient>
    </Defs>
  </Svg>
)
export default SvgComponent
