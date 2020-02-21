import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    display: "flex",
    bottom: "0px",
    backgroundColor: "black",
    color: "white",
    height: "4rem",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

const GreyBottomNavAction = ({ style, ...props }) => {
  return <BottomNavigationAction style={{ color: "grey" }} {...props} />;
};

const withWhite = Component => ({ style, ...props }) => {
  return (
    <Component style={{ color: "white", fontSize: "xx-large" }} {...props} />
  );
};

const WhiteHomeOutlinedIcon = withWhite(HomeOutlinedIcon);
const WhiteSearchOutlinedIcon = withWhite(SearchOutlinedIcon);
const WhiteAddBoxOutlinedIcon = withWhite(AddBoxOutlinedIcon);
const WhiteChatIcon = withWhite(ChatIcon);
const WhiteAccountCircleRoundedIcon = withWhite(AccountCircleRoundedIcon);

const CustomBottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        console.log("BottomNavBar value: ", newValue);
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <GreyBottomNavAction label="Home" icon={<WhiteHomeOutlinedIcon />} />
      <GreyBottomNavAction label="Search" icon={<WhiteSearchOutlinedIcon />} />
      <GreyBottomNavAction label="Upload" icon={<WhiteAddBoxOutlinedIcon />} />
      <GreyBottomNavAction label="Messages" icon={<WhiteChatIcon />} />
      <GreyBottomNavAction
        label="Profile"
        icon={<WhiteAccountCircleRoundedIcon />}
      />
    </BottomNavigation>
  );
};

export default CustomBottomNav;
