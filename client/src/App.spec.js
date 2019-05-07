import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

beforeAll(() => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({text: "someText"}));
})

it('renders a quote', async () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.html());
  expect(wrapper.html().includes("<div class=\"quote\">")).toEqual(true);
});

export default undefined;