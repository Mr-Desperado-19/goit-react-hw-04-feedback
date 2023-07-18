import PropTypes from 'prop-types';
import "./FeedbackOptions.scss"

console.log('FeedbackOptions.js loaded!');

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button className='feedback-btn' key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;