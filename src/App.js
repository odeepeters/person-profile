import React, { Component } from 'react';
import Image from './image/img-5.jpg'; // Import the image
import './App.css'; // Import the CSS file

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A software engineer with a passion for coding and learning new technologies.',
        imgSrc: Image, // Use the imported image
        profession: 'Software Engineer',
      },
      show: false,
      interval: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000); // Increment interval every second
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, interval } = this.state;
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" style={{ width: '200px', height: '300px' }} // Inline style for resizing
/>

            <p><strong>Profession:</strong> {person.profession}</p>
          </div>
        )}
        <div style={{ marginTop: '20px' }}>
          <p>Time since component mounted: {interval} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
