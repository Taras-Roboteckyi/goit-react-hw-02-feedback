function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
  console.log(props);
  return (
    <button type="button" onClick={onLeaveFeedback}>
      {options}
    </button>
  );
}

export default FeedbackOptions;
