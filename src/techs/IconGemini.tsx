import Svg, {
  Mask,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  type SvgProps,
} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 -45 344 227" {...props}>
    <Mask
      id="a"
      width={344}
      height={127}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M234.123 41.22c1.366 3.115 2.049 6.444 2.049 9.986 0-3.542.661-6.87 1.984-9.986 1.365-3.115 3.2-5.824 5.504-8.128 2.305-2.305 5.014-4.118 8.129-5.441 3.115-1.366 6.444-2.048 9.985-2.048-3.541 0-6.87-.662-9.985-1.985-3.115-1.365-5.824-3.2-8.129-5.504-2.304-2.304-4.139-5.014-5.504-8.129-1.323-3.115-1.984-6.443-1.984-9.985 0 3.542-.683 6.87-2.049 9.985-1.322 3.115-3.136 5.825-5.44 8.129-2.304 2.304-5.014 4.14-8.129 5.505-3.115 1.322-6.443 1.984-9.985 1.984 3.542 0 6.87.682 9.985 2.048 3.115 1.323 5.825 3.136 8.129 5.44 2.304 2.305 4.118 5.014 5.44 8.13Zm-207.97 81.92c5.223 2.151 10.792 3.226 16.706 3.226 5.991 0 11.444-.96 16.36-2.88 4.916-1.92 9.179-4.647 12.789-8.18 3.61-3.533 6.413-7.719 8.41-12.558 1.997-4.916 2.996-10.293 2.996-16.13v-.115c0-1.075-.077-2.074-.23-2.996a41.736 41.736 0 0 0-.346-2.88H43.09v9.563h29.955c-.308 4.608-1.383 8.602-3.226 11.982-1.767 3.303-4.033 6.029-6.798 8.18-2.688 2.15-5.799 3.763-9.332 4.839-3.456.998-7.066 1.498-10.83 1.498-4.148 0-8.18-.769-12.097-2.305a32.1 32.1 0 0 1-10.485-6.682c-2.995-2.919-5.376-6.414-7.143-10.484-1.766-4.148-2.65-8.795-2.65-13.941 0-5.146.845-9.755 2.535-13.826 1.767-4.147 4.148-7.642 7.143-10.484a30.841 30.841 0 0 1 10.37-6.682 34.063 34.063 0 0 1 12.327-2.304c3.15 0 6.145.422 8.987 1.267 2.842.768 5.453 1.882 7.834 3.341 2.458 1.46 4.57 3.226 6.337 5.3l7.143-7.374c-3.456-3.917-7.873-6.951-13.25-9.102-5.3-2.15-10.983-3.225-17.051-3.225-5.837 0-11.368 1.075-16.59 3.225a43.198 43.198 0 0 0-13.71 9.102c-3.918 3.917-6.99 8.487-9.218 13.71C1.114 71.448 0 77.132 0 83.278s1.114 11.828 3.341 17.051c2.228 5.223 5.3 9.793 9.217 13.711a41.862 41.862 0 0 0 13.595 9.101Zm77.905-.806c4.454 2.688 9.524 4.032 15.208 4.032 6.451 0 11.866-1.459 16.245-4.378 4.378-2.918 7.719-6.605 10.023-11.06l-8.756-4.148c-1.613 2.919-3.841 5.377-6.682 7.374-2.766 1.997-6.222 2.995-10.37 2.995-3.226 0-6.336-.806-9.332-2.419-2.995-1.613-5.453-4.033-7.373-7.258-1.659-2.788-2.602-6.206-2.827-10.254h46.262c.077-.384.115-.884.115-1.498.077-.615.115-1.19.115-1.728 0-5.838-1.152-11.022-3.456-15.554-2.228-4.532-5.454-8.065-9.678-10.6-4.225-2.611-9.255-3.917-15.093-3.917-5.761 0-10.791 1.46-15.093 4.378-4.301 2.842-7.642 6.644-10.023 11.406-2.305 4.762-3.457 9.947-3.457 15.554 0 5.991 1.23 11.329 3.687 16.015 2.535 4.685 6.03 8.372 10.485 11.06Zm-3.277-33.527c.362-1.71.879-3.323 1.548-4.839 1.46-3.303 3.572-5.914 6.337-7.834 2.842-1.997 6.145-2.996 9.908-2.996 3.149 0 5.799.538 7.95 1.613 2.151.999 3.917 2.304 5.3 3.917 1.382 1.613 2.381 3.342 2.995 5.185.615 1.767.96 3.418 1.037 4.954h-35.075Zm54.716-23.042v58.758h10.369v-32.72c0-3.226.653-6.26 1.959-9.102 1.306-2.842 3.111-5.108 5.415-6.798 2.304-1.766 4.916-2.65 7.834-2.65 4.071 0 7.22 1.191 9.448 3.572 2.304 2.304 3.456 6.26 3.456 11.867v35.831h10.254v-32.95c0-3.227.653-6.222 1.959-8.987 1.305-2.842 3.11-5.108 5.415-6.798 2.304-1.69 4.915-2.535 7.834-2.535 4.148 0 7.335 1.153 9.563 3.457 2.304 2.304 3.456 6.26 3.456 11.867v35.946h10.254V86.849c0-6.836-1.69-12.367-5.069-16.591-3.303-4.224-8.488-6.337-15.554-6.337-4.685 0-8.718 1.075-12.097 3.226-3.38 2.15-6.068 4.877-8.065 8.18-1.383-3.38-3.649-6.106-6.798-8.18-3.072-2.15-6.797-3.226-11.175-3.226-2.458 0-4.916.5-7.374 1.498-2.381.922-4.493 2.189-6.337 3.802-1.843 1.536-3.302 3.264-4.378 5.185h-.461v-8.641h-9.908Zm96.548 0v58.758h10.254V65.765h-10.254Zm-.115-12.443c1.459 1.382 3.188 2.073 5.185 2.073 2.073 0 3.802-.69 5.184-2.073 1.383-1.46 2.074-3.188 2.074-5.185 0-2.074-.691-3.802-2.074-5.184-1.382-1.46-3.111-2.19-5.184-2.19-1.997 0-3.726.73-5.185 2.19-1.383 1.382-2.074 3.11-2.074 5.184 0 1.997.691 3.725 2.074 5.185Zm19.999 12.443v58.758h10.369v-32.72c0-3.15.653-6.107 1.959-8.872 1.383-2.842 3.264-5.146 5.645-6.912 2.381-1.844 5.185-2.766 8.411-2.766 4.301 0 7.758 1.191 10.369 3.572 2.611 2.304 3.917 6.26 3.917 11.867v35.831h10.369V86.849c0-6.913-1.843-12.443-5.53-16.591-3.687-4.224-9.102-6.337-16.245-6.337-4.224 0-8.065 1.037-11.521 3.111-3.456 2.074-5.953 4.532-7.489 7.374h-.461v-8.641h-9.793Zm59.743 0v58.758h10.254V65.765h-10.254Zm-.115-12.443c1.459 1.382 3.188 2.073 5.185 2.073 2.073 0 3.802-.69 5.184-2.073 1.383-1.46 2.074-3.188 2.074-5.185 0-2.074-.691-3.802-2.074-5.184-1.382-1.46-3.111-2.19-5.184-2.19-1.997 0-3.726.73-5.185 2.19-1.382 1.382-2.074 3.11-2.074 5.184 0 1.997.692 3.725 2.074 5.185Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="url(#b)" d="M-158.25-455.443h832.09v685.324h-832.09z" />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={-57.405}
        x2={354.97}
        y1={130.441}
        y2={30.369}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#439DDF" />
        <Stop offset={0.524} stopColor="#4F87ED" />
        <Stop offset={0.781} stopColor="#9476C5" />
        <Stop offset={0.888} stopColor="#BC688E" />
        <Stop offset={1} stopColor="#D6645D" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
