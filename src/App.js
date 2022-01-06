import React from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import { SectionButtonStyled, StatisticTitle } from './App.styled';

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
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good
      ? `${Math.round((this.state.good * 100) / this.countTotalFeedback()) + '%'}`
      : `0`;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <SectionButtonStyled>
          {Object.keys({ good, neutral, bad }).map((btn, index) => {
            return (
              <FeedbackOptions
                key={index}
                options={btn}
                onLeaveFeedback={() => this.handleIncrementFeedback(btn)}
              />
            );
          })}
        </SectionButtonStyled>

        <StatisticTitle>Statistics</StatisticTitle>

        {good === 0 && neutral === 0 && bad === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default Feedback;
