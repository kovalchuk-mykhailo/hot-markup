import React from "react";
import PropTypes from "prop-types";
import "../../sass/components/_button.scss";
import { withRouter } from "react-router";
import { Button } from "@material-ui/core";

const LinkButton = props => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    className,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props;

  return (
    <Button
      {...rest} // `children` is just another prop!
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
      variant="contained"
      color="primary"
      className="link-button"
    />
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default withRouter(LinkButton);
