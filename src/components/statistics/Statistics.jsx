import PropTypes from 'prop-types';
import "./Statistics.scss"

console.log('Statistics.js loaded!');

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className='statistics-text'><span className='statistics-text-part'>Good:</span> {good}</p>
      <p className='statistics-text'><span className='statistics-text-part'>Neutral:</span> {neutral}</p>
      <p className='statistics-text'><span className='statistics-text-part'>Bad:</span> {bad}</p>
      <p className='statistics-text'><span className='statistics-text-part'>Total:</span> {total}</p>
      <p className='statistics-text'><span className='statistics-text-part'>Positive feedback:</span> {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;