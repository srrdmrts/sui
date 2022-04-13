import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box } from 'react-polymorphic-box';
import styles from './button.module.scss';
import { Spinner } from '../';

export const ButtonThemes = {
    PRIMARY: 'primary',
    DANGER: 'danger',
    SUCCESS: 'success',
    WARNING: 'warning',
};

export const ButtonVariants = {
    DEFAULT: 'default',
    GRADIENT: 'gradient',
    OUTLINED: 'outlined',
    SHAPED: 'shaped',
    TEXT: 'text',
};

function Button({
    className,
    disabled,
    //href,
    icon,
    isLoading,
    theme,
    label,
    variant,
    size,
    ...props
}) {
    return (
        <Box
            as={props.href ? 'a' : 'button'}
            className={cn(
                styles.button,
                theme && styles[theme],
                variant && styles[variant],
                isLoading && styles.isLoading,
                className
            )}
            disabled={isLoading || disabled}
            {...props}
        >
            {isLoading ? <Spinner /> : (icon && icon)}

            {label &&
                <span className={styles.label}>{label}</span>
            }

            {/* <div className={styles.gradient}></div> */}
        </Box>
    );
}

const IconButton = ({ rounded, ...props }) => {
    return (
        <Button
            {...props}
            label={undefined}
            className={cn(
                styles.iconButton,
                rounded && styles.rounded
            )}
        />
    );
};

const ButtonPropsTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.element,
    isLoading: PropTypes.bool,
    theme: PropTypes.oneOf(Object.values(ButtonThemes)/* ['primary', 'danger', 'success', 'warning'] */),
    label: PropTypes.string,
    variant: PropTypes.oneOf(Object.values(ButtonVariants)/* ['default', 'gradient', 'outlined', 'shaped', 'text'] */),
    size: PropTypes.string
};

Button.propTypes = ButtonPropsTypes;

IconButton.propTypes = {
    ...ButtonPropsTypes,
    rounded: PropTypes.bool
};

IconButton.defaultProps = {
    rounded: false,
    variant: 'text',
};

export { Button, IconButton };
