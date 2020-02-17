import React from "react";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Link from "@material-ui/core/Link";
import "../../sass/components/_container.scss";

function BackLink() {
  return (
    <span
      className="back-link-container"
      onClick={() => {
        console.info("Back button click.");
      }}
    >
      <ArrowBackIosIcon color="primary" fontSize="small" />
      <Link component="button" variant="body2">
        Back
      </Link>
    </span>
  );
}

export default BackLink;
