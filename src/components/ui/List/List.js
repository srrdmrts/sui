import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box } from 'react-polymorphic-box';
import styles from './list.module.scss';

const ListItem = ({ as, ...props }) => {
    <li>
        <Box
            //as={as ? as : }
            className={styles.item}
            {...props}
        />
    </li>
};

ListItem.propTypes = {
    as: PropTypes.oneOf(['a', 'button'])
};

ListItem.defaultProps = {
    as: 'a'
};


function List({ className, ...props }) {
    return (
        <ul className={styles.list}>
            List
        </ul>
    )
}

List.propTypes = {

};

List.defaultProps = {

};

export { List, ListItem };
