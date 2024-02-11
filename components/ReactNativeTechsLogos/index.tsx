import { Container, Label } from './styled';
import { PropsType } from './types';

import VueIcon from "./techs/VueIcon";
import AndroidIcon from "./techs/AndroidIcon";

export default (props: PropsType) => {
  return (
    <Container testID="techs-container">
      <VueIcon width={120} height={40} />
      <AndroidIcon width={120} height={40} />
      <Label>Teste teste</Label>
    </Container>
  );
};
