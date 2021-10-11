import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({handleFeedback}) {
  return (
    <>
      <button className={s.btn} type="button" onClick={handleFeedback} name='good'>😍 Good</button>
      <button className={s.btn} type="button" onClick={handleFeedback} name='neutral'>😐 Neutral</button>
      <button className={s.btn} type="button" onClick={handleFeedback} name='bad'>😕 Bad</button>
    </>
  )
};

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
