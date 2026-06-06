import { AppBar, Box, Toolbar, Button, Typography } from "@mui/material";

function MainHeader() {
    const menuItems = [
        {
            label: "Sobre o Projeto",
            path: "/"
        },
        {
            label: "Acervo de Obras", 
            path: "/obras"
        },
        {
            label: "Entrar",
            path: "/login"
        },
    ];
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    bgcolor: (theme) => theme.palette.primary.main,
                    borderBottom: (theme) => `1px solid ${theme.palette.primary.light}44` 
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between", maxWidth: 1100, width: "100%", margin: "0 auto", px: 2 }}>
                    
                    <Typography 
                        variant="h6" 
                        component="div" 
                        sx={{ 
                            fontFamily: '"Cormorant Garamond", serif', 
                            fontWeight: 600,
                            color: (theme) => theme.palette?.primary.contrastText || "#FAF6EE"
                        }}
                    >
                        Hub Literário
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>
                        {menuItems.map((item) => (
                            <Button 
                                key={item.path}
                                sx={{ 
                                    color: (theme) => theme.palette.primary.contrastText,
                                    fontFamily: '"DM Sans", sans-serif',
                                    textTransform: "none",
                                    fontSize: 14,
                                    fontWeight: 400,
                                    '&:hover': {
                                        bgcolor: (theme) => theme.palette.primary.light,
                                    }
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MainHeader;