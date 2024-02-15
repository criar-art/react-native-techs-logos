import { StatusBar as StatusBarReactNative } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${`${StatusBarReactNative.currentHeight}px`};
`;

export const Container = styled.View`
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  height: 50px;
  padding: 10px;
  background: #222;
  flex-wrap: wrap;
  flex-direction: row;
  shadow-opacity: 0.46;
  shadow-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 8px;
  elevation: 17;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-left: 10px;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  color: #000;
  margin: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
`;

export const Author = styled.Text`
  font-size: 18px;
  color: #000;
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  text-align: center;
  background: #eee;
`;
