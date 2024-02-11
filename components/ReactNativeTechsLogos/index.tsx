import React from 'react';
import { ContainerTechs, ContentTech, Label } from './styled';
import { PropsType } from './types';

import techs from './techs';

export default (props: PropsType) => {
  return (
    <ContainerTechs testID="techs-container">
      {techs.map((item: any, index: number) => (
        <ContentTech key={index}>
          <item.component width={120} height={40} />
          <Label>{item.name}</Label>
        </ContentTech>
      ))}
    </ContainerTechs>
  );
};
