// import React from "react";

// const Login = () => (
//   <div>
//     <h1 className="title is-1">This is the Login Page</h1>
//     <p>
//       Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
//       inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
//       et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
//       in efficitur arcu congue. Nam fermentum commodo egestas.
//     </p>
//   </div>
// );

// export default Login;


import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

export default Login