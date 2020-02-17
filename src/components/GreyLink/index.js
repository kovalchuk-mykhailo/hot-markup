import React from "react";
import { Link } from "@material-ui/core";

import "../../sass/components/_link.scss";

const GreyLink = ({ className, ...props }) => {
  return (
    <>
      <Link className="grey-link" {...props} />
    </>
  );
};

export default GreyLink;
