import * as React from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import RadioGroup from "@mui/joy/RadioGroup";
import Radio from "@mui/joy/Radio";
import Sheet from "@mui/joy/Sheet";



export default function Pagethree({handleNext}) {
  const navigate = useNavigate();

  const navpagefour = () => {
    handleNext()
  
  };

  const navpagefive = () => {
 
  };

  return (
    <Sheet
      variant="outlined"
      sx={{
        backgroundColor: "#E6E6FA",
        boxShadow: "3px 2px 8px 8px #888888",
        marginTop: "9rem",
        marginLeft: "28rem",
        borderRadius: "sm",
        width: "30rem",
        p: 2
      }}
    >
      <RadioGroup
        name="tiers"
        sx={{ gap: 1, "& > div": { p: 1, flexDirection: "row", gap: 3 } }}
      >
        <FormControl size="lg">
          <div>
            <FormLabel onClick={navpagefour}>
              <Radio overlay value="large" />
              <h2 style={{ margin: "12px" }}>eKYC using Aadhar No</h2>
            </FormLabel>
            <FormHelperText>
              <FormHelperText style={{ marginLeft: "40px" }}>
                (instant approval,faster processsing)
              </FormHelperText>
            </FormHelperText>
          </div>
        </FormControl>
        <FormControl size="lg">
          <div>
            <FormLabel onClick={navpagefive}>
              <Radio overlay value="small" />
              <h2 style={{ margin: "10px",marginTop:"-2rem",marginLeft:"2.3rem" }}>
                Uplod a Scanned copy of your docunents
              </h2>
            </FormLabel>
            <FormHelperText style={{ marginLeft: "40px" }}>
              (48-72 hrs for document approval)
            </FormHelperText>
          </div>
        </FormControl>
      </RadioGroup>
    </Sheet>
  );
}
