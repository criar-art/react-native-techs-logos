import { render } from '@testing-library/react-native';
import ReactNativeTechsLogos from '.';
import { techs } from './mock';

test('should render the label test', () => {
  const { getByText } = render(<ReactNativeTechsLogos />);

  for(let item of techs) {
    const re = new RegExp(item.name, "i")
    const label = getByText(re);
    expect(label).toBeTruthy();
  }
});
