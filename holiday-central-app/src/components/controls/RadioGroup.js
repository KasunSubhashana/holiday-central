import React from 'react'
import { makeStyles } from '@material-ui/core';
import { RadioGroup as MuiRadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    radioGroup: {
        margin: theme.spacing(0, 0, 2, 0),
        width: '100%',
    },
}));

export default function RadioGroup(props) {
    const { className, name, value, color, onchange, options, ...others } = props;
    const classes = useStyles();

    return (
        <MuiRadioGroup
            className={className || classes.radioGroup}
            name={name}
            value={value}
            onChange={onchange}
            {...others}
        >
            {
                options.map(item => (
                    <FormControlLabel key={item.id} value={item.id}
                        control={
                            <Radio color={color || "primary"} />
                        } label={item.title} />
                ))
            }
        </MuiRadioGroup>
    )
}

RadioGroup.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    color: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    others: PropTypes.node,
}
