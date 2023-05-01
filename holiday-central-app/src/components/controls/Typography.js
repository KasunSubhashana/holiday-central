import React from 'react';
import { Typography as MuiTypography } from '@mui/material';
import PropTypes from 'prop-types';

// const useStyles = makeStyles(theme => ({
//     typography: {
//         margin: theme.spacing(1),
//         padding: 7,
//         color: "#32325D",
//     },
// }));

export default function Typography(props) {
    const { id, className, text, variant, ...others } = props;
    // const classes = useStyles();

    return (
        <MuiTypography
            id={id}
            // className={className || classes.typography}
            variant={variant}
            {...others}
        >
            {text}
        </MuiTypography>
    )
}

Typography.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    variant: PropTypes.string,
    others: PropTypes.node
}
