import { TextField as MuiTextField } from '@mui/material'
import PropTypes from 'prop-types';

// const useStyles = makeStyles(theme => ({
//     textField: {
//         margin: theme.spacing(0, 0, 2, 0),
//         minWidth: 400,
//         '& .MuiFormHelperText-root': {
//             textAlign: "right",
//         },
//     },
// }));

export default function TextField(props) {
    const { id, name, className, label, value, variant, size, error, autoComplete, onChange, ...others } = props;
    // const classes = useStyles();

    return (
        <MuiTextField
            id={id}
            name={name}
            // className={className || classes.textField}
            label={label || ""}
            value={value || ""}
            onChange={onChange}
            variant={variant || "outlined"}
            size={size || "small"}
            autoComplete={autoComplete || "off"}
            {...(error && { error: true, helperText: error })}
            {...others}
        />
    )
}

TextField.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    variant: PropTypes.string,
    size: PropTypes.string,
    error: PropTypes.string,
    autoComplete: PropTypes.string,
    onChange: PropTypes.func,
    others: PropTypes.node
}
