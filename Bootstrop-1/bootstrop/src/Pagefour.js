import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

export default function Pagefour({handleNext, handleBack}) {

  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const navpagethree = () => {
    handleBack()
  };

  const submitHandler = () =>{
    handleNext()
  }

  return (
    <>
      <div
        style={{
          marginTop:"4rem",
          border: "solid silver",
          marginLeft:"20rem",
          borderRadius: "20px",
          width: "45rem",
          height:"40rem",
          textAlign: "center",
          backgroundColor: "#ffff",
          boxShadow: "3px 2px 8px 8px #888888",
        }}
      >
        <h1 style={{ color: "" }}>please Uplode the document</h1>
        <h6>
          Dear custemor, as a TRAI mandate we would require a proof of address
          document for the connection be shifted.
        </h6>

        {/* input */}

        <div style={{ marginTop: "1rem" }}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ width: "20rem" }}>
              <InputLabel id="demo-simple-select-label">
                Choose document type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Choose document type"
                onChange={handleChange}
              >
                <MenuItem value={10}>Passport</MenuItem>
                <MenuItem value={20}>Driving License</MenuItem>
                <MenuItem value={30}>ElectriCity Bill</MenuItem>
                <MenuItem value={40}>Rental Agreement</MenuItem>
                <MenuItem value={50}>Ration Card</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          
          <h5 style={{ color: "gray" }}>
            {" "}
            Please Upload a Clear Scanned Copy of front and back side of
            relevent document. in case the document is not readable or clear,
            shifting process may get delayed
          </h5>

        </div>
        
        {/* uplode document */}

        <div style={{ display: "flex",marginLeft:"4rem" }}>
          <div>
            <p style={{ marginLeft: "5rem" }}>Front image</p>
            <label for="image">
              <input
                type="file"
                name="image"
                id="image"
                style={{ display: "none" }}
              />
              <img
                alt="img"
                src="https://images.all-free-download.com/images/graphiclarge/cloud_upload_alt_arrow_contrasted_sign_logotype_6919235.jpg"
                style={{
                  width: "13rem",
                  marginLeft: "4rem",
                  borderStyle: "dashed",
                  color:"gray",
                  padding:"2rem"
                }}
              />
            </label>
          </div>
          <div>
            <p style={{ marginLeft: "5rem" }}>Back image</p>
            <label for="image">
              <input
                type="file"
                name="image"
                id="image"
                style={{ display: "none" }}
              />
              <img
                alt="img"
                src="https://images.all-free-download.com/images/graphiclarge/cloud_upload_alt_arrow_contrasted_sign_logotype_6919235.jpg"
                style={{
                  width: "13rem",
                  marginLeft: "4rem",
                  borderStyle: "dashed",
                  color:"gray",
                  padding:"2rem"
                }}
              />
            </label>
          </div>
        </div>

        <div style={{ margin: "2rem", marginLeft: "2rem" }}>
          <Button
            variant="outlined"
            onClick={navpagethree}
            style={{
              backgroundColor: "red",
              color: "white",
              margin: "2rem",
              width: "9rem"
            }}
          >
            BACK
          </Button>
          <Button
          onClick={submitHandler}
            variant="outlined"
          
            style={{ backgroundColor: "red", color: "white", width: "9rem" }}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </>
  );
}
