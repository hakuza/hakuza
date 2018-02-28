import { shallow, mount } from 'enzyme';
import React from 'react';
import App from '../components/App.jsx';

it('works', () => {
  const wrap = mount(<App />);
  expect(wrap).toMatchSnapshot();
});
