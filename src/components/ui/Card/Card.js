import PropTypes from 'prop-types';
import styles from './card.module.scss';

function CardWrapper({ children }) {
    return (
        <div className={styles.cardWrapper}>
            {children}
        </div>
    )
}

function Card({ title, children }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
    //children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

Card.defaultProps = {
    title: 'Card'
};

export { CardWrapper, Card };
