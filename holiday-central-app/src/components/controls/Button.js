import React from 'react'
import { Button as MuiButton } from '@mui/material'
import PropTypes from 'prop-types';

// const useStyles = makeStyles(theme => ({
//     button: {
//         minWidth: 70,
//         margin: theme.spacing(5, 0, 2, 1),
//     },
// }));

export default function Button(props) {
    const { id, className, text, color, variant, align, onClick } = props;
    // const classes = useStyles();

    return (
        <MuiButton
            id={id}
            // className={className || classes.button}
            color={color || "primary"}
            variant={variant || "contained"}
            align={align || "center"}
            onClick={onClick}
        >
            {text}
        </MuiButton>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
