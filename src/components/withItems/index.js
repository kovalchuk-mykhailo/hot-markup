import React from "react";

const withItems = (Component, Divider) => ({ items = [], ...props }) => (
  <span>
    {items.map((item, index) => {
      return (
        <span key={index}>
          <Component {...item} {...props} />
          {index !== items.length - 1 ? <Divider /> : null}
        </span>
      );
    })}
  </span>
);

export default withItems;
