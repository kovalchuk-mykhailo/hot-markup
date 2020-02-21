import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: "100%"
  }
}));

const tileData = [
  {
    img: "Avatar_001.png",
    title: "Image",
    author: "author"
  }
];

function ImageGridList() {
  const classes = useStyles();

  return (
    <GridList cellHeight={90} className={classes.gridList} cols={3}>
      {tileData.map(tile => (
        <GridListTile key={tile.img} cols={1}>
          <img src={tile.img} alt={tile.title} />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default ImageGridList;
