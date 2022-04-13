import PropTypes from 'prop-types';
import { Box } from 'react-polymorphic-box';
import cn from 'classnames';
import FocusTrap from 'focus-trap-react';
//import ReactModal from 'react-modal';
//import styles from './modal.scss';
import styles from './modal.module.scss';
//import { useContext } from 'react';
//import { ModalContext } from '../../../store/ModalProvider';

/* function Modal({ children, ...props }) {
    return (
        <ReactModal
            isOpen={true}
            portalClassName={styles.portal}
            overlayClassName={styles.overlay}
            className={styles.content}
            {...props}>
            {children}
        </ ReactModal>
    )
} */

function Modal({ children, isOpen, onClosed, onOpened }) {
    //const context = useContext(ModalContext);

    //const [isBodyScroll, setIsBodyScroll] = useState(isOpen)

    return (
        <Box as={isOpen ? FocusTrap : ""}>
            <div className={cn(
                styles.overlay,
                isOpen || styles.hide
            )}>
                <div className={styles.modal}>
                    <header className={styles.header}>

                    </header>

                    <div className={styles.content}>
                        {children}
                    </div>

                    <footer className={styles.footer}>

                    </footer>
                </div>
            </div>
        </Box>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClosed: PropTypes.func,
    onOpened: PropTypes.func
};

Modal.defaultProps = {
    isOpen: false
};

export { Modal };
