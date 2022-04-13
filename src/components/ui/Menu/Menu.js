import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box } from 'react-polymorphic-box';
import styles from './menu.module.scss';
import { useRef, useState } from 'react';

const MenuItem = ({ as, ...props }) => {
    <li>
        <Box
            //as={as ? as : }
            className={styles.item}
            {...props}
        />
    </li>
};

MenuItem.propTypes = {
    as: PropTypes.oneOf(['a', 'button'])
};

MenuItem.defaultProps = {
    as: 'Button'
};


function Menu({ className, ...props }) {
    const [isOpen, setIsOpen] = useState(false);

    const onClickHandler = (event) => {
        event.stopPropagation();

        const close = () => {
            setIsOpen(false); console.log('closed');
        }

        const open = () => {
            setIsOpen(true); console.log('opened');
            document.addEventListener('click', close, { once: true });
        }

        return isOpen ? close() : open();
    }

    return (
        <div>
            <button
                onClick={onClickHandler}
            >menu</button>
            {isOpen && (
                <ul className={styles.menu}>
                    Menu
                </ul>
            )}
        </div>
    )
}

Menu.propTypes = {

};

Menu.defaultProps = {

};

export { Menu, MenuItem };
