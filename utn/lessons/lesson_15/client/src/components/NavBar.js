import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My App
                    </Typography>

                    <Link to="/login">
                        <Button color="inherit">
                            Login
                        </Button>
                    </Link>
                    <Link to="/register">
                        <Button color="inherit">
                            Register
                        </Button>
                    </Link>
                    <Link to="/dashboard">
                        <Button color="inherit">
                            Dashboard
                        </Button>
                    </Link>
                    <Button color="inherit">
                        Logout
                    </Button>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;