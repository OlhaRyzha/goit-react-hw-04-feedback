import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function Feedback({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <Button
          onClick={onLeaveFeedback}
          type="button"
          key={option}
          name={option}
        >
          {option}
        </Button>
      ))}
    </>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
