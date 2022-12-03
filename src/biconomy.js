import { alchemyProvider } from "wagmi/providers/alchemy";

import './App.css';
import {
  ChainId, FeeQuote, GasLimit
} from "@biconomy/core-types";
import { ethers } from "ethers";

import { chain} from "wagmi";
import SmartAccount from "@biconomy/smart-account";
import voteAbi from '../src/abi/voteAbi.json'
import { activeChainId,supportedChains} from '../src/utils/chainConfig';
import signer from ''

const initialiseForwardTransaction = async(provider) => {
    let options = {
        activeNetworkId: activeChainId,
        supportedNetworksIds: supportedChains,
        networkConfig: [
                 {
                 chainId: ChainId.POLYGON_MUMBAI,
                //  // Optional dappAPIKey (only required if you're using Gasless)
                 dappAPIKey: '59fRCMXvk.8a1652f0-b522-4ea7-b296-98628499aee3',
                //  // if need to override Rpc you can add providerUrl: 
               },
             ]
       }

       //const provider= useProvider()
    
       const walletProvider = new ethers.providers.Web3Provider(provider);
       let smartAccount = new SmartAccount(walletProvider, options);
       smartAccount = await smartAccount.init();
       let smartAccountInfo = await smartAccount.getSmartAccountState();
    
       //setSmartAccountAddress(smartAccountInfo?.address);
    
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
      const voteInterface = new ethers.utils.Interface(voteAbi);
      return {voteInterface,smartAccount}
}


const vote = async(provider) => {
    const tokenAddress = '0x4a33B5c9c1D1Df59f2bA0459Fd62065A010847Fc'
    const {voteInterface,smartAccount} = await initialiseForwardTransaction(provider);
    const data1 = voteInterface.encodeFunctionData(
        'vote', ['122444545', '342324345']
    )

    const txs = [];

    const tx1 = {
        to: tokenAddress ,
        data: data1
      }
      
      txs.push(tx1)

      const feeQuotes=  await smartAccount.prepareRefundTransactionBatch(
        {transactions:txs, chainId: 8}
        );
      const transaction = await smartAccount.createRefundTransactionBatch({
        transactions: txs,
        feeQuote: feeQuotes[2], // say user chooses USDC from above
      });

      const txId = await smartAccount.sendTransaction({
        tx: transaction, 
      });

      console.log(txId)

}
export default vote;

 
