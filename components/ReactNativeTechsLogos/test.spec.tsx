import { render } from '@testing-library/react-native';
import ReactNativeTechsLogos from '.';

test('should render the label test', () => {
  const { getByText } = render(<ReactNativeTechsLogos />);

  const label = getByText("Android");
  expect(label).toBeTruthy();
});
