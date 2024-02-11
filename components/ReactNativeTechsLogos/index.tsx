import { ContainerTechs, ListTechs, ContentTech, Label } from './styled';
import { PropsType } from './types';
import techs from './techs';

export default (props: PropsType) => {
  const renderItem = ({ item }: any) => (
    <ContentTech key={item.name}>
      <item.icon width={120} height={40} />
      <Label>{item.name}</Label>
    </ContentTech>
  );

  return (
    <ContainerTechs testID="techs-container">
      <ListTechs
        data={techs}
        renderItem={renderItem}
        horizontal={false}
        keyExtractor={(item: any) => item.name}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </ContainerTechs>
  );
};
