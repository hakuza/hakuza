import { shallow, mount } from 'enzyme';
import React from 'react';
import App from '../components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('description'));

it('works and doesnt crash', () => {
  const wrap = mount(<App />);
  expect(wrap).toMatchSnapshot();
});
