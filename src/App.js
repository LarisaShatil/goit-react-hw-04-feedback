import { useState } from 'react';

import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import './App.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
    const handleFeedback = (e) => {
      const name = e.target.name;
      if (name === 'good') { 
        setGood(prevGood => prevGood +1)
      }
      if (name === 'neutral') { 
        setNeutral(prevNeutral => prevNeutral +1)
      }
      if (name === 'bad') { 
        setBad(prevBad => prevBad +1)
      }
  };

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());

  }

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

export default App;