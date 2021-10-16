import React from "react";
import "./contactMe.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
// import { Icon } from "@iconify/react";;
// import linkedinIcon from "@iconify-icons/mdi/linkedin";
// import facebookIcon from "@iconify-icons/mdi/facebook";
// import instagramIcon from "@iconify-icons/mdi/instagram";

// import Form from "./Form";

let socialMediaData = [
  { key: 1, icon: "linkedinIcon", link: "https://www.linkedin.com/in/abhishek-parashar-ba6b26a2/" },
  { key: 2, icon: "facebookIcon", link: "https://www.facebook.com/abhishek.parasar.505/" },
  { key: 3, icon: "instagramIcon", link: "https://www.instagram.com/parashar427/" },
];
let contactData = [
  { key: 1, title: "Name", value: "Vardaan Industries"},
  { key: 2, title: "Address", value: "111/23, Sector- 23, Noida" },
  { key: 3, title: "Email", value: "vardaan@gmail.com"  },
];
function ContactMe() {
  return (
    <Paper elevation={10} style={{backgroundColor: "black"}} className="paper-size" id="contact">
      <Grid container justify="center"  data-aos="zoom-in-up">
        <Grid item lg={11} md={12} sm={12} xs={12} className="heading-alignment heading-height">
          <Typography variant="h4" className="heading-color hover-high-effect">
            Contact me
          </Typography>
          <Typography className="primary-color page-sub-heading">Get in touch</Typography>
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12} className="side-spacing">
          <p className="section-heading heading-color">Get in Touch</p>
          <p className="heading-color">Here is my contact info. Feel free to contact me.</p>
          {contactData.map((data) => {
            return (
              <Grid container alignItems="center" className="contactData hover-effect" key={data.key}>
                <Grid item xs={1}>
                  {/* <Icon icon={data.icon} className="contact-me-icons" /> */}
                </Grid>
                <Grid item xs={12}>
                  <strong className="heading-color">{data.title}</strong>
                  <p className="contact-value heading-color">{data.value}</p>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12} className="side-spacing">
          {/* <p className="section-heading heading-color ">Message Me</p> */}
          {/* <Form /> */}
        </Grid>

        <Grid item lg={5} md={5} sm={12} xs={12} className="side-spacing">
          <div>
            <strong className="heading-color">Follow me on </strong>
          </div>
          <div className="social-icon-container">
            {socialMediaData.map((data) => {
              return (
                <div className="hover-high-effect" key={data.key}>
                  <a href={data.link} style={{ textDecoration: "none" }}>
                    {/* <Icon icon={data.icon} className="socal-media-icons" /> */}
                  </a>
                </div>
              );
            })}
          </div>
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12} className="side-spacing"></Grid>
      </Grid>
    </Paper>
  );
}

export default ContactMe;