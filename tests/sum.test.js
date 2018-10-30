import React from 'react';
import Enzyme, {shallow, mount render} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src';

configure({ adapter: new Adapter() });

// describe('Testing App', () => {
  // it('renders', () => {
    //   const div = document.createElement('div');
      //   ReactDOM.render(<App />, div);
      // });
  // });



// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// it('works', () => {

// });
