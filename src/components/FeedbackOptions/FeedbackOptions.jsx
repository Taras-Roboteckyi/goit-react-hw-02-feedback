import PropTypes from 'prop-types';

function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
  //console.log(props);
  return (
    <button type="button" onClick={onLeaveFeedback}>
      {options}
    </button>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
