import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Button } from "@material-ui/core";

import "../../sass/components/_button.scss";

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: "none"
  }
}));

function SkyButton({ onClick, ...props }) {
  const classes = useStyles();

  return (
    <Button
      {...props}
      onClick={event => {
        onClick && onClick(event);
      }}
      variant="contained"
      className={`sky-button ${classes.root}`}
      fullWidth
      disableRipple
    />
  );
}

export default SkyButton;
