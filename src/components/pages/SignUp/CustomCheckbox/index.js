import React from "react";
import { Checkbox, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const CustomCheckox = withStyles({
  root: {
    color: grey[50],
    "&$checked": {
      color: grey[150]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);
