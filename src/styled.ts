import styled from 'styled-components/native';
import type { PropsContainerTechs, PropsContentTech } from './types';

export const ContainerTechs = styled.View<PropsContainerTechs>`
  ${({ single }: PropsContainerTechs) =>
    !single &&
    `
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
  `};
`;

export const ListTechs = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
`;

export const ContentTech = styled.View<PropsContentTech>`
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  ${({ single, gap }: PropsContentTech) => !single && `margin: ${gap}px;`};
  ${({ rounded }: PropsContentTech) => rounded && 'border-radius: 100px;'};
  ${({ size }: PropsContentTech) =>
    size ? `width: ${size}px;` : 'width: 100px;'};
  ${({ size }: PropsContentTech) =>
    size ? `height: ${size}px;` : 'height: 100px;'};
  ${({ background }: PropsContentTech) =>
    background &&
    `
    background: ${background};
    shadow-opacity: 0.4;
    shadow-radius: 2px;
    shadow-color: #000;
    shadow-offset: 0px 8px;
    elevation: 4;
  `};
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #000000;
`;
