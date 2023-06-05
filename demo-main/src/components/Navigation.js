import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
        FLIMS.NET
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="News" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", mb: 10 }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "700",
            }}
          >
            <Link to="/"> FLIMS.NET</Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <Button sx={{ color: "#fff" }}>
                <HomeIcon sx={{ mr: 1 }} /> Home
              </Button>
            </Link>
            <Link to="/about">
              <Button sx={{ color: "#fff" }}>
                <InfoIcon sx={{ mr: 1 }} /> About
              </Button>
            </Link>
            <Link to="/news">
              <Button sx={{ color: "#fff" }}>
                <NewspaperIcon sx={{ mr: 1 }} /> News
              </Button>
            </Link>
            <Link to="/contact">
              <Button sx={{ color: "#fff" }}>
                <ContactsIcon sx={{ mr: 1 }} /> Contact
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
