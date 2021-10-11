import { Component } from 'react';
import  Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import './App.css';

class App extends Component {
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
    const { good, neutral, bad } = this.state
    const {handleFeedback, countTotalFeedback, countPositiveFeedbackPercentage} = this
    return (
      <div className="App">
        <h1>Feedbacks</h1>
        <Section title="Please leave your feedback:">
          <FeedbackOptions
          handleFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {/* render on condition */}
          {countTotalFeedback() ?
            (          <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            />) :
            (
              <Notification message="No feedbacks given"/>
            )}
        </Section>
      </div>
    )
  }
};

export default App;