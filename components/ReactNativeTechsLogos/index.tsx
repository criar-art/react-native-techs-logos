import { ContainerTechs, ListTechs, ContentTech, Label } from './styled';
import { PropsType } from './types';
import techs from './techs';
import { FlatList } from 'react-native';

export default (props: PropsType) => {
  const getTech = (name: string) => {
    return techs.find(item => item.name.toLowerCase() == name.toLowerCase())
  }

  const getTechs = (items: any) => techs.filter((tech => items.find((item: any) => {
    return tech.name.toLowerCase() == item.toLowerCase()
  })))

  const hiddenTechs = (items: any) => techs.filter(item => !items.includes(item.name.toLocaleLowerCase()))

  const renderList = () => {
    if (props.list) {
      return getTechs(props.list)
    } else if (props.hiddenLogos) {
      return hiddenTechs(props.hiddenLogos)
    } else {
      return techs
    }
  }

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

  return (
    <ContainerTechs
      testID={`${props.list ? 'techs-container-list' : props.hiddenLogos ? 'techs-container-hiddenLogos' : 'techs-container'}`}
      single={Boolean(props.name && !props.list)}
    >
      {(props.name && getTech(props.name) && !props.list) ? (
        renderItem({ item: getTech(props.name) })
      ) : props.flatList ? (
        <FlatList
          key="flat-list"
          data={renderList()}
          renderItem={renderItem}
          horizontal={false}
          keyExtractor={(item: any) => item.name}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{ gap: props.gap ? props.gap : 10 }}
          columnWrapperStyle={{ gap: props.gap ? props.gap : 10 }}
        />
      ) : (
        <ListTechs>
          {renderList().map((item: any) => renderItem({ item: item }))}
        </ListTechs>
      )}
    </ContainerTechs>
  );
};
