import React from 'react';
import { FlatList } from 'react-native';

import { ContainerTechs, ListTechs, ContentTech, Label } from './styled';
import type { Props, TechType } from './types';
import techs from './techs';

export default (props: Props) => {
  const getTech = (name: string) =>
    techs.find((item) => item.name.toLowerCase() === name.toLowerCase());

  const getTechs = (items: string[]): TechType[] =>
    techs.filter((tech) =>
      items.some(
        (name: string) => tech.name.toLowerCase() === name.toLowerCase()
      )
    );

  const hiddenTechs = (items: string[]): TechType[] =>
    techs.filter(({ name }: TechType) => !items.includes(name.toLowerCase()));

  const renderList = (): TechType[] =>
    props.list
      ? getTechs(props.list)
      : props.hiddenLogos
      ? hiddenTechs(props.hiddenLogos)
      : techs;

  const renderItem = ({ item }: { item: TechType }) => (
    <ContentTech
      key={item.name}
      single={Boolean(props.name && !props.list)}
      background={props.background}
      rounded={props.rounded}
      size={props.size || 100}
      gap={props.gap || 10}
    >
      <item.icon width={props.size || 40} height={props.size || 40} />
      {!props.hiddenLabel && <Label>{item.name}</Label>}
    </ContentTech>
  );

  const renderItemRaw = ({ item }: { item: TechType }) => (
    <item.icon
      key={item.name}
      width={props.size || 40}
      height={props.size || 40}
    />
  );

  const configGap = { gap: props.gap || 10 };

  return props.raw ? (
    props.name && getTech(props.name) && !props.list ? (
      renderItemRaw({ item: getTech(props.name) as TechType })
    ) : props.flatList ? (
      // @ts-ignore: Suppress type error for renderItem
      <FlatList
        key="flat-list-raw"
        data={renderList()}
        renderItem={renderItemRaw as any}
        horizontal={false}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={configGap}
        columnWrapperStyle={configGap}
      />
    ) : (
      <>{renderList().map((item) => renderItemRaw({ item }))}</>
    )
  ) : (
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
        renderItem({ item: getTech(props.name) as TechType })
      ) : props.flatList ? (
        // @ts-ignore: Suppress type error for renderItem
        <FlatList
          key="flat-list"
          data={renderList()}
          renderItem={renderItem as any}
          horizontal={false}
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={configGap}
          columnWrapperStyle={configGap}
        />
      ) : (
        <ListTechs>
          {renderList().map((item) => renderItem({ item }))}
        </ListTechs>
      )}
    </ContainerTechs>
  );
};
