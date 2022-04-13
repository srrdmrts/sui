import PropTypes from 'prop-types';
import { Box } from 'react-polymorphic-box';
import * as Icons from '../../icons';
import styles from './icon.module.scss';

function Icon({ icon, ...props }) {
    return (
        <span className={styles.wrapper}>
            <Box
                as={Icons[icon] || 'span'}
                className={styles.svg}
                {...props}
            />
        </span>
    );
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired
};

export { Icon };
