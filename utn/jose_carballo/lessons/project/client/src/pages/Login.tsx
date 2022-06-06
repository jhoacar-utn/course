import { TextField, Box, Button } from "@mui/material";
import "./styles.scss";

export const Login = () => {
  return (
    <div className="form_container">
      <h1 className="title_login">Ingrese sus datos</h1>
      <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="filled-basic" label="password" variant="outlined" />
      <Button variant="contained">Ingresar</Button>
    </Box>
    </div>
  );
};
