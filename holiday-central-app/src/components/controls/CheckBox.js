import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Checkbox as MuiCheckBox, FormControlLabel } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function CheckBox(props) {
    const { className, color, label, name, value, onChange, ...others } = props;

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    });

    return (
        <FormControlLabel
            control={
                <MuiCheckBox
                    color={color || "primary"}
                    name={name}
                    checked={value || false}
                    //onChange={event => onChange(convertToDefEventPara(name, event.target.checked))} //For Common onChange
                    onChange={onChange}
                    {...others}
                />
            }
            label={label}
        />
    )
}

CheckBox.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    others: PropTypes.node,
}
