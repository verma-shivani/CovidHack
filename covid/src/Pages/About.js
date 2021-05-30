import React from "react";
import Image from 'material-ui-image';

const About = () => (
  <div>
    <h1 className="title is-1">This is the About Page</h1>
    <p>
      It is a blog post, website through which people can share their experiences and help other covid patients to 
      not loose hope and have strong will power 
    </p>
     <Image
     src="https://cdn.pixabay.com/photo/2020/03/08/23/24/coronavirus-4914028__340.jpg" width='50px' height='50px'
    /> 
    
  </div>
);

export default About;