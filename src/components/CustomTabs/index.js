import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import GridOnIcon from "@material-ui/icons/GridOn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ImageGridList from "../ImageGridList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{ margin: "0px", padding: "0px" }}>
          {children}
        </Box>
      )}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: "1rem"
  }
}));

export default function CustomTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          background: "inherit",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "space-around"
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab
            icon={<GridOnIcon />}
            aria-label="phone"
            style={{ width: "50vw" }}
            {...a11yProps(0)}
          />
          <Tab
            icon={<FavoriteIcon />}
            style={{ width: "50vw" }}
            aria-label="favorite"
            {...a11yProps(1)}
          />{" "}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ImageGridList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Likes
      </TabPanel>
    </div>
  );
}
