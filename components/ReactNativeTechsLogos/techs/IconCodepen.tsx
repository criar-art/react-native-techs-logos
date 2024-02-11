import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M11.427 1.18a1 1 0 0 1 1.146 0l10 7A1 1 0 0 1 23 9v7a1 1 0 0 1-.427.82l-10 7a1 1 0 0 1-1.146 0l-10-7A1 1 0 0 1 1 16V9a1 1 0 0 1 .427-.82l10-7ZM3 10.92v3.16l2.256-1.58L3 10.92Zm4 2.8L3.744 16 11 21.08v-4.56l-4-2.8Zm6 2.8v4.56L20.256 16 17 13.72l-4 2.8Zm5.744-4.02L21 14.08v-3.16l-2.256 1.58ZM20.256 9 17 11.28l-4-2.8V3.92L20.256 9ZM11 3.92v4.56l-4 2.8L3.744 9 11 3.92Zm1 6.3L8.744 12.5 12 14.78l3.256-2.28L12 10.22Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
