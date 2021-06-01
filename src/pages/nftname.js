import React, { Component, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ethers, Contract } from "ethers";
import NftReseller from "../contracts/NftReseller.json";
import NFT721 from "../contracts/TestNft721Token.json";
import swal from "sweetalert";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Nftname(data) {
  // console.log(data.location.state.Creatorname)
  const [showResults, setShowResults] = useState(false);
  const [showResults2, setShowResults2] = useState(false);
  const [addedprice, setaddedprice] = useState();
  const [totalprice, settotalprice] = useState();
  const [ccontract, setccontract] = useState({});
  const [shareid, setshareid] = useState(Number);
  const [valuee, setvaluee] = useState("");
  const [nftcontract, setnftcontract] = useState({});
  const [meta, setmeta] = useState();
  const [tokeninfo, settokeninfo] = useState();
  const [loader, setloader] = useState(false);
  let content;

  const showdataclick = () => setShowResults(true);
  const setpricingadded = (e) => {
    setaddedprice(e.target.value);
    var totalpriced = parseFloat(
      Number(e.target.value) + Number(data.location.state.Price)
    ).toFixed(3);
    settotalprice(totalpriced);
  };

  useEffect(() => {
    axios
      .get("https://newinfluencerapi.herokuapp.com/users")
      .then(function (response) {
        console.log(response);
        console.log("api hn yo");
      });
    // console.log( data.location.state.Nftaddress)
    // console.log( "ye address aara piche sae")
    if (window.ethereum) {
      window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const nftreseller = new Contract(
        "0x7C31136E28570e972472277338f62ae1B7fF1B94",
        NftReseller.abi,
        signer
      );
      const nft721 = new Contract(
        data.location.state.Nftaddress,
        NFT721.abi,
        signer
      );
      console.log({ signer, nftreseller, nft721 });
      setnftcontract(nft721);
      setccontract(nftreseller);
      console.log(window.location.origin);
      tokenurifunc();
    }
  }, []);

  const tokenurifunc = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const nft721 = new Contract(
      data.location.state.Nftaddress,
      NFT721.abi,
      signer
    );
    console.log(data.location.state.Id);
    const tokenURI = await nft721.tokenURI(data.location.state.Id);
    console.log(tokenURI + "idkahahn");
    setmeta(tokenURI);
    await axios.get(tokenURI).then(function (response) {
      console.log(response.data.result.image);
      settokeninfo(response.data.result.image);
    });
  };
  const createlink = async (id, price) => {
    try {
      let yourNumber;
      console.log(id, price, "sahi offer id agyi ");
      var x = ethers.utils.parseEther(price.toString());
      console.log(ccontract);
      const tx = await ccontract.createShareLink(id, x);
      setloader(true);
      console.log(tx);
      const txsign = await tx.wait();
      console.log(parseInt(txsign.events[0].args.shareId._hex,16),"txsign");
      const sid = parseInt(txsign.events[0].args.shareId._hex,16)
       setshareid(sid);
       setvaluee(
            window.location.origin + "/nftname2/" + sid
          );
       submithandler(
            sid,
            window.location.origin + "/nftname2/" + sid
          );
      // ccontract.once(txsign, async (transaction) => {
      //   // Emitted when the transaction has been mined
      //   let hexString = transaction.args.shareId;
      //   yourNumber = parseInt(hexString, 16);
      //   console.log(yourNumber);
      //   if (yourNumber > 26) {
      //     await setshareid(yourNumber - 12);
      //     await setvaluee(
      //       window.location.origin + "/nftname2/" + yourNumber - 12
      //     );
      //     await submithandler(
      //       yourNumber,
      //       window.location.origin + "/nftname2/" + yourNumber - 12
      //     );
      //   } else if (yourNumber > 9 && yourNumber < 27) {
      //     await setshareid(yourNumber - 6);
      //     await setvaluee(
      //       window.location.origin + "/nftname2/" + yourNumber - 6
      //     );
      //     await submithandler(
      //       yourNumber,
      //       window.location.origin + "/nftname2/" + yourNumber - 6
      //     );
      //   } else {
      //     await setshareid(yourNumber);
      //     await setvaluee(window.location.origin + "/nftname2/" + yourNumber);
      //     await submithandler(
      //       yourNumber,
      //       window.location.origin + "/nftname2/" + yourNumber
      //     );
      //   }
      // });
    } catch (e) {
      console.log(e);
      swal("This NFT has been SOLD");
    }
  };

  const submithandler = async (a, b) => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (accounts.length === 0) {
      return;
    }
    await axios
      .post("https://newinfluencerapi.herokuapp.com/users", {
        Creatorname: data.location.state.Creatorname,
        Nftname: data.location.state.Nftname,
        Id: data.location.state.Id,
        Infulenceraddress: accounts[0],
        Shareid: a,
        Sharelink: b,
        Price: totalprice,
        Marginprice: addedprice,
        Quantity: data.location.state.Quantity,
        Description: data.location.state.Description,
        NftAddress: data.location.state.Nftaddress,
      })
      .then(function (response) {
        console.log(response);
        setShowResults2(true);
        setloader(false);
      });
  };

  const onclickcreateoffer = async (id, price) => {
    await createlink(id, price);
  };
  if (loader === true) {
    content = (
      <div style={{ height: "100vh" }}>
        <div class="loader"></div>
      </div>
    );
  }
  return (
    <div>
      {/* {loader === false?( */}
      <div>
        <div class="adminLayoutSection CreatingNFTMain">
          <div class="adminLeftside">
            <div class="logoSections">
              <Link to="/">
                <img src="assets/images/logo.svg" alt="" />
              </Link>
            </div>

            <div class="leftsideMenus">
              <h3>Influencer</h3>
              <ul>
                <li>
                  <a href="">
                    <Link to="/gallery">
                      <img src="assets/images/Gallery.svg" alt="" />
                      <span>Gallery</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="">
                    <Link to="/influencer">
                      <img src="assets/images/dashboard.png" alt="" />
                      <span>Dashboard</span>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="adminReightSide CreateNFTSections">
            <div class="respoonsiveHeader">
              <nav class="navbar navbar-expand-xl navbar-light">
                <a class="navbar-brand" href="#">
                  <img src="assets/images/logo.svg" alt="" />
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
                        <img src="assets/images/SubmitNFT.svg" alt="" /> Submit
                        NFT
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
            <div class="NFTNameSection">
              <div class="NFTNameCard">
                <div class="NFTNameCard_img">
                  <img src={tokeninfo} alt="" />
                </div>
                <div class="NFTNameCard_userName">
                  <h2>{data.location.state.Nftname}</h2>
                  <span>{data.location.state.Creatorname}</span>
                  <p>{data.location.state.Price} ETH</p>
                  <span>Category: {data.location.state.Typeofnft}</span>
                </div>
              </div>
              <div class="NFTDescriptions">
                <h2>Description</h2>
                <p>{data.location.state.Description}</p>
                <a
                  onClick={showdataclick}
                  
                >
                  CREATE OFFER
                  <span
                     title="Add a margin for yourself on top of the NFT sellers price."
                  
                      style={{
                        position: "absolute",
                        marginLeft: "300px",
                        marginBottom: "40px",
                      }}
                    > {" "}
                    &#63;
                  </span>
                </a>
              </div>
              <br></br>

              {showResults ? (
                <div class="CreatesharingLink">
                  <br></br>
                  <h4>Add a fee for yourself and create Sharelink</h4>
                  <br></br>
                  <ul>
                    <li>
                      <input
                        type="text"
                        placeholder={data.location.state.Price}
                        disabled
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        min="0"
                        placeholder="Add Your Fee"
                        onChange={setpricingadded}
                        value={addedprice}
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        style={{ width: "200px" }}
                        placeholder="Customer Total"
                        value={totalprice}
                        disabled
                      />
                    </li>
                  </ul>
                  <a
                    onClick={() => {
                      onclickcreateoffer(
                        data.location.state.Offerid,
                        addedprice
                      );
                    }}

                  >
                    CREATE ShareLink
                    <span
                      title="Share this link with your followers and get paid instantly when this NFT is sold. 
                  "
                      style={{
                        position: "absolute",
                        marginLeft: "400px",
                        marginBottom: "40px",
                      }}
                    >
                      {" "}
                      &#63;
                    </span>
                  </a>
                  <br></br>
                  <br></br>

                  {loader === true ? (
                    <h4 style={{ marginLeft: "210px", position: "absolute" }}>
                      Please wait while we conjure up your Sharelink!
                    </h4>
                  ) : (
                    <div></div>
                  )}
                </div>
              ) : null}

              {showResults2 ? (
                <div class="yourLinkisReasy">
                  {/* <h4>THIS SECTION APPEARS WHEN YOU PRESS CREATE LINK BUTTON</h4> */}
                  <h3>YOUR LINK IS READY !</h3>
                  <form action="">
                    <input
                      type="text"
                      value={valuee}
                      placeholder={window.location.origin}
                      style={{ width: "1000px" }}
                    />
                    <Link to={`/nftname2/${shareid}`}>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(valuee);
                        }}
                      >
                        Go To LINK
                      </button>
                    </Link>
                  </form>
                </div>
              ) : null}
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
                    <li>
                        <a href="https://www.twitter.com/mintpact" target="_blank">Twitter</a>
                      </li>
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
      {/* //  ) : (
//   content
// )} */}
    </div>
  );
}

export default Nftname;
