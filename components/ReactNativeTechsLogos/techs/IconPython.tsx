import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
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
      d="M13.016 2C10.82 2 9.038 3.725 9.038 5.852v2.667h6.886v.74H5.978C3.781 9.26 2 10.984 2 13.111v5.778c0 2.127 1.781 3.852 3.978 3.852h2.295v-3.26c0-2.127 1.781-3.851 3.978-3.851h7.345c1.859 0 3.366-1.46 3.366-3.26V5.852C22.962 3.725 21.18 2 18.984 2h-5.968Zm-.918 4.74c.76 0 1.377-.596 1.377-1.333 0-.736-.616-1.333-1.377-1.333-.76 0-1.377.597-1.377 1.333 0 .737.617 1.334 1.377 1.334Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#b)"
      fillRule="evenodd"
      d="M18.983 30c2.197 0 3.979-1.724 3.979-3.852v-2.666h-6.886v-.741h9.946c2.197 0 3.978-1.725 3.978-3.852V13.11c0-2.127-1.781-3.852-3.978-3.852h-2.295v3.26c0 2.127-1.782 3.851-3.979 3.851h-7.344c-1.859 0-3.366 1.46-3.366 3.26v6.518c0 2.128 1.781 3.852 3.978 3.852h5.967Zm.918-4.74c-.76 0-1.377.596-1.377 1.333 0 .736.617 1.333 1.377 1.333.761 0 1.378-.597 1.378-1.333 0-.737-.617-1.334-1.378-1.334Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={12.481}
        x2={12.481}
        y1={2}
        y2={22.741}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#327EBD" />
        <Stop offset={1} stopColor="#1565A7" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={19.519}
        x2={19.519}
        y1={9.259}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFDA4B" />
        <Stop offset={1} stopColor="#F9C600" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent
