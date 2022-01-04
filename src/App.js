import React from 'react';
import FeedbackOptions from './FeedbackOptions';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementFeedback = position => {
    this.setState(prevState => {
      return { [position]: prevState[position] + 1 };
    });
  };

  countTotalFeedback = () => {
    return 'rtrtr';
    /* this.setState(prevState => {
      console.log(prevState);
      let sum = 0;
      for (let salary of Object.values(prevState)) {
        return { sum: (sum += salary) };
      } */

    /* return { sum: 0 }; */
    /* }); */
  };

  render() {
    return (
      <div className="App">
        <h1>Please leave feedback</h1>
        <section>
          {Object.keys(this.state).map((btn, index) => {
            /* console.log(btn); */
            return (
              /*  <button type="button" key={index} onClick={() => this.handleIncrementFeedback(btn)}>
                {btn}
              </button> */
              <FeedbackOptions
                key={index}
                options={btn}
                onLeaveFeedback={() => this.handleIncrementFeedback(btn)}
              />
            );
          })}
        </section>

        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good: {this.state.good} </p>
          </li>
          <li>
            <p>Neutral: {this.state.neutral} </p>
          </li>
          <li>
            <p>Bad: {this.state.bad} </p>
          </li>
          <li>
            <p>Total: {() => this.countTotalFeedback()}</p>
          </li>
          {/* <li>
            <p>Positive feedback: {this.countPositiveFeedbackPercentage} </p>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default Feedback;
