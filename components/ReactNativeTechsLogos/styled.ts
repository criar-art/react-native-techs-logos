import styled from "styled-components/native";

export const ContainerTechs = styled.View<{
  single?: boolean;
}>`
  ${({ single }) => !single && `
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

export const ContentTech = styled.View<{
  single?: boolean;
  rounded?: boolean;
  size?: number;
  gap?: number;
  background?: string;
}>`
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  ${({ single, gap }) => !single && `margin: ${gap}px;`};
  ${({ rounded }) => rounded && 'border-radius: 100px;'};
  ${({ size }) => size ? `width: ${size}px;` : 'width: 100px;'};
  ${({ size }) => size ? `height: ${size}px;` : 'height: 100px;'};
  ${({ background }) => background && `
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
