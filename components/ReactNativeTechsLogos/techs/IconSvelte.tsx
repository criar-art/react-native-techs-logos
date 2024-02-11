import * as React from "react"
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Path,
} from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" {...props}>
    <Defs>
      <LinearGradient
        id="a"
        x1={-3.609}
        x2={-3.609}
        y1={-492.685}
        y2={-480.271}
        gradientTransform="translate(19.712 502.891)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.15} stopColor="#2a4f84" />
        <Stop offset={0.388} stopColor="#294e82" />
        <Stop offset={1} stopColor="#172e4e" />
      </LinearGradient>
    </Defs>
    <Path
      d="M28.559 20.226a2.4 2.4 0 0 1-2.394 2.394H6.04a2.4 2.4 0 0 1-2.394-2.394V12.6a2.4 2.4 0 0 1 2.394-2.394h20.125a2.4 2.4 0 0 1 2.394 2.394Z"
      fill="url(#a)"
    />
    <Path
      d="M24.349 16.25a1.972 1.972 0 0 1 1.578 1.891 1.69 1.69 0 0 1-.653 1.4 2.934 2.934 0 0 1-1.862.559 4.558 4.558 0 0 1-2.241-.618 1.986 1.986 0 0 1 .16-.669 1.83 1.83 0 0 1 .35-.576 3.7 3.7 0 0 0 1.649.493.965.965 0 0 0 .51-.112.339.339 0 0 0 .178-.3q0-.353-.546-.529l-.653-.247q-1.482-.54-1.482-1.762a1.753 1.753 0 0 1 .623-1.416 2.587 2.587 0 0 1 1.678-.648 5.094 5.094 0 0 1 1.15.147 4.555 4.555 0 0 1 1.032.472 1.668 1.668 0 0 1-.13.722 1.22 1.22 0 0 1-.38.558 4.261 4.261 0 0 0-1.66-.446.544.544 0 0 0-.362.106.338.338 0 0 0-.124.27q0 .282.451.446l.736.259Zm-5.249 0a1.972 1.972 0 0 1 1.577 1.891 1.691 1.691 0 0 1-.652 1.4 2.937 2.937 0 0 1-1.862.559 4.56 4.56 0 0 1-2.241-.618 1.981 1.981 0 0 1 .16-.669 1.821 1.821 0 0 1 .35-.576 3.7 3.7 0 0 0 1.649.493.963.963 0 0 0 .51-.112.34.34 0 0 0 .178-.3q0-.353-.546-.529l-.653-.247q-1.482-.54-1.482-1.762a1.752 1.752 0 0 1 .623-1.416 2.585 2.585 0 0 1 1.677-.648 5.088 5.088 0 0 1 1.15.147 4.552 4.552 0 0 1 1.032.472 1.668 1.668 0 0 1-.13.722 1.22 1.22 0 0 1-.38.558 4.263 4.263 0 0 0-1.661-.446.543.543 0 0 0-.362.106.339.339 0 0 0-.124.27q0 .282.451.446l.736.259Zm-3.836.083a2.822 2.822 0 0 0-.172-1 2.239 2.239 0 0 0-.492-.787 2.28 2.28 0 0 0-.777-.517 2.737 2.737 0 0 0-1.026-.314 2.8 2.8 0 0 0-1.18.361 2.256 2.256 0 0 0-.83.646 2.765 2.765 0 0 0-.487.969 4.4 4.4 0 0 0-.16 1.216 5.681 5.681 0 0 0 .13 1.257 2.628 2.628 0 0 0 .445 1 2.107 2.107 0 0 0 .818.657 2.935 2.935 0 0 0 1.251.277 3.952 3.952 0 0 0 2.324-.712 1.865 1.865 0 0 0-.484-1.081 6.188 6.188 0 0 1-.857.262 3.208 3.208 0 0 1-.656.079 1.017 1.017 0 0 1-.815-.29 1.187 1.187 0 0 1-.271-.77h3.083a4.447 4.447 0 0 0 .156-1.253Zm-3.248.081a2.433 2.433 0 0 1 .218-1 .632.632 0 0 1 .559-.264.66.66 0 0 1 .582.282 1.749 1.749 0 0 1 .194.856v.13h-1.553Z"
      fill="#f6f6f6"
    />
    <Path
      d="M29.18 17.2a1.605 1.605 0 0 0-.53 1.265v2.051a1.81 1.81 0 0 1-.683 1.557 2.8 2.8 0 0 1-1.654.549h-.373v-1.028a1.241 1.241 0 0 0 .595-.334 1.369 1.369 0 0 0 .419-1.047v-1.657a2.545 2.545 0 0 1 .257-1.323 2.5 2.5 0 0 1 1.2-.838 2.528 2.528 0 0 1-1.324-1.179 2.956 2.956 0 0 1-.135-1.165v-1.518a1.458 1.458 0 0 0-.366-1.054 1.152 1.152 0 0 0-.648-.314v-.96h.928a1.676 1.676 0 0 1 1.023.442 2 2 0 0 1 .673 1.009 2.33 2.33 0 0 1 .086.7v1.757a1.846 1.846 0 0 0 .5 1.383 2.113 2.113 0 0 0 .854.479v.794a1.943 1.943 0 0 0-.82.426ZM5.594 10.206H5.26a1.673 1.673 0 0 0-1.023.442 1.71 1.71 0 0 0-.673 1.009 3.531 3.531 0 0 0-.038.7v1.757a1.867 1.867 0 0 1-.545 1.386 2.847 2.847 0 0 1-.981.477v.793a2.552 2.552 0 0 1 .947.426 1.638 1.638 0 0 1 .577 1.265v2.051a1.781 1.781 0 0 0 .636 1.558 2.8 2.8 0 0 0 1.654.55h.421v-1.026a1.47 1.47 0 0 1-.643-.334 1.355 1.355 0 0 1-.371-1.047v-1.656a2.516 2.516 0 0 0-.305-1.323 2.5 2.5 0 0 0-1.2-.838 2.529 2.529 0 0 0 1.324-1.178 2.857 2.857 0 0 0 .183-1.165v-1.519a1.462 1.462 0 0 1 .317-1.054 1.313 1.313 0 0 1 .575-.271h.428v-1.003h-.949Z"
      fill="#f6f6f6"
      stroke="#404040"
      strokeMiterlimit="10"
      strokeWidth=".25px"
    />
    <Path
      d="M9.537 18.529h-.32c-.348 0-.479-.183-.479-.551v-6.759a1.256 1.256 0 0 0-.268-.856c-.15-.164-.411-.162-.783-.162h-.808v8.106a1.875 1.875 0 0 0 .352 1.24 1.441 1.441 0 0 0 1.145.393 7.859 7.859 0 0 0 1.269-.118 2.23 2.23 0 0 0 .036-.509 2.278 2.278 0 0 0-.142-.782Z"
      fill="#f6f6f6"
    />
  </Svg>
)
export default SvgComponent
