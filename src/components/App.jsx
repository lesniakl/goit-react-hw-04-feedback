import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleChange = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        setTotal(total + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        setTotal(total + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        setTotal(total + 1);
        break;
      default:
        console.log(`This shouldn't have happened.`);
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((good / total) * 100);
    return `${percentage}%`;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleChange}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
}
