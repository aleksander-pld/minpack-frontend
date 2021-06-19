import React, { useState, useEffect } from "react";
import {
  useHistory,
} from "react-router-dom";
import { ethers } from "ethers";

function Artist_2() {
  const [account, setAccount] = useState("");
  const [loading, setloading] = useState(true);
  const [SIGNER, SETSIGNER] = useState({});
  const [loading2, setloading2] = useState(false);
  const [refresh, setrefresh] = useState(0);
  const [artist, setartist] = useState();

  let content;
  let history = useHistory();
  //const userContext = React.createContext(null)

  const changestatea = () => {
    setartist("art");
  };
  const changestatei = () => {
    setartist("inf");
  };

  const loadWeb3 = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockchainData = async () => {
    setloading(true);
    if (typeof window.ethereum == "undefined") {
      return;
    }

    const ethereum = window.ethereum;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    SETSIGNER(signer);

    let url = window.location.href;

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    if (accounts.length === 0) {
      return;
    }

    setAccount(accounts[0]);

    var networkId;
    await provider.getNetwork().then((result) => {
      networkId = result.chainId;
    });
    if (networkId === 4) {
      setloading(false);
    } else {
      window.alert("Please Select Rinkeby Network on metamask");
      setloading2(true);
    }
  };

  const walletAddress = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (accounts.length === 0) {
      return;
    }
    setAccount(accounts[0]);
    loadBlockchainData();
  };

  useEffect(() => {
    // loadWeb3();
    //loadBlockchainData();

    if (refresh) {
      setrefresh(0);
      loadBlockchainData();
    }
    //esl
  }, [refresh]);

  if (loading) {
    content = (
      <div style={{ height: "100vh" }}>
        <div className="loader"/>
      </div>
    );
  } else if (artist === "art") {
    history.push("/upload")
  } else {
    history.push("/gallery")
  }

  return (
    <div>
      {account == "" ? (
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
              onClick={() => {
                walletAddress();
                changestatea();
              }}
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
              onClick={() => {
                walletAddress();
                changestatei();
              }}
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
        </div>
      ) : (
        content
      )}
    </div>
  );
}

export default Artist_2;
