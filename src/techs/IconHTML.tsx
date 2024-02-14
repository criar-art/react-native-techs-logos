import Svg, { type SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg preserveAspectRatio="xMinYMin meet" viewBox="-135 0 361 361" {...props}>
    <Path
      fill="#E44D26"
      d="m255.555 70.766-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z"
    />
    <Path
      fill="#F16529"
      d="m128 337.95 84.417-23.403 19.86-222.49H128V337.95z"
    />
    <Path
      fill="#EBEBEB"
      d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zm7.198 80.61h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z"
    />
    <Path
      fill="#FFF"
      d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zm0-64.719v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z"
    />
  </Svg>
);
export default SvgComponent;