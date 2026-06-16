import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MainFooter from "./MainFooter";

function MainHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useLocation();

  const isAuthenticated =
    sessionStorage.getItem("isTeacherAuthenticated") === "true";

  const handleLogout = () => {
    sessionStorage.removeItem("isTeacherAuthenticated");
    navigate("/");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const baseMenuItems = [
    { label: "Sobre o Projeto", path: "/" },
    { label: "Acervo de Obras", path: "/obras" },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        pt: 2,
        bgcolor: "primary.main",
        height: "100%",
        color: "primary.contrastText",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontWeight: 600,
          my: 2,
        }}
      >
        Hub Literário
      </Typography>
      <List>
        {baseMenuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ textAlign: "center", justifyContent: "center" }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: 16,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding>
          {isAuthenticated ? (
            <ListItemButton
              onClick={handleLogout}
              sx={{
                textAlign: "center",
                justifyContent: "center",
                color: "#F0B84A",
              }}
            >
              <ListItemText
                primary="Sair"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: 16,
                    fontWeight: 600,
                  },
                }}
              />
            </ListItemButton>
          ) : (
            <ListItemButton
              component={Link}
              to="/login"
              sx={{ textAlign: "center", justifyContent: "center" }}
            >
              <ListItemText
                primary="Entrar"
                sx={{
                  "& .MuiListItemText-primary": {
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: 16,
                  },
                }}
              />
            </ListItemButton>
          )}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "primary.main",
          borderBottom: "1px solid",
          borderColor: "rgba(255, 255, 255, 0.15)",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            maxWidth: 1100,
            width: "100%",
            margin: "0 auto",
            px: 2,
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 600,
              color: "primary.contrastText",
              textDecoration: "none",
            }}
          >
            Hub Literário
          </Typography>

          <IconButton
            color="inherit"
            aria-label="abrir menu"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {baseMenuItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: "primary.contrastText",
                  fontFamily: '"DM Sans", sans-serif',
                  textTransform: "none",
                  fontSize: 14,
                  fontWeight: 400,
                  "&:hover": {
                    bgcolor: "primary.light",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {isAuthenticated ? (
              <Button
                onClick={handleLogout}
                sx={{
                  color: "#FAF6EE",
                  bgcolor: "rgba(240, 184, 74, 0.15)",
                  border: "1px solid rgba(240, 184, 74, 0.3)",
                  fontFamily: '"DM Sans", sans-serif',
                  textTransform: "none",
                  fontSize: 14,
                  fontWeight: 600,
                  px: 2.5,
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "rgba(240, 184, 74, 0.3)",
                    borderColor: "#F0B84A",
                  },
                }}
              >
                Sair
              </Button>
            ) : (
              <Button
                component={Link}
                to="/login"
                sx={{
                  color: "primary.contrastText",
                  fontFamily: '"DM Sans", sans-serif',
                  textTransform: "none",
                  fontSize: 14,
                  fontWeight: 400,
                  "&:hover": {
                    bgcolor: "primary.light",
                  },
                }}
              >
                Entrar
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              bgcolor: "primary.main",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ width: "100%", boxSizing: "border-box" }}>
        <Outlet />
      </Box>
      <MainFooter />
    </Box>
  );
}

export default MainHeader;
