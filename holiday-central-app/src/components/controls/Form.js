import React from 'react'
import { makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    form: {
        margin: theme.spacing(2, 2, 2, 2),
    },
}));

export default function Form(props) {
    const { className } = props;
    const classes = useStyles();

    return (
        <form className={className || classes.form}>
            {props.children}
        </form>
    )
}

Form.propTypes = {
    className: PropTypes.string
}
