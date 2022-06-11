import { useState } from 'react';
import { FeedbackOptions } from './components/feedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './components/statistics/Statistics.jsx';
import { Section } from './components/section/Section.jsx';
import { Notification } from './components/notification/Notification.jsx';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const updateStats = stateKey => {
        if (stateKey === 'good') {
            setGood(prevState => prevState + 1);
            return;
        }
        if (stateKey === 'neutral') {
            setNeutral(prevState => prevState + 1);
            return;
        }
        if (stateKey === 'bad') {
            setBad(prevState => prevState + 1);
            return;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        if (countTotalFeedback()) {
            return Math.floor((good * 100) / countTotalFeedback());
        }
    };

    return (
        <div>
            <Section title={'Please leave feedback'}>
                <FeedbackOptions onLeaveFeedback={updateStats} />
            </Section>
            <Section title={'Statistics'}>
                {countTotalFeedback() ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={neutral}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        </div>
    );
};

export default App;
