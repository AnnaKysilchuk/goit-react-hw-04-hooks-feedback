import PropTypes from 'prop-types';
import style from './Section.module.css';

export const Section = ({ children, title }) => {
    return (
        <div>
            <h2 className={style.sectionTitle}>{title}</h2>
            {children}
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
};
