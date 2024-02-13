import { render } from '@testing-library/react-native';
import ReactNativeTechsLogos from '.';

test('should render first and second icon', () => {
  const { getByText } = render(<ReactNativeTechsLogos />);

  expect(getByText('Android')).toBeTruthy();
  expect(getByText('Apple')).toBeTruthy();
});
