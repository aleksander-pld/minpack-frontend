import { ethers, Contract } from 'ethers';
import NFT721 from './contracts/TestNft721Token.json';

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
        
        if(window.ethereum) {
          await window.ethereum.enable();
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
  
          const nft721 = new Contract(
            '0x0E1A97710481f90181F250F73f2C172cd958626E',
            NFT721.abi,
            signer
          );
          
        resolve({nft721});
      }
      resolve({nft721: undefined});
    });
  });

export default getBlockchain;
