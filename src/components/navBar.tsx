import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router";


const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        FILMS
                    </Typography>
                    <Button
                        component={Link}
                        to="/favorites"
                        color="inherit"
                        sx={{ ml: 'auto' }} // Прижать вправо при необходимости
                    >
                        Избранное
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;