import { Feedback } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';
export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, item) => acc + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total ? `${((good / total) * 100).toFixed()}%` : 0;
  };

  const onLeaveFeedback = e => {
    setFeedback(prevState => {
      return {
        ...feedback,
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };
  const { good, neutral, bad } = feedback;

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage()}
            totalFeedback={countTotalFeedback()}
          />
        )}
      </Section>
    </div>
  );
}
