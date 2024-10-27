import Svg, { G, Path, Defs, ClipPath, type SvgProps } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 -20 128 107" {...props}>
    <G clipPath="url(#clip0_1062_931)">
      <Path
        d="M36.196 27.63c0 1.564.17 2.831.466 3.76.34.93.763 1.944 1.357 3.042.211.338.296.676.296.972 0 .423-.254.845-.805 1.268l-2.67 1.774c-.382.254-.763.38-1.102.38-.424 0-.848-.21-1.272-.591a13.075 13.075 0 0 1-1.526-1.986 32.67 32.67 0 0 1-1.314-2.492c-3.306 3.886-7.46 5.83-12.46 5.83-3.56 0-6.4-1.014-8.477-3.042-2.077-2.028-3.137-4.732-3.137-8.112 0-3.59 1.272-6.506 3.857-8.703 2.586-2.197 6.019-3.295 10.384-3.295 1.441 0 2.925.126 4.493.338 1.568.21 3.179.549 4.874.93v-3.085c0-3.21-.678-5.45-1.992-6.76-1.356-1.31-3.645-1.943-6.909-1.943-1.483 0-3.009.169-4.577.549s-3.094.845-4.577 1.436a12.19 12.19 0 0 1-1.484.55c-.297.084-.508.126-.678.126-.593 0-.89-.422-.89-1.31v-2.07c0-.675.085-1.182.297-1.478.212-.296.593-.592 1.186-.887 1.484-.76 3.264-1.395 5.34-1.902C16.955.38 19.158.127 21.49.127c5.043 0 8.73 1.14 11.104 3.422 2.331 2.281 3.518 5.746 3.518 10.393v13.689h.085Zm-17.208 6.422c1.399 0 2.84-.253 4.366-.76 1.525-.507 2.882-1.437 4.026-2.704.678-.803 1.187-1.69 1.441-2.704.254-1.014.424-2.24.424-3.676v-1.774a35.488 35.488 0 0 0-3.9-.718 32.037 32.037 0 0 0-3.983-.254c-2.84 0-4.917.55-6.316 1.69-1.398 1.14-2.076 2.746-2.076 4.859 0 1.986.508 3.464 1.568 4.478 1.017 1.056 2.5 1.563 4.45 1.563Zm34.034 4.563c-.762 0-1.271-.127-1.61-.422-.34-.254-.636-.845-.89-1.648l-9.96-32.658c-.255-.845-.382-1.394-.382-1.69 0-.676.34-1.056 1.017-1.056h4.154c.805 0 1.356.126 1.653.422.339.254.593.845.848 1.648l7.12 27.968 6.612-27.968c.212-.845.466-1.394.805-1.648.34-.253.933-.422 1.696-.422h3.39c.806 0 1.357.126 1.696.422.339.254.635.845.805 1.648l6.697 28.306 7.332-28.306c.255-.845.551-1.394.848-1.648.339-.253.89-.422 1.653-.422h3.942c.678 0 1.06.338 1.06 1.056 0 .211-.043.422-.086.676a5.99 5.99 0 0 1-.296 1.056L80.91 36.587c-.254.845-.55 1.394-.89 1.648-.339.253-.89.422-1.61.422h-3.645c-.806 0-1.357-.126-1.696-.422-.339-.296-.636-.845-.805-1.69l-6.57-27.25-6.527 27.208c-.212.845-.466 1.394-.805 1.69-.34.295-.933.422-1.696.422h-3.645Zm54.464 1.14a28.13 28.13 0 0 1-6.527-.76c-2.12-.507-3.772-1.056-4.874-1.69-.678-.38-1.145-.802-1.314-1.182a2.973 2.973 0 0 1-.255-1.183v-2.155c0-.887.34-1.31.975-1.31.255 0 .509.042.763.127.254.084.636.253 1.06.422a23.11 23.11 0 0 0 4.662 1.48c1.695.337 3.348.506 5.044.506 2.67 0 4.747-.465 6.188-1.394 1.441-.93 2.204-2.282 2.204-4.014 0-1.183-.382-2.154-1.145-2.957-.762-.803-2.204-1.521-4.28-2.197l-6.146-1.901c-3.094-.972-5.383-2.408-6.781-4.31-1.4-1.858-2.12-3.929-2.12-6.126 0-1.774.382-3.337 1.145-4.69a10.874 10.874 0 0 1 3.051-3.464c1.272-.971 2.713-1.69 4.408-2.197 1.696-.507 3.476-.718 5.341-.718.932 0 1.907.042 2.839.17.975.126 1.865.295 2.755.464a32.99 32.99 0 0 1 2.416.676c.763.253 1.357.507 1.78.76.594.338 1.018.676 1.272 1.057.254.338.381.802.381 1.394v1.986c0 .887-.339 1.351-.974 1.351-.34 0-.89-.169-1.611-.507-2.416-1.098-5.129-1.647-8.138-1.647-2.416 0-4.323.38-5.637 1.183-1.314.802-1.992 2.028-1.992 3.76 0 1.183.424 2.197 1.272 3 .847.802 2.416 1.605 4.662 2.323l6.018 1.901c3.052.972 5.256 2.324 6.57 4.056 1.314 1.732 1.95 3.718 1.95 5.915 0 1.817-.382 3.464-1.102 4.9-.763 1.437-1.781 2.705-3.094 3.719-1.314 1.056-2.883 1.816-4.705 2.366-1.907.591-3.899.887-6.061.887Z"
        fill="#252f3e"
      />
      <Path
        fill="#F90"
        d="M115.497 60.289c-13.945 10.266-34.204 15.716-51.624 15.716-24.413 0-46.41-8.999-63.025-23.955-1.314-1.183-.127-2.788 1.44-1.859C20.26 60.584 42.428 66.88 65.357 66.88c15.47 0 32.467-3.21 48.106-9.801 2.331-1.056 4.324 1.52 2.035 3.21Zm5.806-6.591c-1.78-2.282-11.782-1.099-16.317-.55-1.357.17-1.569-1.013-.34-1.9 7.969-5.577 21.065-3.972 22.591-2.113 1.526 1.901-.424 14.956-7.883 21.209-1.145.972-2.247.465-1.738-.803 1.695-4.182 5.468-13.604 3.687-15.843Z"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1062_931">
        <Path fill="#fff" d="M0 0h128v76.255H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
