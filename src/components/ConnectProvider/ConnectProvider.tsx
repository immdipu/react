import React, { useState } from 'react';
import Pizzly from '@nangohq/pizzly-frontend';
import { Box, Button } from '@chakra-ui/react';
import { Navigate } from "react-router-dom";

const pizzly = new Pizzly('http://localhost:3003');

interface ConnectProviderProps {
  provider: string,
  subdomain: string,
  connectionId: string,
}

const ConnectProvider = ({ provider, subdomain, connectionId }: ConnectProviderProps) => {
  const [loggedIn, setLoggedIn] = useState(false);
  if (provider !== 'salesforce') {
    return (<>Not supported</>)
  }

  const launchLogIn = () => {
    pizzly.auth(provider, connectionId)
      .then((result) => {
        console.log(`OAuth flow succeeded for provider "${result.providerConfigKey}" and connection-id "${result.connectionId}"! ${JSON.stringify(result)}`);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.error(`There was an error in the OAuth flow for integration "${error.providerConfigKey}" and connection-id "${error.connectionId}": ${error.error.type} - ${error.error.message}`);
        setLoggedIn(false);
      });
  }
  
  return loggedIn ? 
    <Navigate to='/configure'/>
    : 
    (<Box margin='auto' width='200px' paddingTop='200px' textAlign='center'>
        <Button margin='30px' onClick={launchLogIn}>Connect Salesforce</Button>
    </Box>);
}

export default ConnectProvider;