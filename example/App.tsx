import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { SafeArea, Container, Header, Title, SubTitle, Author } from './styled';

// import ReactNativeTechsLogos from 'react-native-techs-logos';
import ReactNativeTechsLogos from '../src/index';

export default function App() {
  return (
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
}
