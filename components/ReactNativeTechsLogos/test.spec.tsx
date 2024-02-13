import { render } from '@testing-library/react-native';
import ReactNativeTechsLogos from '.';

test('should render first and second icon', () => {
  const { getByText, getByTestId } = render(<ReactNativeTechsLogos />);

  expect(getByTestId('techs-container')).toBeTruthy();
  expect(getByText('Android')).toBeTruthy();
  expect(getByText('Apple')).toBeTruthy();
});

test('should render React item', () => {
  const { getByText, getByTestId } = render(<ReactNativeTechsLogos name='React' />);

  expect(getByTestId('techs-container')).toBeTruthy();
  expect(getByText('React')).toBeTruthy();
});

test('should render NPM item', () => {
  const { getByText, getByTestId } = render(<ReactNativeTechsLogos name='NPM' />);

  expect(getByTestId('techs-container')).toBeTruthy();
  expect(getByText('NPM')).toBeTruthy();
});

test('should render list', () => {
  const { getByText, getByTestId } = render(<ReactNativeTechsLogos list={['vue','javascript', 'react', 'angular']} />);

  expect(getByTestId('techs-container-list')).toBeTruthy();

  expect(getByText('React')).toBeTruthy();
  expect(getByText('Vue')).toBeTruthy();
  expect(getByText('JavaScript')).toBeTruthy();
  expect(getByText('Angular')).toBeTruthy();
});


test('should render list', () => {
  const { getByTestId } = render(<ReactNativeTechsLogos hiddenLogos={['vue','javascript', 'react', 'angular']} />);

  expect(getByTestId('techs-container-hiddenLogos')).toBeTruthy();
});
