import React from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './ComponentsCover/Section';
import { Notification } from './NothingIsChosen/Notification';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ({ target: { name } }) => {
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };
  countTotalFeedback(body) {
    let a = 0;
    for (const key in body) {
      a += body[key];
    }
    return a;
  }
  countPositiveFeedbackPercentage() {
    return (
      (100 * this.state.good) /
      this.countTotalFeedback(this.state)
    ).toFixed(0);
  }

  render() {
    return (
      <div className="container">
        <Section title="Please leave feedbackd">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        {!this.countTotalFeedback(this.state) ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              title="Statistics"
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
