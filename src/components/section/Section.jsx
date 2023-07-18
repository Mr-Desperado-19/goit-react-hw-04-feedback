import PropTypes from 'prop-types';
import "./Section.scss"

console.log('Section.js loaded!');

const Section = ({ title, children }) => {
  return (
    <div className='section'>
      <h2 className='section-title'>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;