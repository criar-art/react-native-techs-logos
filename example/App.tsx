import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

// Package from NPM public
import ReactNativeTechsLogos from 'react-native-techs-logos';
// Package from folder
// import ReactNativeTechsLogos from '../src/index';

import { SafeArea, Container, Header, Title, SubTitle, Author } from './styled';

const App = () => (
  <SafeArea>
    <Header>
      <ReactNativeTechsLogos name="react" hiddenLabel size={30} />
      <Title>react-native-techs-logos</Title>
    </Header>
    <ScrollView>
      <Container>
        <SubTitle>Single Github</SubTitle>
        <ReactNativeTechsLogos name="github" background="#fff" />
        <SubTitle>List Array</SubTitle>
        <ReactNativeTechsLogos
          list={['vue', 'javascript', 'react', 'angular']}
          background="#fff"
          gap={20}
        />
        <SubTitle>List Full</SubTitle>
        <ReactNativeTechsLogos background="#fff" rounded />
        <Author>Author @lucasferreiralimax</Author>
        <StatusBar style="light" backgroundColor="#000" />
      </Container>
    </ScrollView>
  </SafeArea>
);

export default App;
