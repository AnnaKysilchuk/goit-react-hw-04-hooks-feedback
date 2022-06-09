import React, { Component } from 'react';
import { FeedbackOptions } from './components/feedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './components/statistics/Statistics.jsx';
import { Section } from './components/section/Section.jsx';
import { Notification } from './components/notification/Notification.jsx';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    updateStats = stateKey => {
        if (stateKey === 'good') {
            this.setState(prevState => ({
                good: prevState.good + 1,
            }));
            return;
        }
        if (stateKey === 'neutral') {
            this.setState(prevState => ({
                neutral: prevState.neutral + 1,
            }));
            return;
        }
        if (stateKey === 'bad') {
            this.setState(prevState => ({
                bad: prevState.bad + 1,
            }));
            return;
        }
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        if (this.countTotalFeedback()) {
            return Math.floor((this.state.good * 100) / this.countTotalFeedback());
        }
    };

    render() {
        return (
            <div>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.updateStats}
                    />
                </Section>
                <Section title={'Statistics'}>
                    {this.countTotalFeedback() ? (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.neutral}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </div>
        );
    }
}

export default App;
