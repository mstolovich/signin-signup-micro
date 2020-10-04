import React from 'react';
import PropTypes from 'prop-types';

import {Button as MaterialButton} from "@material-ui/core";

const Button = (props) => {
    const { children, size, variant, type, color } = props;
    return(
        <div data-testid="Button">
            <MaterialButton
                size={size}
                variant={variant}
                type={type}
                color={color}
            >
                { children }
            </MaterialButton>
        </div>
    );
}

Button.propTypes = {

    children: PropTypes.string.isRequired,

    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,

    variant: PropTypes.oneOf(['filled', 'outlined', 'standard']).isRequired,

    type: PropTypes.string.isRequired,

    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']).isRequired
};

Button.defaultProps = {

    variant: 'contained',

};

export default Button;
