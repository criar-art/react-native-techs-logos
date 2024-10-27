import type { SvgProps } from 'react-native-svg';

export type Props = {
  name?: string;
  list?: string[];
  hiddenLogos?: string[];
  hiddenLabel?: boolean;
  flatList?: boolean;
  rounded?: boolean;
  background?: string;
  size?: number;
  gap?: number;
  raw?: boolean;
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
