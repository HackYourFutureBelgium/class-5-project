import React from 'react';
import { shallow } from 'enzyme';
import Greeter from './Greeter';


it('should speak German on a german browser and english on an english browser', () => {
  setLanguage('de-DE')
  expect(shallow(<Greeter />).text()).toContain('Guten Tag')
  setLanguage('en-US')
  expect(shallow(<Greeter />).text()).toContain('Hello')
})


it('should set the language in the navigator to an arbitrary value', () => {
  setLanguage('mi-MI')
  expect(navigator.language).toBe('mi-MI')
});

const setLanguage = (language) => {
  // eslint-disable-next-line no-underscore-dangle
  (window.navigator).__defineGetter__('language', () => language);
}
