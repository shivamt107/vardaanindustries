import React from "react";
import "./know.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Railways from "./railway.js";
import { useHistory } from 'react-router-dom'
import Link from '@mui/material/Link';
// import { Icon } from "@iconify/react";
// import languageJavascript from "@iconify-icons/mdi/language-javascript";
// import wheelchairA    {/* })}ccessibility from "@iconify-icons/mdi/wheelchair-accessibility";
// // import cogsIcon from "@iconify-icons/mdi/cogs";

let cardData = [
  { key: 1, title: "Automobiles", subheading: "Automobiles things, specially services kinds of things" , link:"/automobiles" },
  { key: 2, title: "CCTV", subheading: "Intergrating CCTV at mass level and Maintainace of already installed CCTV's" , link:"/cctv"},
  { key: 3, title: "Railway", subheading: "Constructing railways parts, working with railways", link:"/railways" },
  { key: 4, title: "Medical", subheading: "Vardaan also works in medical field, Pharmacy, Labs and medical instruments", link:"/medical" },
];
function MyServices() {

  return (
    <Grid container justify="center" className="section-background-color" style={{marginBottom: "50px"}}  id="service">
      <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "3%" }} className="heading-alignment heading-height">

      </Grid>

      {cardData.map((data, index) => {
        return (
          <Grid item lg={3} md={3} sm={12} xs={12} className="card-spacing" key={data.key}>
            <Card style={{backgroundColor: "black", overflow:"hidden"}} className={index % 2 ? "card-color-two" : "card-color"} elevation={10}>
              <CardContent className="card-content" style={{backgroundColor: "black", overflow:"clip"}} >
                {/* <span className="icon-size">
                  <Icon icon={data.icon} className="my-services-icon-style" />
                </span> */}
                <p style={{backgroundColor: "black", overflow:"clip", color:"white"}} className="heading-color card-heading">{data.title}</p>
                <div className="skill-heading-container">
                  <p className="heading-color" style={{color:"white"}}>{data.subheading}</p>
                </div>
              </CardContent>
              <CardActions>
              <Link href={data.link} underline="none">
      <Button size="small" style={{color:"#f05571", fontWeight:"600"}} >Learn More</Button>
      </Link>
    </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default MyServices;