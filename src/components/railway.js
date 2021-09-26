import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Image2 from "../assets/lib.jpg";
import CardMedia from "@mui/material/CardMedia";
// import { Icon } from "@iconify/react";
// import send from "@iconify-icons/mdi/send";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Railway() {

  return (
    <>
       <div id="querry">
       <Typography style={{color:"black" , marginLeft:"10px"}}>
               <h2>Railways</h2>
           </Typography>
            <Card style={{backgroundColor: "black", overflow:"hidden", marginTop:"10px", padding:"28px"}} elevation={10} >
           
              <CardContent className="card-content" style={{backgroundColor: "black", overflow:"clip", height:"340px", color:"rgb(255 255 255)"}} >
              <CardMedia component="img" height="440" image={Image2} alt="green iguana" />
      </CardContent>
            </Card>
            </div>
    </>
  );
}

export default Railway;