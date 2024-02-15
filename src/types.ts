import type { SvgProps } from 'react-native-svg';

export type Props = {
  name?: string;
  list?: any;
  hiddenLogos?: any;
  hiddenLabel?: boolean;
  flatList?: boolean;
  rounded?: boolean;
  background?: string;
  size?: number;
  gap?: number;
};

export type PropsContainerTechs = {
  single?: boolean;
};

export type PropsContentTech = {
  single?: boolean;
  rounded?: boolean;
  size?: number;
  gap?: number;
  background?: string;
};

export type TechType = {
  name: string;
  url: string;
  icon: (props: SvgProps) => JSX.Element;
};
