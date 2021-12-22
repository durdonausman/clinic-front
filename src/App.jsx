import React from 'react';
import './App.scss';

import useToken from './Hooks/useToken';

import AuthenticatedApp from './AuthenticatedApp';
import Register from './Register';
import UnauthenticatedApp from './UnauthenticatedApp';

function App() {
  const [token] = useToken();

  // Validation token
  // const [ok, setOk] = React.useState(false);

  // React.useEffect(() => {
  //   fetch('http://localhost:9000/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(token, message),
  //   }).then((response) => {
  //     if (response.status === 200 && message="You logged in!") {
  //       setOk(true);
  //     }
  //   });
  // }, [token, message]);

  if (token) {
    if(token.message==="You are not logged in, please try again"){
      return <Register />;
    } else {
      return <AuthenticatedApp />;
    } 
  } else {
    return <UnauthenticatedApp/>
  }
  
}

export default App;