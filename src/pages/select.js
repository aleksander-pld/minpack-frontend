import React, { useState } from "react";
import { useHistory, } from "react-router-dom";
import { ethers } from "ethers";
import ModalComponent from '../components/modal';

const Select = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let history = useHistory();

  const onClickConnect = async (route) => {
    if (window.ethereum) {
      setIsLoading(true);

      try {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts.length === 0) {
          return;
        }

        let networkId;
        await provider.getNetwork().then((result) => {
          networkId = result.chainId;
        });

        setIsLoading(false);
        if (networkId === 4) {
          history.push(route)
        } else {
          setIsModalOpen(true);

          window.ethereum.on('chainChanged', (chainId) => {
            if (chainId === '0x4') {
              setIsModalOpen(false);
              history.push(route);
            }
          });
        }
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  if (isLoading) {
    return (
      <div style={{ height: "100vh" }}>
        <div className="loader"/>
      </div>
    );
  }

  return (
    <div className="ArtistSection">
      <div className="iAmArtis">
        <div className="iAmArtis_overlay">
          <img src="/assets/images/paint-palette.svg" alt=""/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>
          I Am an
          <br className="removeBrTag"/>
          <span>Artist</span>
        </h1>
        <button
          onClick={() => onClickConnect('/upload')}
          style={{ textDecoration: "none" }}
        >
          Connect Wallet
        </button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <div className="iAmInfluencer">
        <div className="iAmInfluencer_overlay">
          <img src="/assets/images/phone_icons.svg" alt=""/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>
          I Am an
          <br className="removeBrTag"/>
          <span>Influencer</span>
        </h1>
        <button
          onClick={() => onClickConnect('/gallery')}
        >
          Connect Wallet
        </button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>

      <ModalComponent
        isOpen={isModalOpen}
        message={`Please select
        RINKEBY TEST NETWORK
        to continue`}
      />
    </div>
  );
}

export default Select;
