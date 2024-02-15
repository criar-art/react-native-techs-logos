import React from 'react';
import { FlatList } from 'react-native';

import { ContainerTechs, ListTechs, ContentTech, Label } from './styled';
import type { Props, TechType } from './types';
import techs from './techs';

export default (props: Props) => {
  const getTech = (name: string) =>
    techs.find((item) => item.name.toLowerCase() === name.toLowerCase());

  const getTechs = (items: string[]) =>
    techs.filter((tech) =>
      items.find(
        (name: string) => tech.name.toLowerCase() === name.toLowerCase()
      )
    );

  const hiddenTechs = (items: string[]) =>
    techs.filter(
      ({ name }: TechType) => !items.includes(name.toLocaleLowerCase())
    );

  const renderList = () =>
    props.list
      ? getTechs(props.list)
      : props.hiddenLogos
      ? hiddenTechs(props.hiddenLogos)
      : techs;

  const renderItem = ({ item }: any) => (
    <ContentTech
      key={item.name}
      single={Boolean(props.name && !props.list)}
      background={props.background}
      rounded={props.rounded}
      size={props.size ? props.size : 100}
      gap={props.gap ? props.gap : 10}
    >
      <item.icon
        width={props.size ? props.size : 40}
        height={props.size ? props.size : 40}
      />
      {!props.hiddenLabel && <Label>{item.name}</Label>}
    </ContentTech>
  );

  const configGap = { gap: props.gap ? props.gap : 10 };

  return (
    <ContainerTechs
      testID={`${
        props.list
          ? 'techs-container-list'
          : props.hiddenLogos
          ? 'techs-container-hiddenLogos'
          : 'techs-container'
      }`}
      single={Boolean(props.name && !props.list)}
    >
      {props.name && getTech(props.name) && !props.list ? (
        renderItem({ item: getTech(props.name) })
      ) : props.flatList ? (
        <FlatList
          key="flat-list"
          data={renderList()}
          renderItem={renderItem}
          horizontal={false}
          keyExtractor={(item: TechType) => item.name}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={configGap}
          columnWrapperStyle={configGap}
        />
      ) : (
        <ListTechs>
          {renderList().map((item: TechType) => renderItem({ item: item }))}
        </ListTechs>
      )}
    </ContainerTechs>
  );
};
