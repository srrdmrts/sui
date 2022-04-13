import { useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CloseCircle } from '../../icons';
import styles from './input.module.scss';

function Input({
    active,
    clearable,
    clearOnEscape,
    danger,
    error,
    helperText,
    hideLabel,
    icon,
    invalidText,
    labelText,
    numberInput,
    size,
    success,
    //type,
    warning,
    ...props
}) {
    const textInput = useRef(null);

    const handleClear = () => {
        textInput.current.value = '';
    }

    const handleDecrease = () => {
        if (textInput.current.value) {
            textInput.current.stepDown();
        } else {
            textInput.current.value = 0;
        }
    }

    const handleIncrease = () => {
        if (textInput.current.value) {
            textInput.current.stepUp();
        } else {
            textInput.current.value = 0;
        }
    }

    return (
        <label className={styles.wrapper}
            style={size ? { fontSize: `${size}px` } : undefined}
        >
            <span className={styles.labelText}>{labelText}</span>

            <div className={cn(
                styles.inputWrapper,
                success && styles.success,
                warning && styles.warning,
                danger && styles.danger,
                active && styles.active,
                //numberInput && styles.numberInput
            )}>
                {icon && icon}
                <input
                    ref={textInput}
                    className={cn(
                        styles.input,
                        size
                    )}
                    type={numberInput && 'number'}
                    {...props}
                />
                <div className={styles.actionButtons}>
                    {clearable && <CloseCircle
                        role='button'
                        className={styles.close}
                        onClick={handleClear}
                    />}
                    {numberInput && <div className={styles.numberButtons}>
                        <button onClick={handleDecrease}>-</button>
                        <button onClick={handleIncrease}>+</button>
                    </div>}
                </div>
            </div>
            {hideLabel || (
                invalidText
                    ? <span className={styles.invalidText}>{invalidText}</span>
                    : helperText
                        ? <span className={styles.helperText}>{helperText}</span>
                        : <span></span>
            )}
        </label>
    )
}

const NumberInput = ({ ...props }) => {
    return (
        <Input {...props} numberInput tabIndex='-1' />
    );
}

Input.propTypes = {
    active: PropTypes.bool,
    clearable: PropTypes.bool,
    clearOnEscape: PropTypes.bool,
    danger: PropTypes.bool,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    hideLabel: PropTypes.bool,
    icon: PropTypes.element,
    invalidText: PropTypes.string,
    labelText: PropTypes.string,
    numberInput: PropTypes.bool,
    size: PropTypes.string,
    success: PropTypes.bool,
    //type: PropTypes.oneOf(['text', 'number', 'password']),
    warning: PropTypes.bool,
};

Input.defaultProps = {
    active: false,
    clearable: false,
    clearOnEscape: false,
    error: false,
    helperText: '',
    hideLabel: false,
    invalidText: '',
    labelText: '',
    numberInput: false,
    size: 'default',
    success: false,
    //type: 'text',
};

export { Input, NumberInput };
