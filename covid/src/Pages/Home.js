import React from "react";
import "../Pages/Blogs.css";
import Image from 'material-ui-image';

const containerStyles = {
    
  height: '10vh', /*'2%',*/
  width: '80%',
  backgroundColor:"#e0e0de", /*"#e0e0de",*/
  borderRadius: 'inherit',
  margin: '4%',
  textAlign: 'left',
  
  position: 'relative',
  left: '5%',/*"0.1 rem",*/
  right: '0%',
  top: '1%',
  bottom: '0%',
  
}
const fillerText={
  padding: '0.5%',
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'right',
  position: 'relative',
  left:'50%',
  
  top: '-1.7em',/*'-110%',*/
  fontSize:'1.8vh'
  
}

const Home = () => (
  
  <div>
    <h1 className="title is-1" >Home</h1>
    
    <p >
    <h4>
      Here it contains the data of all the resources which can be used by covid patients. Click on the image below to view the details of vaccines and oxygen cylinders etc.
    </h4>
    </p>
   
    <div style={containerStyles}>
    <a id="article1" href="https://drive.google.com/file/d/11Uw1btY_F2mFca7Nb-mgAh0x7RnfBI1c/view" target="blank">
    <Image
     src="https://cdn.pixabay.com/photo/2020/03/25/11/31/envato-4966949__340.jpg" width='50px' height='50px'
    /> 
    </a>
    </div>
  </div>
);

export default Home;
