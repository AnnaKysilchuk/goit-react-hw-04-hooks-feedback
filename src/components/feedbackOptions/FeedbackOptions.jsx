import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
    <ul className={style.feedbackCategories}>
        <li className={style.feedbackCategoriesItem}>
            <button
                type="button"
                onClick={() => onLeaveFeedback('good')}
                className={style.feedbackBtn}
            >
                Good
            </button>
        </li>
        <li className={style.feedbackCategoriesItem}>
            <button
                type="button"
                onClick={() => onLeaveFeedback('neutral')}
                className={style.feedbackBtn}
            >
                Neutral
            </button>
        </li>
        <li className={style.feedbackCategoriesItem}>
            <button
                type="button"
                onClick={() => onLeaveFeedback('bad')}
                className={style.feedbackBtn}
            >
                Bad
            </button>
        </li>
    </ul>
);

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};
