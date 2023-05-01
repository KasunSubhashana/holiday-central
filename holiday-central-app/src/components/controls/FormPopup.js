import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Dialog } from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    dialogBackground: {
        backgroundColor: 'transparent',
        boxShadow: theme.shadows[0],
    },
}));

export default function FormPopup(props) {
    const { isOpen, setOpen, children } = props;
    const classes = useStyles();
    return (
        <Dialog
            open={isOpen}
            onClose={() => setOpen(false)}
            classes={{ paper: classes.dialogBackground }}
            maxWidth="md"
        >
            {children}
        </Dialog>
    )
}

FormPopup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}
