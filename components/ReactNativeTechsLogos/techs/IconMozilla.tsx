import Svg, {
  SvgProps,
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M28.99 10.726c-.608-1.469-1.843-3.055-2.812-3.556.789 1.55 1.245 3.105 1.42 4.264 0 0 0 .009.003.024-1.585-3.96-4.273-5.557-6.468-9.034-.112-.175-.223-.35-.331-.538a4.027 4.027 0 0 1-.154-.293 2.554 2.554 0 0 1-.218-.578.037.037 0 0 0-.023-.013.05.05 0 0 0-.026 0 .027.027 0 0 0-.007.004c-.003 0-.007.004-.01.005l.006-.007c-3.522 2.067-4.716 5.89-4.826 7.804a7.007 7.007 0 0 0-3.861 1.49 4.138 4.138 0 0 0-.363-.275 6.525 6.525 0 0 1-.039-3.434c-1.44.658-2.56 1.696-3.374 2.614H7.9c-.556-.706-.517-3.033-.485-3.519-.007-.03-.414.213-.467.25-.49.35-.949.744-1.37 1.176A12.28 12.28 0 0 0 4.27 8.683a11.872 11.872 0 0 0-1.881 4.257l-.019.093c-.026.123-.121.742-.138.877v.03c-.124.64-.201 1.288-.231 1.94v.071C2 23.71 8.276 30 16.018 30c6.934 0 12.69-5.045 13.818-11.672.024-.18.043-.36.064-.542.279-2.41-.031-4.942-.91-7.06ZM12.834 21.724c.065.03.127.065.194.096l.01.006a9.155 9.155 0 0 1-.204-.102Zm14.769-10.26v-.013.015-.002Z"
    />
    <Path
      fill="url(#b)"
      d="M28.99 10.726c-.608-1.469-1.842-3.055-2.811-3.556.788 1.55 1.244 3.105 1.419 4.264v.03c1.323 3.593.602 7.248-.436 9.481-1.607 3.455-5.496 6.997-11.584 6.824-6.572-.187-12.366-5.08-13.448-11.485-.197-1.01 0-1.523.099-2.343-.12.631-.167.814-.227 1.938v.072C2.002 23.71 8.278 30 16.02 30c6.934 0 12.69-5.045 13.818-11.672.024-.18.043-.36.064-.542.277-2.41-.033-4.942-.911-7.06Z"
    />
    <Path
      fill="url(#c)"
      d="M28.99 10.726c-.608-1.469-1.842-3.055-2.811-3.556.788 1.55 1.244 3.105 1.419 4.264v.03c1.323 3.593.602 7.248-.436 9.481-1.607 3.455-5.496 6.997-11.584 6.824-6.572-.187-12.366-5.08-13.448-11.485-.197-1.01 0-1.523.099-2.343-.12.631-.167.814-.227 1.938v.072C2.002 23.71 8.278 30 16.02 30c6.934 0 12.69-5.045 13.818-11.672.024-.18.043-.36.064-.542.277-2.41-.033-4.942-.911-7.06Z"
    />
    <Path
      fill="url(#d)"
      d="m22.178 12.377.087.065a7.627 7.627 0 0 0-1.302-1.702c-4.357-4.367-1.142-9.47-.6-9.729l.006-.008c-3.522 2.068-4.716 5.891-4.826 7.805.163-.011.326-.025.492-.025 2.628 0 4.917 1.448 6.143 3.594Z"
    />
    <Path
      fill="url(#e)"
      d="M16.045 13.25c-.023.35-1.255 1.555-1.686 1.555-3.986 0-4.633 2.417-4.633 2.417.175 2.035 1.59 3.711 3.302 4.598.078.04.157.077.233.113.137.058.275.117.412.169a6.22 6.22 0 0 0 1.824.35c6.987.33 8.341-8.372 3.299-10.899 1.29-.225 2.63.296 3.38.823C20.95 10.23 18.66 8.78 16.032 8.78c-.166 0-.329.014-.492.025a7.007 7.007 0 0 0-3.858 1.492c.214.182.456.424.964.926.953.942 3.392 1.912 3.398 2.026Z"
    />
    <Path
      fill="url(#f)"
      d="M16.045 13.25c-.023.35-1.255 1.555-1.686 1.555-3.986 0-4.633 2.417-4.633 2.417.175 2.035 1.59 3.711 3.302 4.598.078.04.157.077.233.113.137.058.275.117.412.169a6.22 6.22 0 0 0 1.824.35c6.987.33 8.341-8.372 3.299-10.899 1.29-.225 2.63.296 3.38.823C20.95 10.23 18.66 8.78 16.032 8.78c-.166 0-.329.014-.492.025a7.007 7.007 0 0 0-3.858 1.492c.214.182.456.424.964.926.953.942 3.392 1.912 3.398 2.026Z"
    />
    <Path
      fill="url(#g)"
      d="m11.031 9.83.292.193a6.526 6.526 0 0 1-.04-3.434c-1.44.658-2.56 1.696-3.374 2.614.066-.002 2.1-.039 3.122.628Z"
    />
    <Path
      fill="url(#h)"
      d="M2.13 16.284c1.082 6.404 6.876 11.298 13.453 11.485 6.088.172 9.974-3.369 11.583-6.824 1.038-2.234 1.76-5.888.436-9.482v-.027c0 .004 0 .008.003.023.497 3.255-1.154 6.407-3.736 8.54a.49.49 0 0 0-.007.018c-5.031 4.105-9.845 2.477-10.82 1.812a8.042 8.042 0 0 1-.204-.102c-2.933-1.403-4.145-4.083-3.885-6.38-2.476 0-3.321-2.094-3.321-2.094s2.224-1.589 5.154-.207c2.714 1.28 5.263.208 5.263.207-.005-.114-2.444-1.087-3.396-2.026-.508-.502-.75-.744-.963-.926a4.138 4.138 0 0 0-.363-.274c-.084-.059-.175-.117-.292-.193-1.022-.666-3.056-.63-3.123-.628h-.006c-.556-.705-.517-3.033-.486-3.518-.006-.03-.414.212-.466.249-.49.35-.95.744-1.37 1.176a12.28 12.28 0 0 0-1.31 1.573 11.872 11.872 0 0 0-1.88 4.257c-.012.027-.51 2.21-.264 3.341Z"
    />
    <Path
      fill="url(#i)"
      d="M20.963 10.74c.512.503.95 1.076 1.302 1.702.073.055.143.114.21.176 3.178 2.932 1.516 7.083 1.39 7.381 2.581-2.132 4.232-5.284 3.735-8.539-1.585-3.962-4.272-5.56-6.468-9.036-.11-.175-.222-.35-.33-.538a4.108 4.108 0 0 1-.154-.293 2.565 2.565 0 0 1-.218-.578.037.037 0 0 0-.023-.013.05.05 0 0 0-.026 0 .028.028 0 0 0-.007.004c-.003 0-.007.004-.01.005-.543.26-3.758 5.362.6 9.729Z"
    />
    <Path
      fill="url(#j)"
      d="M22.474 12.615a2.705 2.705 0 0 0-.21-.176l-.087-.065c-.749-.526-2.089-1.047-3.38-.822 5.042 2.526 3.688 11.227-3.299 10.899a6.222 6.222 0 0 1-1.824-.35 7.628 7.628 0 0 1-.411-.17 4.157 4.157 0 0 1-.234-.113l.01.006c.974.667 5.788 2.295 10.82-1.812 0 0 .002-.008.007-.018.125-.293 1.787-4.444-1.392-7.38Z"
    />
    <Path
      fill="url(#k)"
      d="M9.725 17.221s.647-2.416 4.634-2.416c.43 0 1.663-1.206 1.685-1.555.023-.35-2.549 1.073-5.263-.207-2.93-1.382-5.154.207-5.154.207s.845 2.094 3.32 2.094c-.259 2.297.953 4.975 3.886 6.38.066.031.127.066.194.096-1.712-.885-3.125-2.563-3.302-4.599Z"
    />
    <Path
      fill="url(#l)"
      d="M28.99 10.726c-.608-1.469-1.843-3.055-2.812-3.556.789 1.55 1.245 3.105 1.42 4.264 0 0 0 .009.003.024-1.585-3.96-4.273-5.557-6.468-9.034-.112-.175-.223-.35-.331-.538a4.027 4.027 0 0 1-.154-.293 2.554 2.554 0 0 1-.218-.578.037.037 0 0 0-.023-.013.05.05 0 0 0-.026 0 .027.027 0 0 0-.007.004c-.003 0-.007.004-.01.005l.006-.007c-3.522 2.067-4.716 5.89-4.826 7.804.163-.011.326-.025.492-.025 2.628 0 4.917 1.448 6.143 3.594-.749-.526-2.09-1.047-3.38-.822 5.042 2.527 3.688 11.228-3.299 10.899a6.224 6.224 0 0 1-1.824-.35 7.678 7.678 0 0 1-.412-.17 4.089 4.089 0 0 1-.233-.113l.01.006a8.042 8.042 0 0 1-.204-.101c.065.03.127.065.194.096-1.716-.887-3.129-2.565-3.306-4.6 0 0 .647-2.417 4.634-2.417.43 0 1.663-1.206 1.685-1.555-.005-.114-2.444-1.087-3.396-2.027-.508-.501-.75-.743-.963-.925a4.154 4.154 0 0 0-.363-.275 6.526 6.526 0 0 1-.04-3.434c-1.44.658-2.56 1.696-3.374 2.614h-.006c-.556-.706-.517-3.033-.485-3.519-.007-.03-.414.213-.467.25-.49.35-.95.744-1.37 1.176a12.28 12.28 0 0 0-1.31 1.573 11.872 11.872 0 0 0-1.88 4.257l-.019.093c-.026.123-.145.75-.162.885 0 .01 0-.01 0 0-.109.65-.179 1.304-.209 1.961v.072C2 23.71 8.276 30 16.018 30c6.934 0 12.69-5.045 13.818-11.672.024-.18.043-.36.064-.542.279-2.41-.031-4.942-.91-7.06Zm-1.39.722v.015-.015Z"
    />
    <Defs>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(29.2246 0 0 29.2888 26.06 4.219)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.13} stopColor="#FFBD4F" />
        <Stop offset={0.19} stopColor="#FFAC31" />
        <Stop offset={0.25} stopColor="#FF9D17" />
        <Stop offset={0.28} stopColor="#FF980E" />
        <Stop offset={0.4} stopColor="#FF563B" />
        <Stop offset={0.47} stopColor="#FF3750" />
        <Stop offset={0.71} stopColor="#F5156C" />
        <Stop offset={0.78} stopColor="#EB0878" />
        <Stop offset={0.86} stopColor="#E50080" />
      </RadialGradient>
      <RadialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(29.2246 0 0 29.2888 15.38 16.192)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.3} stopColor="#960E18" />
        <Stop offset={0.35} stopColor="#B11927" stopOpacity={0.74} />
        <Stop offset={0.43} stopColor="#DB293D" stopOpacity={0.34} />
        <Stop offset={0.5} stopColor="#F5334B" stopOpacity={0.09} />
        <Stop offset={0.53} stopColor="#FF3750" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(21.172 0 0 21.2184 18.904 -2.428)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.13} stopColor="#FFF44F" />
        <Stop offset={0.25} stopColor="#FFDC3E" />
        <Stop offset={0.51} stopColor="#FF9D12" />
        <Stop offset={0.53} stopColor="#FF980E" />
      </RadialGradient>
      <RadialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(13.915 0 0 13.9455 12.149 23.843)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.35} stopColor="#3A8EE6" />
        <Stop offset={0.47} stopColor="#5C79F0" />
        <Stop offset={0.67} stopColor="#9059FF" />
        <Stop offset={1} stopColor="#C139E6" />
      </RadialGradient>
      <RadialGradient
        id="f"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(7.15643 -1.77455 2.08872 8.42342 15.8 12.712)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.21} stopColor="#9059FF" stopOpacity={0} />
        <Stop offset={0.28} stopColor="#8C4FF3" stopOpacity={0.06} />
        <Stop offset={0.75} stopColor="#7716A8" stopOpacity={0.45} />
        <Stop offset={0.97} stopColor="#6E008B" stopOpacity={0.6} />
      </RadialGradient>
      <RadialGradient
        id="g"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(10.0108 0 0 10.0328 15.011 3.02)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFE226" />
        <Stop offset={0.12} stopColor="#FFDB27" />
        <Stop offset={0.3} stopColor="#FFC82A" />
        <Stop offset={0.5} stopColor="#FFA930" />
        <Stop offset={0.73} stopColor="#FF7E37" />
        <Stop offset={0.79} stopColor="#FF7139" />
      </RadialGradient>
      <RadialGradient
        id="h"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(42.7109 0 0 42.8046 22.88 -3.343)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.11} stopColor="#FFF44F" />
        <Stop offset={0.46} stopColor="#FF980E" />
        <Stop offset={0.62} stopColor="#FF5634" />
        <Stop offset={0.72} stopColor="#FF3647" />
        <Stop offset={0.9} stopColor="#E31587" />
      </RadialGradient>
      <RadialGradient
        id="i"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(84.245 8.638 11.035) scale(31.1996 20.4543)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFF44F" />
        <Stop offset={0.06} stopColor="#FFE847" />
        <Stop offset={0.17} stopColor="#FFC830" />
        <Stop offset={0.3} stopColor="#FF980E" />
        <Stop offset={0.36} stopColor="#FF8B16" />
        <Stop offset={0.45} stopColor="#FF672A" />
        <Stop offset={0.57} stopColor="#FF3647" />
        <Stop offset={0.74} stopColor="#E31587" />
      </RadialGradient>
      <RadialGradient
        id="j"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(26.6644 0 0 26.723 14.776 6.736)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.14} stopColor="#FFF44F" />
        <Stop offset={0.48} stopColor="#FF980E" />
        <Stop offset={0.59} stopColor="#FF5634" />
        <Stop offset={0.66} stopColor="#FF3647" />
        <Stop offset={0.9} stopColor="#E31587" />
      </RadialGradient>
      <RadialGradient
        id="k"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(29.1844 0 0 29.2484 21.814 8.3)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.09} stopColor="#FFF44F" />
        <Stop offset={0.23} stopColor="#FFE141" />
        <Stop offset={0.51} stopColor="#FFAF1E" />
        <Stop offset={0.63} stopColor="#FF980E" />
      </RadialGradient>
      <LinearGradient
        id="a"
        x1={27.135}
        x2={3.814}
        y1={5.493}
        y2={27.944}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.05} stopColor="#FFF44F" />
        <Stop offset={0.11} stopColor="#FFE847" />
        <Stop offset={0.22} stopColor="#FFC830" />
        <Stop offset={0.37} stopColor="#FF980E" />
        <Stop offset={0.4} stopColor="#FF8B16" />
        <Stop offset={0.46} stopColor="#FF672A" />
        <Stop offset={0.53} stopColor="#FF3647" />
        <Stop offset={0.7} stopColor="#E31587" />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={26.855}
        x2={7.01}
        y1={5.372}
        y2={25.174}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.17} stopColor="#FFF44F" stopOpacity={0.8} />
        <Stop offset={0.27} stopColor="#FFF44F" stopOpacity={0.63} />
        <Stop offset={0.49} stopColor="#FFF44F" stopOpacity={0.22} />
        <Stop offset={0.6} stopColor="#FFF44F" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SvgComponent
