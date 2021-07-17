import React, { useState } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);

  const handleLeaveFeedback = (e) => {
    // this.setState((prevState) => ({
    //   [e.target.name]: prevState[e.target.name] + 1,
    // }));
    const { name } = e.target;
    switch (name) {
      case "Good":
        return setGood((prev) => prev + 1);
      case "Neutral":
        return setNeutral((prev) => prev + 1);
      case "Bad":
        return setBad((prev) => prev + 1);
      default:
        return null;
    }
  };

  const total = Good + Neutral + Bad;
  const positivePercentage = Math.floor((Good / total) * 100);

  // render() {
  // const feedbacks = {Object.keys({ Good, Neutral, Bad }) };

  return (
    <div className="Statistics">
      <section>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ Good, Neutral, Bad })}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>
      </section>
      <section>
        {total === 0 ? (
          <Notification stat="Statistics" message="No feedback given" />
        ) : (
          <Statistics
            stat="Statistics"
            good={Good}
            neutral={Neutral}
            bad={Bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </section>
    </div>
  );
}
