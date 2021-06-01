import React, { Component, useState, useEffect } from "react";
import { Link, useHistory, Route } from "react-router-dom";
import getBlockchain from "../nft721.js";
import { ethers, Contract } from "ethers";
import NFT721 from "../contracts/TestNft721Token.json";
import axios from "axios";
import swal from "sweetalert";
import Createnft_4 from "./createnft_4.js";

export const NumberContext = React.createContext();

function Approvee() {
  const [tokeninfo, settokeninfo] = useState();
  const [id, setid] = useState();
  const [txdone, settxdone] = useState(false);
  const [nftaddress, setnftaddress] = useState("");
  const [userNfts, setUserNfts] = useState({});
  const [textshowup, settextshowup] = useState(false);
  let content;
  let history = useHistory();
  let dnftaddr;
  const stylee = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "215px",
    height: "70px",
    backgroundColor: "#82FAD2",
    color: "#000000",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: 600,
    margin: "0 auto",
    borderRadius: "7px",
    // &:hover {
    //   textdecoration: none,
    //   cursor: pointer
    // }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.enable();

      settxdone(false);
    }

    const nftdetails = async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length === 0) {
        return;
      }
      // setuseraddress(accounts[0]);

      // axios.get(`https://rinkeby-api.opensea.io/api/v1/assets?owner=${accounts[0]}&order_direction=asc&offset=0&limit=20`)
      axios
        .get(
          `https://rinkeby-api.opensea.io/api/v1/assets?owner=${accounts[0]}&order_direction=asc&offset=0&limit=20`
        )
        .then((response) => {
          let nfts = {};
          console.log(response);
          response.data.assets.map((asset) => {
            if (!nfts[asset.asset_contract.address]) {
              nfts[asset.asset_contract.address] = [asset.token_id];
            } else {
              nfts[asset.asset_contract.address].push(asset.token_id);
            }
          });
          setUserNfts(nfts);
        });
    };
    nftdetails();
  }, []);

  const approvee = async (addr, id, nftaddr) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const nft721 = new Contract(nftaddr, NFT721.abi, signer);

      const tx = await nft721.approve(addr, id);
      settextshowup(true);
      console.log(tx);
      const txsign = await tx.wait();

      settxdone(true);
    } catch (e) {
      console.log(e);
      swal("Transaction Failed");
    }
  };
  const tokenurifunc = async (id, nftaddress) => {
    console.log(nftaddress);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const nft721 = new Contract(nftaddress, NFT721.abi, signer);
    const tokenURI = await nft721.tokenURI(id);
    console.log(tokenURI);

    await axios.get(tokenURI).then(function (response) {
      // console.log(response.data.result.image);
      settokeninfo(response.data.result.image);
    });
  };
  const onclickmint = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const nft721 = new Contract(
      "0x6a5eb9bD4916824B8fD7c21eFe581a62999fE644",
      NFT721.abi,
      signer
    );
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const tx = await nft721.mint(accounts[0]);
  };
  const onclickapprove = (nftaddr) => {
    approvee("0x7C31136E28570e972472277338f62ae1B7fF1B94", id, nftaddr);

    console.log(nftaddr);
  };
  const onchangenftaddress = (e) => {
    console.log(e.target.value);
    setnftaddress(e.target.value);
    setid(" ");
  };

  const changeid = (e) => {
    console.log(e.target.value);
    setid(e.target.value);
    tokenurifunc(e.target.value, nftaddress);
  };

  return (
    <div>
      {txdone == false ? (
        <div>
          <div class="adminLayoutSection CreatingNFTMain">
            <div class="adminLeftside">
              <div class="logoSections">
                <Link to="/">
                  <img src="assets/images/logo.svg" alt="" />
                </Link>
              </div>
              <div class="leftsideMenus">
                <h3>Artist</h3>
                <ul>
                  <li>
                    <a href="">
                      <Link to="/approve">
                        <img src="assets/images/SubmitNFT.svg" alt="" />
                        <span>Submit NFT</span>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <Link to="/admindashboard">
                        <img src="assets/images/dashboard.png" alt="" />
                        <span>Dashboard</span>
                      </Link>
                    </a>
                  </li>
                  <div class="ApproveNFT">
                    <li>
                    <a
                      onClick={() => {
                        onclickmint();
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "200px",
                        height: "60px",
                        backgroundColor: "#82FAD2",
                        color: "#000000",
                        textAlign: "center",
                        fontSize: "19px",
                        fontWeight: "600",
                        
                        borderRadius: "7px",
                        
                      }}
                    >
                      Mint Test Nft
                      <span
                      title="Mint a Test NFT to use on Mintpact"
                      style={{
                        position: "absolute",
                        marginLeft: "230px",
                        marginBottom: "40px",
                      }}
                    >{" "}
                    &#63;</span>
                    </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div class="adminReightSide CreateNFTSections">
              <div class="respoonsiveHeader">
                <nav class="navbar navbar-expand-xl navbar-light">
                  <a class="navbar-brand" href="#">
                    <Link to="/">
                      <img src="assets/images/logo.svg" alt="" />
                    </Link>
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <img src="assets/images/menu_icons.svg" alt="" />
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav" style={{ marginTop: "30px" }}>
                      <h3>Artist</h3>
                      <li class="nav-item active">
                        <a class="nav-link" href="">
                          <img src="assets/images/SubmitNFT.svg" alt="" />{" "}
                          Submit NFT
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="">
                          <img src="assets/images/dashboard.png" alt="" />{" "}
                          Dashboard
                        </a>
                      </li>
                    </ul>
                    <ul class="navbar-nav" style={{ marginTop: "30px" }}>
                      <h3>Influencer</h3>
                      <li class="nav-item">
                        <a class="nav-link" href="">
                          {" "}
                          <img src="assets/images/Gallery.svg" alt="" /> Gallery
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="">
                          <img src="assets/images/dashboard.png" alt="" />{" "}
                          Dashboard
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div class="ApproveNFT">
                <h1>Approve NFT</h1>
                <div class="form-group">
                  <label for="">Nft Address</label>
                </div>
                <select onChange={onchangenftaddress} class="form-control">
                  <option selected value="">
                    Select NFT address
                  </option>
                  {Object.keys(userNfts).map((address) => {
                    return <option value={address}>{address}</option>;
                  })}
                </select>
                {nftaddress && (
                  <select onChange={changeid} value={id} class="form-control">
                    <option selected value="">
                      Select Token ID
                    </option>
                    {userNfts[nftaddress].map((tokenId) => {
                      return <option value={tokenId}>{tokenId}</option>;
                    })}
                  </select>
                )}
                <span>
                  <a
                    onClick={() => {
                      onclickapprove(nftaddress);
                    }}
                  >
                    Approve
                    <span
                      title="Select your NFT Contract Address and Token ID to allow the Mintpact smart contract to transact with your wallet."
                      style={{
                        position: "absolute",
                        marginLeft: "250px",
                        marginBottom: "40px",
                      }}
                    >
                      {" "}
                      &#63;
                    </span>
                  </a>
                </span>
                {/* <div style={{position:"absolute",marginLeft:"450px",marginBottom:"0px"}}>&#63;</div> */}
                <br></br> <br></br>
                <div class="ThanksNFTPlaceholder">
                  <img src={tokeninfo} alt="" />
                </div>
                <br></br> <br></br>
                {textshowup ? (
                  <h4>Please wait while we process your approval.</h4>
                ) : (
                  <div></div>
                )}
                <br></br> <br></br>
              </div>
            </div>
          </div>
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <div class="footercontents">
                    <p>Copyright Mintpact © 2021</p>
                    <ul>
                      <li>
                          <a href="https://discord.gg/bVaXT2VT" target="_blank">Discord</a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/mintpact" target="_blank">Twitter</a>
                      </li>
                      <li>
                        <a href="https://github.com/Mintpact" target="_blank">Github</a>
                      </li>
                      <li>
                        <a href="https://t.me/joinchat/MIlqWUZUAs8xODdl" target="_blank">Telegram</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      ) : (
        <div>
          <Createnft_4 nftaddress={nftaddress} id={id} />
        </div>
      )}
    </div>
  );
}

export default Approvee;
