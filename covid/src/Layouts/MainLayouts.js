import {
    AppBar,
    Button,
    Drawer,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState } from "react";
  import SimpleList from "../Components/SimpleList";
  
  import { Route, Switch } from "react-router-dom";
  import About from "../Pages/About";
  import Home from "../Pages/Home";
  import Blogs from "../Pages/Blogs";
import Login from "../Components/Login";

  
  const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  function MainLayout() {
  
      const [drawerOpen, setDrawerOpen] = useState(false);
      const classes = useStyles();
  
      return (

        
          <React.Fragment>
              <AppBar position="static">
                  <Toolbar>
                      <IconButton onClick={function () {
                          setDrawerOpen(!drawerOpen);
                      }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                          <MenuIcon />
                      </IconButton>
                      <Typography variant="h6" className={classes.title}>
                         CoWin-Defeats-Covid
      </Typography>
                      <Button color="inherit" >Login</Button>
                  </Toolbar>
              </AppBar>
              <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                  <SimpleList setDrawerOpen={setDrawerOpen}/>
              </Drawer>

              
              
                  <Switch>
                      <Route path="/home" exact>
                          <Home />
                      </Route>
                      <Route path="/about" exact>
                          <About />
                      </Route>
                      <Route path="/blogs" exact>
                          <Blogs />
                      </Route>
                      
                  </Switch>
  
          </React.Fragment>
  
      );
  }
  
  export { MainLayout };