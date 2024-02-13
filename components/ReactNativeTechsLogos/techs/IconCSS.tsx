import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    preserveAspectRatio="xMidYMid"
    viewBox="-50 0 361 361"
    {...props}
  >
    <Path
      fill="#264DE4"
      d="M127.844 360.088 23.662 331.166.445 70.766h255.11l-23.241 260.36-104.47 28.962Z"
    />
    <Path
      fill="#2965F1"
      d="m212.417 314.547 19.86-222.49H128V337.95l84.417-23.403Z"
    />
    <Path
      fill="#EBEBEB"
      d="m53.669 188.636 2.862 31.937H128v-31.937H53.669Zm-5.752-64.641 2.903 31.937H128v-31.937H47.917ZM128 271.58l-.14.037-35.568-9.604-2.274-25.471h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58Z"
    />
    <Path
      fill="#FFF"
      d="m202.127 188.636 5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576Z"
    />
  </Svg>
)
export default SvgComponent
