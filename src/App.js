import React from 'react';


class Example1 extends React.Component {
  render() {
    return React.createElement(
      'div',
      {className: 'createElementExample'},
      'Hello world with createElement'
    );
  }
}

class Example2 extends React.Component {
  render() {
    return <div>Hello world with React.Component</div>
  }
}


class Example3 extends React.PureComponent {
  render() {
    return <div>Hello world with React.PureComponent</div>
  }
}


const Example4 = () => <div>Hello world with Functional component</div>;

export {Example1, Example2, Example3, Example4};
