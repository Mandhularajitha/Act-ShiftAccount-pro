import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {useRef} from 'react';
import swal from 'sweetalert';

export default function PageTwo({handleNext}) {
  const ref = useRef(null);
  const [value, setValue] = React.useState(null);

  const navpagethree = () => {
    if (ref.current.checked && value ) {
       handleNext()
    } else {
      swal("Please agree to the shifting charges,or select the date Before You Proceed");
    }
  };

  return (
    <>
      <div
        style={{
          boxShadow: "3px 2px 8px 8px #888888",
          border: "2px solid black",
          backgroundColor: "#FFFFFF",
          width: "30rem",
          height: "25rem",
          textAlign: "center",
          marginTop: "6rem",
          marginLeft: "25rem",
          borderRadius: "8%",
      
        }}
      >
        <h2 style={{ marginTop: "2.5rem" }}>
          Please Proceed to book an appointment
        </h2>
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


         
        <div style={{ marginTop: "20px" }}>
          <Box>
            <div style={{ display: "flex", marginLeft: "6rem" }}>
              {/* <input type="checkbox" checked={checked} ref={ref}  style={{ width: "20px" }} /> */}
              <input ref={ref} type="checkbox"  style={{ width: "20px" }}/>
              <p>I here by agree to the shifting charges</p>
            </div>
          </Box>

          <h3 style={{ color: "red" }}>
            Note : Shifting Charges of Rs.650/- will applicable
          </h3>
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "red" }}
            onClick={navpagethree}
          >
            SUBMIT
          </Button>
        </div>

      </div>
    </>
  );
}
