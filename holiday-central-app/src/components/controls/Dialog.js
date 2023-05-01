import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Dialog as MuiDialog } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { DialogContentText } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  buttonConfirm: {
    color: "#FF074A",
    fontWeight: 600,
  },
  buttonCancel: {
    color: "#2d3436",
    fontWeight: 600,
  },
  title: {
    color: "#32325D",
  },
  message: {
    color: "#32325D",
  },
}))

export default function Dialog(props) {
  const { isOpen, setOpen, setDelete, dialogTitle, dialogMsg, PrimaryBtn, SecondaryBtn } = props;
  const classes = useStyles();

  return (
    <MuiDialog open={isOpen} onClose={() => setOpen(false)}>
      <DialogTitle className={classes.title}>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.message}>
          {dialogMsg}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className={classes.buttonCancel} onClick={() => setOpen(false)}>
          {SecondaryBtn}
        </Button>
        <Button className={classes.buttonConfirm} onClick={() => setDelete(true)} autoFocus>
          {PrimaryBtn}
        </Button>
      </DialogActions>
    </MuiDialog>
  );
}

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setDelete: PropTypes.func.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  dialogMsg: PropTypes.string.isRequired,
  PrimaryBtn: PropTypes.string.isRequired,
  SecondaryBtn: PropTypes.string.isRequired,
}
