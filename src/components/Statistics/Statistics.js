import { Component } from 'react';
import { Card } from './Statistics.styled';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };
  render() {
    const { good, neutral, bad, totalFeedback, positivePercentage } =
      this.props;

    return (
      <>
        <Card>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive feedback: {positivePercentage}</li>
        </Card>
      </>
    );
  }
}
