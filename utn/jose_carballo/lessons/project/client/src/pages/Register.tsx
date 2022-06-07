import { TextField, Box, Button } from "@mui/material";


const Register = () => {
  return (
    <div className="form_container">
    <h1 className="title_login">Datos de registro</h1>
    <Box
    component="form"
    sx={{
      "& > :not(style)": { m: .5, width: "20ch"},
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Nombre" variant="outlined" />
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <TextField id="outlined-basic" label="Avatar" variant="outlined" />
    <TextField id="filled-basic" label="password" variant="outlined" />
    <Button variant="contained">Ingresar</Button>
  </Box>
  </div>
  )
}

export default Register