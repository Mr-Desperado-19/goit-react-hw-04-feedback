import React, { useState } from 'react';
import Section from '../section';
import FeedbackOptions from '../feedbackOptions';
import Statistics from '../statistics';
import Notification from '../notification';

console.log('App.js loaded!');

const App = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = option => {
    setFeedbackState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedbackState;
  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      {totalFeedback ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;