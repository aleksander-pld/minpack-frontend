import { ethers, Contract } from 'ethers';
import NFT from './contracts/NftReseller.json';

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if(window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const nft = new Contract(
          '0xf153AA4031E33e3b972014C9C0AB4C08d72bf1EE',
          NFT.abi,
          signer
        );

        resolve({nft});
      }
      resolve({nft: undefined});
    });
  });

export default getBlockchain;
