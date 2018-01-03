import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss'; // Note: This is possible because of style-loader for Webpack

/* 
  Basic example. For a project structured this way, this brohemoth would go into
  the 'components' folder and be import here or somewhere else for use. Try moving it 
  there, doing a tutorial on react-router, or just doing whatever the hell you want.
*/
class MyComponent extends React.Component {
  render() {
    return (
      <div className="my-component">
        <p>Success!</p>
      </div>
    );
  }
}

// Application bootstrap
ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
);


