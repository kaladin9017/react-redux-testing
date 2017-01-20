import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

global.navigator = {
  userAgent: 'node.js'
};

// Set up testing environment to run like a browser in command line
// create a fake dom;
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window); // tells jquery to only affeft the fake dom window and gives access to jquery chai

// build renderComponent helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); /// Html

}


// build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if(value) {
    this.val(value);
  }

  TestUtils.Simulate[eventName](this[0]);

}


// set up chai-jquery
chaiJquery(chai, chai.util, $);



export {renderComponent, expect};
