import { Component } from 'react';
import './App.css';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

// adding feedbacks
  handleFeedback = (e) => {
    const { name } = e.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

// total sum 
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  };

// percent of positive feedbacks
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());

  }

  render() {
    return (
      <div className="App">
        <h1>Feedbacks</h1>
        <section>
          <div className="counter">
            <h2>Please leave your feedback:</h2>
            <button type="button" onClick={this.handleFeedback} name='good'>😍 Good</button>
            <button type="button" onClick={this.handleFeedback} name='neutral'>😐 Neutral</button>
            <button type="button" onClick={this.handleFeedback} name='bad'>😕 Bad</button>
          </div>
        </section>
        <section>
          <h2>Statistics</h2>
          <ul>
            <li name='good'>Good: {this.state.good}</li>
            <li name='neutral'>Neutral: {this.state.neutral}</li>
            <li name='bad'>Bad: {this.state.bad}</li>
            <li>Total: { this.countTotalFeedback() }</li>
            <li>Positive feedbacks: {this.countPositiveFeedbackPercentage()} %</li>
          </ul>
        </section>
      </div>
    )
  }

}

export default App;
