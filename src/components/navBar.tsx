import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";


const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
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
                        films
                    </Typography>
                    <Button color={'inherit'}> избранное </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;