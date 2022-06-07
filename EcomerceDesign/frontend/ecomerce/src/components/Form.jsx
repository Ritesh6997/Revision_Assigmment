import React from 'react'
import {TextField,Box} from "@mui/material";
export default function Form() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent:"space-between",
          "& .MuiTextField-root": { width: "25ch" },
        }}
      >
        <TextField label={"Enter Name"} id="Name" />
        <TextField label={"Enter Email"} id="Email" margin="dense" />
        <TextField label={"Enter Contact Number"} id="ContactNumber" />
        <TextField label={"Enter Password"} id="Password" />
      </Box>
    </div>
  );
}
