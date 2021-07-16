import React, { Component } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

class App extends Component {
  // Старый синтаксис
  // constructor() {
  //     super();

  //     this.state = {
  //         good: 0,
  //         neutral: 0,
  //         bad: 0,
  //     }
  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (e) => {
    this.setState((prevState) => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const percentage = (this.state.good * 100) / result;
    return Math.round(percentage);
  };

  render() {
    const feedbacks = Object.keys(this.state);

    return (
      <div className="Statistics">
        <section>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={feedbacks}
              onLeaveFeedback={this.handleLeaveFeedback}
            />
          </Section>
        </section>
        <section>
          {this.countTotalFeedback() === 0 ? (
            <Notification stat="Statistics" message="No feedback given" />
          ) : (
            <Statistics
              stat="Statistics"
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </section>
      </div>
    );
  }
}

export default App;
