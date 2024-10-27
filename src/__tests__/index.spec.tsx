import React from 'react';
import { render } from '@testing-library/react-native';
import ReactNativeTechsLogos from '..';

test('should render first and second icon', () => {
  const { getByText, getByTestId } = render(<ReactNativeTechsLogos />);

  expect(getByTestId('techs-container')).toBeTruthy();
  expect(getByText('Android')).toBeTruthy();
  expect(getByText('Apple')).toBeTruthy();
});

test('should render React item', () => {
  const { getByText, getByTestId } = render(
    <ReactNativeTechsLogos name="React" />
  );

  expect(getByTestId('techs-container')).toBeTruthy();
  expect(getByText('React')).toBeTruthy();
});

test('should render NPM item', () => {
  const { getByText, getByTestId } = render(
    <ReactNativeTechsLogos name="NPM" />
  );

  expect(getByTestId('techs-container')).toBeTruthy();
  expect(getByText('NPM')).toBeTruthy();
});

test('should render list', () => {
  const { getByText, getByTestId } = render(
    <ReactNativeTechsLogos list={['vue', 'javascript', 'react', 'angular']} />
  );

  expect(getByTestId('techs-container-list')).toBeTruthy();

  expect(getByText('React')).toBeTruthy();
  expect(getByText('Vue')).toBeTruthy();
  expect(getByText('JavaScript')).toBeTruthy();
  expect(getByText('Angular')).toBeTruthy();
});

test('should render list hiddenLogos', () => {
  const { getByTestId } = render(
    <ReactNativeTechsLogos
      hiddenLogos={['vue', 'javascript', 'react', 'angular']}
    />
  );

  expect(getByTestId('techs-container-hiddenLogos')).toBeTruthy();
});

test('should render props of component single', () => {
  const { toJSON } = render(
    <ReactNativeTechsLogos name="jest" background="#f00" size={200} rounded />
  );

  const { props, children } = toJSON().children[0];

  expect(children[1].children[0]).toBe('Jest');
  expect(props.background).toBe('#f00');
  expect(props.style.backgroundColor).toBe('#f00');
  expect(props.size).toBe(200);
  expect(props.style.width).toBe(200);
  expect(props.style.height).toBe(200);
  expect(props.style.borderTopLeftRadius).toBe(100);
  expect(props.style.borderTopRightRadius).toBe(100);
  expect(props.style.borderBottomLeftRadius).toBe(100);
  expect(props.style.borderBottomRightRadius).toBe(100);
});

test('should render props of component list', () => {
  const { toJSON } = render(
    <ReactNativeTechsLogos
      list={['react', 'jest']}
      background="#000"
      size={150}
      gap={50}
    />
  );

  const { props, children } = toJSON().children[0].children[0];

  expect(children[1].children[0]).toBe('React');
  expect(props.background).toBe('#000');
  expect(props.style.backgroundColor).toBe('#000');
  expect(props.size).toBe(150);
  expect(props.style.width).toBe(150);
  expect(props.style.height).toBe(150);
  expect(props.gap).toBe(50);
  expect(props.style.marginTop).toBe(50);
  expect(props.style.marginLeft).toBe(50);
  expect(props.style.marginRight).toBe(50);
  expect(props.style.marginBottom).toBe(50);
});

test('should render icons only when raw is true', () => {
  const { queryByTestId, getByTestId, queryByText } = render(
    <ReactNativeTechsLogos raw={true} list={['react', 'jest']} />
  );

  expect(queryByTestId('techs-container')).toBeNull();
  expect(getByTestId('icon-react')).toBeTruthy();
  expect(getByTestId('icon-jest')).toBeTruthy();
  expect(queryByText('React')).toBeNull();
  expect(queryByText('Jest')).toBeNull();
});
