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
    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: '' }; // state object

    // gets users location based on browser
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude})
      },
      err => {
        this.setState({ errorMessage: err.message})
      } // failed error callback
    );
  }
  // Class! React says we have to define RENDER!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat} </div>
    }

    return <div>Loading...</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
