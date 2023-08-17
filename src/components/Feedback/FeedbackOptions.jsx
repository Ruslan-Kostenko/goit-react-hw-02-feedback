export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option === 'good' ? 'Good' : null}
          {option === 'neutral' ? 'Neutral' : null}
          {option === 'bad' ? 'Bad' : null}
        </button>
      ))}
    </>
  );
};
