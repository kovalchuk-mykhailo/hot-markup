import React from "react";

import Header from "../../Header";
import EmailPassInputs from "./EmailPassInputs";

import "../../../sass/components/_container.scss";
import "../../../sass/components/_button.scss";
import "../../../sass/components/_checkbox.scss";
import "../../../sass/components/_some.scss";

import { Grid, FormControlLabel, Link } from "@material-ui/core";
import { CustomCheckox } from "./CustomCheckbox";
import ListLinks from "./ListLinks";
import GreyLink from "../../GreyLink";
import LinkButton from "../../LinkButton";
import { USER_PROFILE_PATH } from "../../../constants/Pathes";

const infosForLinks = [
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
      <FormControlLabel
        value="end"
        control={<CustomCheckox />}
        label={
          <div style={{ color: "#fafafa", fontSize: "small" }}>
            I agree to <Link to="/terms">Terms & Conditions</Link>
          </div>
        }
        labelPlacement="end"
        className="control-chb"
      />
      <LinkButton to={USER_PROFILE_PATH}>Sign Up</LinkButton>
      <Link to="/signin" className="marg-top">
        Already registered? Sign In
      </Link>
      <div className="link-container">
        <GreyLink to="/requirements">
          18 U.S.C. 2257 Record Keeping Requirements Compliance Statement
        </GreyLink>
        <ListLinks items={infosForLinks} />
      </div>
    </div>
  );
}

export default SignUp;
