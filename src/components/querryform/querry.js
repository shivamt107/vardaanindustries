import React, { useState } from "react";
// import "./know.scss";
// import emailjs from "emailjs-com";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SendIcon from "@mui/icons-material/Send";
// import { Icon } from "@iconify/react";
// import send from "@iconify-icons/mdi/send";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Form() {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [liveValidationStart] = useState(false);
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function sendEmail(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setMsg("");
    setSubject("");
    // if (validateForm() === false) {
    //   setFlag(true);
    //   emailjs.sendForm("service_nh6o1mi", "template_yja62ud", e.target, process.env.REACT_APP_DATA_ENV).then(
    //     (result) => {
    //       handleClickOpen();
    //       setFlag(false);
    //       console.log(result);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // }
  }

  const validateForm = () => {
    let errorValue = false;
    let errors = {};
    let requireFields = ["name", "email", "subject", "msg"];
    let emailFields = ["email"];

    requireFields.forEach((field, index) => {
      if (document.getElementById(field) !== null) {
        let value;
        if (document.getElementById(field).value !== undefined) {
          value = document.getElementById(field).value;
        } else {
          value = document.getElementById(field).innerHTML;
          if (value === "<span>​</span>") {
            value = -1;
          }
        }
        if (value.length < 1 || value === -1) {
          errors[field] = "*This field is required";
        } else if (
          emailFields.indexOf(field) !== -1 &&
          !value.match(/^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/)
        ) {
          errors[field] = "*This field should be a valid email";
        } else if (email != null) {
        }
        if (errorValue === false) {
        }
      }
    });
    setErrors(errors);

    return Object.keys(errors).length > 0 ? true : false;
  };
  const validate = () => {
    if (liveValidationStart === false) {
      validateForm();
    }
  };

  return (
    <>
      <div id="querry">
        <Card
          style={{
            backgroundColor: "black",
            overflow: "hidden",
            marginTop: "70px",
            padding: "28px",
          }}
          elevation={10}
        >
          <CardContent
            className="card-content"
            style={{
              backgroundColor: "black",
              overflow: "clip",
              height: "340px",
              color: "rgb(255 255 255)",
            }}
          >
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="nameEmailContainer">
                <div className="nameContainer">
                  <label className="heading-color">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name..."
                    className={
                      (errors["name"] ? "errorClass" : "", "hover-effect")
                    }
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      validate();
                    }}
                  />
                  <small>{errors["name"]}</small>
                </div>
                <div className="emailContainer">
                  <label className="heading-color">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email..."
                    id="email"
                    className={
                      (errors["email"] ? "errorClass" : "", "hover-effect")
                    }
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validate();
                    }}
                  />
                  <small>{errors["email"]}</small>
                </div>
              </div>
              <label className="heading-color">Subject</label>
              <input
                type="text"
                name="subject"
                value={subject}
                placeholder="Enter the subject of this message..."
                id="subject"
                className={
                  (errors["subject"] ? "errorClass" : "", "hover-effect")
                }
                onChange={(e) => {
                  setSubject(e.target.value);
                  validate();
                }}
              />
              <small>{errors["subject"]}</small>
              <div className="messageContainer">
                <label className="heading-color">Message</label>
                <input
                  type="text"
                  name="message"
                  value={msg}
                  id="msg"
                  placeholder="Type whatever you want..."
                  className={
                    (errors["msg"] ? "errorClass" : "", "hover-effect")
                  }
                  onChange={(e) => {
                    setMsg(e.target.value);
                    validate();
                  }}
                />
                <small>{errors["msg"]}</small>
              </div>
              <Button
                variant="contained"
                style={{ height: "36px", marginTop: "10px" }}
              >
                Send
              </Button>
            </form>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <Grid
                container
                justify="center"
                alignItems="center"
                className="menu-container"
              >
                <Grid item xs={12}>
                  <DialogTitle id="alert-dialog-slide-title">
                    <div className="dialog-contant">
                      Thank You for Messaging me
                    </div>
                    <div className="dialog-contant">
                      <InsertEmoticonIcon className="icon-style" />
                    </div>
                  </DialogTitle>
                </Grid>
                <Grid item xs={12}>
                  <div className="dialog-contant">
                    <p>I will contact you shortly.</p>
                  </div>
                </Grid>
              </Grid>
              <DialogActions
                style={{ display: "flex", justifyContent: "center" }}
                className="menu-container"
              >
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="secondary"
                >
                  <strong>Okay</strong>
                </Button>
              </DialogActions>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Form;
