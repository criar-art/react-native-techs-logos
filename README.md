# react-native-techs-logos

A list with logos company and techs

<img alt="A list with logos company and techs screenshot" width="250px" src="https://github.com/criar-art/react-native-techs-logos/blob/master/assets/screen-shoot.png" />

Install
```js
npm install --save react-native-techs-logos
```

Usage basic
```react
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
