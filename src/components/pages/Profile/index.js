import React from "react";
import Header from "../../Header";

import { IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
const CustomMenu = () => (
  <>
    <IconButton
      aria-label="more"
      aria-controls="long-menu"
      aria-haspopup="true"
      // onClick={handleClick}
    >
      <MoreHorizIcon color="primary" />
    </IconButton>
  </>
);

function Profile() {
  return (
    <div className="main-container">
      <Header Menu={CustomMenu}>Kaka</Header>
    </div>
  );
}

export default Profile;
