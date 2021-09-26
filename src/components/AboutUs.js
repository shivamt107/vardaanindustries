import React from "react";
import Typography from "@mui/material/Typography";
import "./AboutUs.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      height: "100%",
    },
  },
  sectionMobile: {
    // display: "flex",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className="image-container">
      <div className="over-lay">
      <Typography style={{ padding:"18%" ,color:"white"}}  variant="h2" component="div" gutterBottom>
          Vardaan
          <div className={classes.sectionDesktop}>
            <div style={{marginRight: "46px"}} className="cheese">
              <div className="burger"></div>
            </div>
            </div>
          {/* <div className={classes.sectionMobile}>
            <div style={{marginRight: "46px"}} className="cheese">
              <div className="burger"></div>
            </div>
            </div> */}
          </Typography>
      </div>
    </div>
  );
};

export default AboutUs;
