import PropTypes from 'prop-types';
import { FeedbackButtonStyled } from './FeedbackOptions.styled';

function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
  //console.log(props);
  return (
    <FeedbackButtonStyled type="button" onClick={onLeaveFeedback}>
      {options}
    </FeedbackButtonStyled>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
