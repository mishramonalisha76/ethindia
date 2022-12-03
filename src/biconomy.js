import { Provider } from "@wagmi/core";

let options = {
    activeNetworkId: activeChainId,
    supportedNetworksIds: [ activeChainId
    ],
    networkConfig: [
             {
             chainId: ChainId.POLYGON_MUMBAI,
             // Optional dappAPIKey (only required if you're using Gasless)
             dappAPIKey: '59fRCMXvk.8a1652f0-b522-4ea7-b296-98628499aee3',
             // if need to override Rpc you can add providerUrl: 
           },
         ]
   }

   const walletProvider = new ethers.providers.Web3Provider(Provider);
   let smartAccount = new SmartAccount(walletProvider, options);
   smartAccount = await smartAccount.init();
   let smartAccountInfo = await smartAccount.getSmartAccountState();

   setSmartAccountAddress(smartAccountInfo?.address);

   smartAccount.on('txHashGenerated', (response) => {
    console.log('txHashGenerated event received via emitter', response);
    // showSuccessMessage(`Transaction sent: ${response.hash}`);
  });

  smartAccount.on('txMined', (response) => {
    console.log('txMined event received via emitter', response);
    // showSuccessMessage(`Transaction mined: ${response.hash}`);
  });

  smartAccount.on('error', (response) => {
    console.log('error event received via emitter', response);
  });
