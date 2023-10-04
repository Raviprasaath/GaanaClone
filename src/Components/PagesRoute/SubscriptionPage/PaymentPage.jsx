import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";


const PaymentPage = () => {

  const [nameErrorMessage, setNameErrorMessage] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);
  const [creditErrorMessage, setCreditErrorMessage] = useState(false);
  const [cvvErrorMessage, setCvvErrorMessage] = useState(false);
  const [expireMonthErrorMessage, setExpireMonthErrorMessage] = useState(false);
  const [expireYearErrorMessage, setExpireYearErrorMessage] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);

  const handlerName = (e) => {    
    setNameErrorMessage(isValidUserName(e));
  }
  const handlerEmail = (e) => {    
    setEmailErrorMessage(isValidEmail(e));    
  }
  const handlerCreditCard = (e) => {
    setCreditErrorMessage(isValidCard(e));    
  }
  const handlerCvv = (e) => {
    setCvvErrorMessage(isValidCvv(e));
  }
  const handlerExpMonth = (e) => {
    setExpireMonthErrorMessage(isValidMonth(e));
  }


  const userDataString = localStorage.getItem("userData");
  const userData = JSON.parse(userDataString || "{}");
  const allSubToken = localStorage.getItem("allSubsDetails");
  const allToken = JSON.parse(allSubToken || "[]");



  const handlerExpYear = (e) => {
    setExpireYearErrorMessage(isValidYear(e));
    if (nameErrorMessage && emailErrorMessage && creditErrorMessage && cvvErrorMessage 
      && expireMonthErrorMessage && expireYearErrorMessage) {
        setBtnDisable(false);
        
        allToken.push(userData.token);

        localStorage.setItem("subs", "success");
        localStorage.setItem("allSubsDetails", JSON.stringify(allToken));
      }
  }




  const isValidUserName = (value) => {
    return /^[A-Za-z0-9_]+$/.test(value);
  };

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isValidCard = (value) => {
    return value.length === 16;
  };
  const isValidCvv = (value) => {
    return value.length === 3;
  };
  const isValidMonth = (value) => {
    return value < 13;
  };
  const isValidYear = (value) => {
    return value >= 2023;
  };




  //-------------------
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);
    window.location.reload();
  };

  //---------------
  const [pack, setPack] = useState("");
  useEffect(()=> {
    const packageDetail = localStorage.getItem("package");

    if (packageDetail == "1") {
      setPack("1 Month Gaana Plus Subscribed")
    } else if (packageDetail == '2') {
      setPack("6 Month Gaana Plus Subscribed")    
    } else if (packageDetail == "3") {
      setPack("1 Year Gaana Plus Subscribed")
    } else if (packageDetail == "s") {
      setPack("1 Month Gaana Plus Trail Subscribed")      
    }

  }, []);




  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(()=> {
    scrollToTop();
  }, [])




  return (
    <div className="check-out-page">
      <Container maxWidth="sm">
        <Card className="payment-area" variant="outlined" sx={{ mt: 2 }}>
          <CardContent className="checkout-card">
            <Box component="form">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e)=>handlerName(e.target.value)}
              />
              {!nameErrorMessage &&  
                <div className="error-message">
                  Please Enter a Valid Name
                </div>              
              }

              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e)=>handlerEmail(e.target.value)}
              />
              {!emailErrorMessage && 
                <div className="error-message">
                  Please Enter a Valid Email
                </div>
              }

              <TextField
                label="Credit Card Number"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ maxLength: 16 }}
                onChange={(e)=>handlerCreditCard(e.target.value)}
              />
              {!creditErrorMessage &&              
                <div className="error-message">
                  Please Enter a Correct Card Details
                </div>
              }

              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ maxLength: 3 }}
                onChange={(e)=>handlerCvv(e.target.value)}
              />
              {!cvvErrorMessage && 
                <div className="error-message">
                  Please Enter a CVV
                </div>
              }

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Month"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ min: 1, max: 12 }}
                    onChange={(e)=>handlerExpMonth(e.target.value)}
                  />
                  {!expireMonthErrorMessage && 
                    <div className="error-message">
                      Please Enter a Valid Detail
                    </div>
                  }
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Year"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ min: 2023 }}
                    onChange={(e)=>handlerExpYear(e.target.value)}
                  />
                  {!expireYearErrorMessage &&                  
                    <div className="error-message">
                      Please Enter a Valid Detail
                    </div>
                  }
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                disabled={btnDisable}
                onClick={handleClickOpen}
              >
                Pay Now
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
      <>
      <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Payment Successful
            <hr />
          {pack}
        </DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            <Link to="/">            
              Home Page
            </Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      </>
    </div>
  );
};

export default PaymentPage;
