import React from 'react'
import { makeStyles } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    datePicker: {
        margin: theme.spacing(0, 0, 1, 0),
        width: '100%',
    },
}));

export default function DatePicker(props) {
    const { className, variant, inputVariant, name, value, format, size, onChange, ...others } = props;
    const classes = useStyles();

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className={className || classes.datePicker}
                variant={variant || "inline"}
                inputVariant={inputVariant || "outlined"}
                name={name}
                size={size || "small"}
                value={value}
                format={format || "dd/MM/yyyy"}
                onChange={date => onChange(convertToDefEventPara(name, date))}
                {...others}
            />
        </MuiPickersUtilsProvider>
    )
}

DatePicker.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.string,
    inputVariant: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.instanceOf(Date),
    format: PropTypes.string,
    size: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    others: PropTypes.node
}
