# react-native-techs-logos

A list with logos company and techs

<img alt="A list with logos company and techs screenshot" width="220px" src="https://raw.githubusercontent.com/criar-art/react-native-techs-logos/master/example/assets/screenshoot.png" />

## Install

```bash
npm install --save react-native-techs-logos

```

## Usage basic

```jsx
import ReactNativeTechsLogs from 'react-native-techs-logos';

// list all logos
<ReactNativeTechsLogs />

// single icon
<ReactNativeTechsLogs name="javascript" />

// list limited logos
<ReactNativeTechsLogs list={['vue','javascript', 'react', 'angular']} />

// list all logos with hiddenLogos
<ReactNativeTechsLogs hiddenLogos={['vue','javascript', 'react', 'angular', 'android']} />

// Hidden label
<ReactNativeTechsLogs name="javascript" hiddenLabel />
<ReactNativeTechsLogs hiddenLabel />

```

## Props of component

Properties to use in the component

```typescript
type Props = {
  name?: string;
  list?: Array<String>;
  hiddenLogos?: Array<String>;
  hiddenLabel?: boolean;
  flatList?: boolean;
  rounded?: boolean;
  background?: string;
  size?: number;
  gap?: number;
};
```
