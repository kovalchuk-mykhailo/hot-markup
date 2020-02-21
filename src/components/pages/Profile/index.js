import React from "react";
import Header from "../../Header";
import CustomBottomNav from "../../CustomBottomNav";

import { IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import "../../../sass/components/_avatar.scss";
import SkyButton from "../../SkyButton";
import CustomTabs from "../../CustomTabs";

const basePadding = "1rem";
const baseWidth = "100%";

const styles = {
  numTextContainer: {
    display: "flex",
    flexDirection: "row",
    width: baseWidth,
    justifyContent: "space-between",
    padding: basePadding
  },
  buttonsContainer: {
    width: baseWidth,
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: basePadding,
    paddingRight: basePadding
  },
  imageContainer: {
    width: baseWidth,
    height: "25vh",
    background:
      "linear-gradient(0deg, rgba(92,103,103,1) 0%, rgba(24,27,27,1) 100%)"
  },
  blockWithAvatarContainer: {
    width: baseWidth,
    height: "80px",
    position: "relative",
    display: "flex",
    color: "white",
    fontSize: "x-large",
    alignItems: "center",
    paddingLeft: basePadding
  },
  numTextBlock: (alignItems, color) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: alignItems,
    color: color
  })
};

const CustomMenu = () => (
  <>
    <IconButton
      aria-label="more"
      aria-controls="long-menu"
      aria-haspopup="true"
      onClick={() => console.log("Menu click")}
    >
      <MoreHorizIcon color="primary" />
    </IconButton>
  </>
);

const BlockNumText = ({ num, text, alignItems, active = false }) => {
  switch (alignItems) {
    case "center":
    case "flex-start":
    case "flex-end":
      break;

    default:
      alignItems = "center";
      break;
  }

  const color = active ? "white" : "grey";

  return (
    <div style={styles.numTextBlock(alignItems, color)}>
      <p>{num}</p>
      <p>{text}</p>
    </div>
  );
};

function Profile() {
  return (
    <>
      <div className="main-container">
        <Header Menu={CustomMenu}>Kaka</Header>
        <div style={styles.imageContainer} />
        <div style={styles.blockWithAvatarContainer}>
          <span>Kaka</span>
          <img
            src="Avatar_001.png"
            alt="Avatar"
            className="avatar between-containers"
          />
        </div>
        <div style={styles.numTextContainer}>
          <BlockNumText num="1" text="Posts" alignItems="flex-start" active />
          <BlockNumText num="451" text="Followers" />
          <BlockNumText num="3" text="Following" alignItems="flex-end" />
        </div>
        <div style={styles.buttonsContainer}>
          <SkyButton
            style={{ width: "55%" }}
            onClick={() => console.log('"Subscribe" button click')}
          >
            Subscribe $19.00/month
          </SkyButton>
          <SkyButton
            style={{ width: "40%" }}
            onClick={() => console.log('"Message me" button click')}
          >
            Message me
          </SkyButton>
        </div>
        <CustomTabs />
      </div>

      <CustomBottomNav />
    </>
  );
}

export default Profile;
