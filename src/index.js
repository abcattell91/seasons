import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  // Special function which is not required by react
  // Anytime a new instance is created this is called
  constructor(props) {
    // Borrow from react base class. react.component.
    // This function has its own constructor so using super
    // Super is a reference to parents constructor
    super(props);
    this.state = { lat: null }; // state object
  }
  // Class! React says we have to define RENDER!!
  render() {
    // gets users location based on browser
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position), // success callback
      (err) => console.log(err) // failed error callback
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
