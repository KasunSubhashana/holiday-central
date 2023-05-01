import React from 'react';
import { Snackbar as MuiSnackBar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Slide } from '@material-ui/core';
import PropTypes from 'prop-types';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

export default function SnackBar(props) {
  const { isOpen, openSnackBar, alertMessage, severity, variant } = props;

  const handleClose = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }
  };

  return (
    <MuiSnackBar open={isOpen} autoHideDuration={4000} TransitionComponent={TransitionUp} onClose={() => openSnackBar(false)}>
      <Alert
        onClose={() => openSnackBar(false)}
        severity={severity || "success"}
        elevation={6}
        variant={variant || "filled"}
      >
        {alertMessage}
      </Alert>
    </MuiSnackBar>
  )
}

SnackBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openSnackBar: PropTypes.func.isRequired,
  alertMessage: PropTypes.string.isRequired,
  severity: PropTypes.string,
  variant: PropTypes.string,
}
