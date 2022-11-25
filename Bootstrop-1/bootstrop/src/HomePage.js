import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Googleg from "./Googleg";
import Fetch_data from "./Fetch_data";
import DemoPageImages from "./DemoPageImages";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from "@mui/material/Stack";

const steps = [" ", " ", " ", " "];

const style = {
  position: "absolute",
  borderRadius: "5%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height:400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function Demo({ handleNext, handleBack }) {
  const [address, setAddress] = React.useState({});
  const [currency, setCurrency] = React.useState("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [radio, setRadio] = useState(true)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(null);
  const [radiobtn,setRadiobtn] = useState()


  const [message, setMessage] = useState({
    name: "",
    acountNo: "",
    currentAddress: ""
  });

  localStorage.setItem("detailsdata", JSON.stringify(message))

  const [data, setData] = useState({
    city: "",
    doorNo: "",
    place: "",
    pinCode: "",
    newCity: ""
  });

  localStorage.setItem("detailsof", JSON.stringify(data))

  const currencies = [
    {
      value: "BENGALURU",
      label: "BENGALURU"
    },
    {
      value: "HYDERABAD",
      label: "HYDERABAD"
    },
    {
      value: "NELLORE",
      label: "NELLORE"
    },
    {
      value: "COIMBOT0RE",
      label: "COIMBOT0RE"
    }
  ];


  localStorage.setItem("date", JSON.stringify(value));

  const handleChange = (event) => {
    setData({ ...data, city: event.target.value });
    setCurrency(event.target.value);

  };

 

  const location = () => {
   
    fetch("https://ipinfo.io/49.204.89.212/json?token=4fa10729a07115")
      .then((response) => response.json())

      .then((jsonResponse) => {

        setAddress(jsonResponse);

        setData({
          ...data,
          place: jsonResponse.city + " " + jsonResponse.org,
          pinCode: jsonResponse.postal,
          newCity: jsonResponse.city

        });


      });
      
  };


  const [late, setLate] = useState("");
  const lateLocation = () => {
    setAddress(false)
    setLate("hello")
  }

  const [state, setState] = useState(null);

  const noHandiler = () => {
    setState(true)
    setRadio(true)
  }
  const yesHandler = () => {
    setData({ ...data, doorNo: database1 });

    setState(false)
    { !currency ? alert("please celect city") : setRadio(false) }
  }

  localStorage.setItem("featchdata", JSON.stringify(currency))


  const date = localStorage.getItem("date");
  const selectDate = JSON.parse(date);

  let result3 = (currency)
  let result4 = result3.slice(0, 1);
  const sentence = currency;
  var compCity = (sentence.toUpperCase());
  console.log(compCity,"compCity")
  console.log(result4,"result4")

  const data2 = localStorage.getItem("raj")
  const dataitem = JSON.parse(data2);
  let result = dataitem.slice(0, 1);
  
  if(dataitem){
    compCity = "";
  }
  console.log(result,"result")
  console.log(currency,"currency")
  

  const database = localStorage.getItem("value");
  const database1 = JSON.parse(database)

  function handleBackk() {
    setOpen(false)
  }


  const handleNexttt = () => {

    if (currency) {

      if (currency === compCity || result ===result4 ) {

        if (selectDate) {
          handleNext()
        } else {
          alert("please select the date")
         
        }

      } else {

        alert("Please choose address from selected city");
       
      }

    } else {
      alert("Please Select city");
    
    }


  }

  return (
    <>

      <div
        style={{
          backgroundImage:
            "url(" +
            "https://betafibernet.actcorp.in/assets/images/Rectangle_1.png" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div
          style={{ margin: "1rem", border: "solid greenred", width: "100%", height: "100%rem" }}
        >
          <div
            style={{
              borderRadius: "1rem", border: "solid gray 1px",
              backgroundColor: "#F5F5F5", marginLeft: "12%", maxWidth: "75%", boxShadow: "3px 2px 8px 8px #888888", marginTop: "1rem"
            }}
          >
            <h2 style={{ fontFamily: "normal", color: "gray", textAlign: "center", padding: "2rem" }}>Enter details for a quick feasibility</h2>

            <div style={{ display: "flex", maxWidth: "70%", marginTop: "1rem" }}>

              <div style={{ backgroundColor: "#F5F5F5", width: "0%", display: "flex" }}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 2, width: "58ch" },
                    "& .MuiTextField-root": { width: "58ch" }
                  }}
                >
                  <TextField
                    id="outlined-basic" label="Name" variant="outlined"
                    onChange={(e) => {
                      setMessage({ ...message, name: e.target.value });
                    }}
                  />
                  <TextField
                    id="outlined-basic" label="Acc No" variant="outlined"
                    onChange={(e) => {
                      setMessage({ ...message, acountNo: e.target.value });
                    }}
                  />
                  <TextField
                    id="outlined-basic" label="Current address" variant="outlined"
                    onChange={(e) => {
                      setMessage({ ...message, currentAddress: e.target.value });
                    }}
                  />

                  {
                    currency == ! "BENGALURU" ? <div>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="please select where you want to shift"
                        value={currency}
                        onChange={handleChange}
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                      :
                      <div>
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="please select where you want to shift"
                          value={currency}
                          onChange={handleChange}
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <div style={{ marginTop: "1rem", color: "red" }}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Choose a date"
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            />
                          </LocalizationProvider>
                        </div>
                      </div>
                  }

                </Box>
                <div style={{ marginLeft: "2rem", maxWidth: "600px" }}>
                  <FormControl>


                    <RadioGroup
                      style={{ marginTop: "2rem" }}
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >

                      
                      <FormControlLabel
                       value="female"
                        control={<Radio onClick={location} />}
                        label="use current location"
                      />
                         
                      <FormControlLabel
                        value="male"
                        control={<Radio onClick={lateLocation} />}
                        label="enter Address"
                      />
                    </RadioGroup>

                    {address.city ? (
                      <TextField
                        value={
                          address.city +
                          " " +
                          address.postal +
                          " " +
                          address.region +
                          " " +
                          address.org
                        }
                       
                        style={{ marginTop: "2rem", width: "440px" }}
                      ></TextField>
                    ) : (

                      <Googleg />

                    )}


                    {/* input */}

                    <div style={{ display: "flex", marginTop: "2rem" }}>
                      <div
                        style={{
                          display: "flex",
                          marginRight: "25px",
                          gap: "20px"
                        }}
                      >
                        {" "}
                        <p>Multi-Storey Building (4 or more floors)</p>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <div>

                            <FormControlLabel
                              value="female"
                              control={<Radio onClick={yesHandler} />}

                              label="yes"
                            />


                            <FormControlLabel
                              value="male"
                              control={<Radio onClick={noHandiler} />}
                              label="No"
                            />
                          </div>
                        </RadioGroup>{" "}
                      </div>
                    </div>


                    {
                      state ?
                        <div style={{ border: "" }}>
                          <TextField
                            label="Apartment/building name/House no"
                            id="fullWidth"
                            style={{ width: "430px" }}
                            onChange={(e) => {
                              setData({ ...data, doorNo: e.target.value });
                            }}
                          />
                        </div>

                        :
                        <div style={{ border: "" }}>

                          <Fetch_data />

                        </div>


                    }

                  </FormControl>
                </div>
              </div>
            </div>
            <div>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 3 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />

                    <Button
                      onClick={handleOpen}
                      style={{
                        marginRight: "29rem",
                        color: "white",
                        backgroundColor: "red",
                        width: "7rem"
                      }}
                    >
                      PROCEED
                    </Button>
                  </Box>
                </React.Fragment>
              )}
              <DemoPageImages />
            </div>

          </div>
        </div>
      </div>

      {/* modal */}

      <div className="modal=page">


        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              style={{ color: "gray" }}
            >
              Please Conform Your address for Fibernet inistallation
            </Typography>

             <div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <h3>city : {currency}</h3>
              {
                data.doorNo ?
              
                <h3>Building Name/Door No : {data.doorNo} </h3>
              
                      :
                      <h3>Building Name/Door No : {database1}</h3> 
              }
           
              {
                (dataitem) ? <h3>Shifting Address : {dataitem}</h3>  :<h3>Shifting Address : {data.place}</h3> 
              }
              
              <h3>Pincode :{data.pinCode}</h3>
            </Typography>
            </div>
            
            <Stack direction="row" spacing={2} style={{margin:"20px",marginLeft:"10rem"}}>
            <Button
              variant="outlined"
              style={{ borderColor: "red", color: "red" ,width:"7rem"}}
             onClick={handleBackk}>back</Button>
            <Button
               variant="contained"
               style={{ color: "white", backgroundColor: "red",width:"7rem" }}
             onClick={handleNexttt} >next</Button>
                </Stack>
          </Box>

        </Modal>
      </div>
    </>
  );
}
