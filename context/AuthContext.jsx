"use client"

import {
    DynamicContextProvider,
  } from "@dynamic-labs/sdk-react-core";
  
  import { SolanaWalletConnectors } from "@dynamic-labs/solana";
  
 const AuthContext = ({children}) => {
    return (
      <DynamicContextProvider
        settings={{
          // Find your environment id at https://app.dynamic.xyz/dashboard/developer
          environmentId: "1abbc476-89fb-4d33-bf14-d680224597e7",
          walletConnectors: [SolanaWalletConnectors],
        }}
      >
        {children}
      </DynamicContextProvider>
    );
  };

  export default AuthContext