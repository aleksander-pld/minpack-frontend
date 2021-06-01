import React, { Component, useState, useEffect } from "react";
import {
  Link,
  Route,
  Switch,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import { ethers, Contract } from "ethers";
import Approvee from "./approvee";
import Gallery from "./gallery";

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
    console.log(url);

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log(accounts);
    if (accounts.length == 0) {
      return;
    }

    setAccount(accounts[0]);

    var networkId;
    await provider.getNetwork().then((result) => {
      networkId = result.chainId;
    });
    if (networkId == 4) {
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
    console.log(accounts);
    if (accounts.length == 0) {
      return;
    }
    setAccount(accounts[0]);
    loadBlockchainData();
  };
  useEffect(() => {
    // loadWeb3();
    //loadBlockchainData();

    if (refresh == 1) {
      setrefresh(0);
      loadBlockchainData();
    }
    //esl
  }, [refresh]);
  if (loading === true) {
    content = (
      <div style={{ height: "100vh" }}>
        <div class="loader"></div>
      </div>
    );
  } else if (artist == "art") {
    content = (
      <div>
        {history.push("/approve")}
        <Route
        style={{textDecoration:'none'}}
          path="/approve"
          exact
          render={({ match }) => <Approvee />}
        ></Route>
      </div>
    );
  } else {
    content = (
      <div>
        {history.push("/gallery")}
        <Route
          path="/gallery"
          exact
          render={({ match }) => <Gallery />}
        ></Route>
      </div>
    );
  }
  return (
    <div>
      {account == "" ? (
        <div class="ArtistSection">
          <div class="iAmArtis">
            <div class="iAmArtis_overlay">
              <img src="assets/images/paint-palette.svg" alt="" />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>
              I Am an
              <br class="removeBrTag" />
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div class="iAmInfluencer">
            <div class="iAmInfluencer_overlay">
              <img src="assets/images/phone_icons.svg" alt="" />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>
              I Am an
              <br class="removeBrTag" />
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      ) : (
        content
      )}
    </div>
  );
}

export default Artist_2;
