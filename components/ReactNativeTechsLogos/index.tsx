import { ContainerTechs, ListTechs, ContentTech, Label } from './styled';
import { PropsType } from './types';
import techs from './techs';

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
    <ContentTech key={item.name}>
      <item.icon width={120} height={40} />
      {!props.hiddenLabel && <Label>{item.name}</Label>}
    </ContentTech>
  );

  return (
    <ContainerTechs testID={`${props.list ? 'techs-container-list' : props.hiddenLogos ? 'techs-container-hiddenLogos' : 'techs-container'}`}>
      {(props.name && getTech(props.name) && !props.list) ? (
        renderItem({ item: getTech(props.name) })
      ) : (
        <ListTechs
          data={renderList()}
          renderItem={renderItem}
          horizontal={false}
          keyExtractor={(item: any) => item.name}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{ gap: 10 }}
          columnWrapperStyle={{ gap: 10 }}
        />
      )}
    </ContainerTechs>
  );
};
