import React from "react";
import { Link } from "react-router-dom";

import "../../sass/components/_link.scss";

const GreyLink = ({ className, ...props }) => {
  return (
    <>
      <Link className="grey-link" {...props} />
    </>
  );
};

export default GreyLink;
