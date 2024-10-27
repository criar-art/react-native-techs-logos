import Svg, { Rect, G, Path, type SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg fill="#0071b5" aria-label="Backbone" viewBox="0 0 512 512" {...props}>
    <Rect width={512} height={512} fill="#fff" rx="100%" />
    <G stroke="#848484" strokeWidth={2}>
      <Path d="M380 102v167l-124 70v-48l83-47v-74l-83 47v-44l124-71" />
      <Path
        fill="#002a41"
        d="M132 102v167l124 70v-48l-83-47v-74l83 47v-44l-124-71m248 308V243l-124-70v48l83 47v71l-83-48v48l124 71"
      />
      <Path d="M132 410V243l124-70v48l-83 47v71l83-48v48l-124 71" />
    </G>
  </Svg>
);
export default SvgComponent;
