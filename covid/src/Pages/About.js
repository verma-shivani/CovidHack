import React from "react";
import Image from 'material-ui-image';

const containerStyles = {
    
  height: '1vh', /*'2%',*/
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



const About = () => (
  <div>
    <h1 className="title is-1">About</h1>
    <p>
      It is a blog post, website through which people can share their experiences and help other covid patients to 
      not loose hope and have strong will power 
    </p>

    <div style={containerStyles}>
    <a id="article1" href="https://drive.google.com/file/d/11Uw1btY_F2mFca7Nb-mgAh0x7RnfBI1c/view" target="blank">
    <Image
     src="https://cdn.pixabay.com/photo/2020/03/15/12/21/corona-4933453__340.jpg" width='50px' height='50px'
    /> 
    </a>
    </div>


     
    
  </div>
);

export default About;
