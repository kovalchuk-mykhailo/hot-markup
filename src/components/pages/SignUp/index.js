import React from "react";

import Header from "../../Header";
import EmailPassInputs from "./EmailPassInputs";
import { CustomCheckbox } from "./CustomCheckbox";
import ListLinks from "./ListLinks";
import GreyLink from "../../GreyLink";
import BlueLink from "../../BlueLink";
import LinkButton from "../../LinkButton";
import { Grid } from "@material-ui/core";

import "../../../sass/components/_container.scss";
import "../../../sass/components/_button.scss";
import "../../../sass/components/_checkbox.scss";
import "../../../sass/components/_some.scss";

import { USER_PROFILE_PATH } from "../../../constants/Pathes";

const textForLinks = [
  { to: "/police", children: "Privacy police" },
  { to: "/terms", children: "Terms & Conditions" },
  { to: "/contact", children: "Contact Support" }
];

function SignUp() {
  return (
    <div className="main-container">
      <Header>Sign Up</Header>
      <Grid item xs={9} sm={6} style={{ textAlign: "center" }}>
        <img
          src="SignUpImage_001.png"
          alt="Super Hot"
          height="200px"
          style={{ marginTop: "3rem" }}
        />
      </Grid>
      <EmailPassInputs />
      <div className="marg-top">
        <CustomCheckbox />
        <span style={{ color: "#fafafa", fontSize: "small" }}>
          I agree to <BlueLink to="/terms">Terms & Conditions</BlueLink>
        </span>
      </div>
      <LinkButton to={USER_PROFILE_PATH}>Sign Up</LinkButton>
      <BlueLink to="/signin" marginTop>
        Already registered? Sign In
      </BlueLink>
      <div className="link-container">
        <GreyLink to="/requirements">
          18 U.S.C. 2257 Record Keeping Requirements Compliance Statement
        </GreyLink>
        <ListLinks items={textForLinks} />
      </div>
    </div>
  );
}

export default SignUp;
