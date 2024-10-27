import Svg, { type SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="3.28 9.02 64 64" {...props}>
    <Path
      fill="#03c3ff"
      d="M35.655 10.147c-17.417-.3-32.068 13.156-32.367 29.9-.374 18.1 12.708 31.62 30.872 31.844 19.136.3 32.816-12.26 33.115-30.35.3-17.268-13.53-31.022-31.62-31.396zm-.374 52.177c-11.213 0-20.93-9.718-21.08-20.93-.15-11.886 9.27-21.528 21.08-21.528 11.587 0 21.08 9.42 21.08 21.155 0 11.362-9.792 21.38-21.08 21.304z"
    />
    <Path
      fill="#88888a"
      d="M46.12 37.058c-1.72-.598-1.645 1.346-2.168 2.392-.374.748-.075 1.794-1.346 2.168l-3-11.8c-.224-.822-.374-1.87-1.57-1.645-.897.15-.897 1.047-1.047 1.794l-.748 4.4-2.08 11.223c-1.27-2.7-1.72-5.382-2.467-7.998-.448-1.57.075-4.26-1.794-4.485-2.018-.224-1.944 2.467-2.7 3.962-1.047 1.944-1.27 5.008-4.784 2.542-.822-.598-1.944.15-2.542 1.047-.598.822-.448 1.72.15 2.467.673.897 1.57 1.12 2.616.748 2.7-.972 5.98-1.12 6.578-5.083 1.346 4.485 2.317 8.746 3.364 13.082.224.897.15 2.243 1.42 2.317 1.57 0 1.42-1.495 1.57-2.542l2.542-14.95h.748l2.392 9.27c.224.822.374 1.944 1.42 2.018s.972-1.42 1.57-1.87c1.495-1.12-.822-5.532 3.513-4.1.075 0 .448-.523.448-.822.15-1.87-.523-3.513-2.093-4.1z"
    />
  </Svg>
);
export default SvgComponent;