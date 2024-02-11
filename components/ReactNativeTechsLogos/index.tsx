import { FlatList, ScrollView } from 'react-native';
import { ContainerTechs, ContentTech, Label } from './styled';
import { PropsType } from './types';

import techs from './techs';

export default (props: PropsType) => {
  return (
    <ContainerTechs testID="techs-container">
      <ScrollView contentContainerStyle={{
        flexDirection: 'col',
        flexWrap: 'wrap',
      }}>
        {/* <FlatList
          data={techs}
          renderItem={({ item }) => {
            console.log('console.log(item):', item)
            return (
              <ContentTech key={item.name}>
                <item.icon width={120} height={40} />
                <Label>{item.name}</Label>
              </ContentTech>
            );
          }}
          keyExtractor={(item: any) => item.name}
          showsHorizontalScrollIndicator={false}
          numColumns={techs.length / 2}
        /> */}
        {techs.map((item: any, index: number) => (
          <ContentTech key={index}>
            <item.icon width={120} height={40} />
            <Label>{item.name}</Label>
          </ContentTech>
        ))}
      </ScrollView>
    </ContainerTechs>
  );
};
