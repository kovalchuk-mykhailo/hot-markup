import React from "react";
import withItems from "../../../withItems";
import GreyLink from "../../../GreyLink";

const Divider = () => (
  <span style={{ color: "grey", fontSize: "xx-small" }}>{" / "}</span>
);

export default withItems(GreyLink, Divider);
