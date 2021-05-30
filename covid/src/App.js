// import logo from './logo.svg';
// import './App.css';
// import ReactDOM from 'react-dom';
// import { BrowserRouter , Route, Link } from 'react-router-dom';
// import {useHistory, Switch} from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import About from  './Pages/About';
// import Home from  './Pages/Home';
// import Profile from  './Pages/Profile';


// // function App() {
// //   return (
// //     <div className="App">
      
// //     </div>
// //   );
// // }


// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <div className="container mt-2" style={{ marginTop: 40 }}>
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }


// export default App;


import {MainLayout} from "./Layouts/MainLayouts";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Login from "./Components/Login";
import {BrowserRouter as Router} from "react-router-dom";
import Image from 'material-ui-image';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.pixabay.com/photo/2020/03/30/21/49/covid-19-4985553_960_720.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  }
}));

function App() {
  const classes = useStyles();
    return (
    
    <Router>
    
    <MainLayout/>
    
   
    {/* <Box className={classes.hero}>
        <Box>We Can Defeat COVID.</Box>
      </Box> */}
    </Router>
    
  );
}

export default App;






