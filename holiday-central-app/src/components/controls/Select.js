import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Select as MuiSelect, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    select: {
        margin: theme.spacing(0, 0, 2, 0),
        textAlign: "left",
    },
}));

export default function Select(props) {
    const { className, name, value, variant, onChange, options, ...others } = props;
    const classes = useStyles();

    return (
        <MuiSelect
            className={className || classes.select}
            name={name}
            value={value || ""}
            variant={variant || "outlined"}
            onChange={onChange}
            {...others}
        >
            <MenuItem value="">None</MenuItem>
            {
                options.map(item => (
                    <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                ))
            }
        </MuiSelect>
    )
}

Select.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    others: PropTypes.node
}
