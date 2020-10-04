import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        root: {
            height: 44
        },
}));


const InputField = ( props ) => {
    const {labelText, type, variant } = props;
    const classes = useStyles ();
    return (
        <div data-testid="InputField" >
            <TextField
                className={classes.root}
                variant={variant}
                label={labelText}
                size='small'
                type={ type }
            />
        </div>
    )
};

InputField.propTypes = {

    className: PropTypes.string,

    labelText: PropTypes.string.isRequired,

    type: PropTypes.oneOf(['password', 'text', 'email', 'search']).isRequired,

    variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
};

InputField.defaultProps = {
    type: "text",
    variant: 'outlined'
};

export default InputField;
