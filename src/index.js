import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  // gets users location based on browser
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position), // success callback
    (err) => console.log(err) // failed error callback
  );

  return <div>Hi There!</div>;
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
