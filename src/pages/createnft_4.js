import React, { Component, useState, useEffect, useContext } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import getBlockchain from "../nft721.js";
import { ethers, Contract } from "ethers";
import NftReseller from "../contracts/NftReseller.json";
import NFT721 from "../contracts/TestNft721Token.json";
import swal from "sweetalert";
import axios from "axios";
import Submittingnft from "./submittingnft.js";
import { NumberContext } from "./approvee";

const Createnft_4 = ({ nftaddress, id }) => {
  console.log(nftaddress + id);

  // console.log(nftaddr+"Hello")
  //const [id, setid] = useState();
  const [description, setdescription] = useState();
  const [price, setprice] = useState();
  const [creatorname, setcreatorname] = useState();
  const [quantity, setquantity] = useState();
  const [ccontract, setccontract] = useState({});
  const [txdone, settxdone] = useState(false);
  const [offerid, setofferid] = useState(Number);
  const [nftname, setnftname] = useState();
  const [name, setname] = useState();
  const [type, settype] = useState("");
  const [textshowup, settextshowup] = useState(false);
  const [Checked, setChecked] = useState(false);
  const [verify, setverify] = useState(false);
  const [overalldis,setoveralldis]=useState(false)
  const [tokeninfo, settokeninfo] = useState();
  let content;
  let history = useHistory();

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const nftreseller = new Contract(
        "0x7C31136E28570e972472277338f62ae1B7fF1B94",
        NftReseller.abi,
        signer
      );
      console.log({ signer, nftreseller });
      setccontract(nftreseller);
    }
    nftnamefetch();
    tokenurifunc(id, nftaddress);
  }, []);
  const nftnamefetch = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const nft = new Contract(nftaddress, NFT721.abi, signer);
    const tx = await nft.name();
    console.log(tx, "nftname");
    setname(tx);
  };

  const createOffer = async (addr, tokenid, price) => {
    // setloading(true);
    if (verify === true) {
      try {
        let yourNumber;
        let num;
        var x = ethers.utils.parseEther(price.toString());

        console.log(addr + "hi" + tokenid + "hi" + x);
        console.log(ccontract);
        const tx = await ccontract.createOffer(addr, tokenid, x);
        setoveralldis(true)
        settextshowup(true);
        console.log(tx);
        const txsign = await tx.wait();
        console.log(txsign,"txt")
        console.log(parseInt(txsign.events[0].args.offerId._hex,16),"tx");
        const sid = parseInt(txsign.events[0].args.offerId._hex,16)
         setofferid(sid);
           
             submithandler(sid);
            settxdone(true);
        // ccontract.once(txsign, async (transaction) => {
        //   // Emitted when the transaction has been mined
        //   console.log(transaction.args, "args hn ye");
        //   let hexString = transaction.args.offerId;
        //   console.log(hexString, "HEXSTRING hn ye");
        //   yourNumber = parseInt(hexString, 16);
        //   if (yourNumber > 26) {
        //     await setofferid(yourNumber - 12);
        //     console.log(yourNumber-12, "greater than 20");
        //     await submithandler(yourNumber - 12);
        //   } else if (yourNumber > 9 && yourNumber < 27) {
        //     await setofferid(yourNumber - 6);
        //     console.log(yourNumber-6, "greater than 9");
        //     await submithandler(yourNumber - 6);
        //   } else {
        //     await setofferid(yourNumber);
        //     console.log(yourNumber, "less than 9");
        //     await submithandler(yourNumber);
        //   }

          
        // });
      } catch (e) {
        console.log(e);
        swal("transaction failed");
      }
    } else {
      swal("Please verify the details checkbox");
    }
    // setloading(false);
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
  const onclickcreateoffer = async () => {
    await createOffer(nftaddress, id, price);
  };

  const changenftname = (e) => {
    setnftname(e.target.value);
    console.log(e.target.value);
  };

  const changedesciption = (e) => {
    setdescription(e.target.value);
    console.log(e.target.value);
  };

  const changeprice = (e) => {
    setprice(e.target.value);
    console.log(e.target.value);
  };

  const changecreatorname = (e) => {
    setcreatorname(e.target.value);
    console.log(e.target.value);
  };

  const changequantity = (e) => {
    setquantity(e.target.value);
    console.log(e.target.value);
  };
  const submithandler = async (e) => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (accounts.length === 0) {
      return;
    }
    // console.log(accounts[0])
    console.log(
      creatorname,
      id,
      e,
      accounts[0],
      type,
      nftname,
      price,
      quantity,
      description
    );
    await axios
      .post("https://submitnftapi.herokuapp.com/users", {
        Creatorname: creatorname,
        Id: id,
        Offerid: e,
        Nftname: name,
        Typeofnft: type,
        Artistaddress: accounts[0],
        Nftaddress: nftaddress,
        Price: price,
        Quantity: quantity,
        Description: description,
      })
      .then(function (response) {
        console.log(response);
      });
  };

  const mainfunc = async () => {
    await onclickcreateoffer();
  };

  if (txdone == true) {
    content = (
      <div>
        {history.push("/submitnft")}
        <Route
          path="/submitnft"
          exact
          render={({ match }) => <Submittingnft />}
        ></Route>
      </div>
    );
  }
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
              <div >
                  <img style={{display:"block",marginRight:"auto",marginLeft:"auto"}} src={tokeninfo} alt="" />
                </div>
                <br></br>
              <h1>Submit NFT</h1>
              <form >
                <div class="form-group">
                
                  <label for="">Creator Name</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={changecreatorname}
                    disabled={overalldis}
                  />
                </div>
                <div class="form-group">
                  <label for="">Nft Name</label>
                  <input type="text" class="form-control" placeholder={name} disabled/>
                </div>
                <div class="form-group">
                  <label for="">Token Address</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder={nftaddress}
                    disabled
                    value={nftaddress}
                  />
                </div>
                <div class="form-group">
                  <label for="">Token Id</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder={id}
                    value={id}
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label for="">Price Demand...</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={changeprice}
                    disabled={overalldis}
                  />
                  <span>ETH</span>
                </div>
                {/* <div class="form-group">
                  <label for="">Quantity</label>
                  <input
                    type="number"
                    class="form-control"
                    onChange={changequantity}
                  />
                </div> */}
              </form>
              <div class="CreatingNFT_Types">
                <h2>Type</h2>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="Artbox"
                      onClick={() => {
                        settype("Art");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label for="Artbox">Art</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="Accessbox"
                      onClick={() => {
                        settype("Access");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label for="Accessbox">Access</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="Collectiblebox"
                      onClick={() => {
                        settype("Collectible");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label for="Collectiblebox">Collectible</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="DomainNamebox"
                      onClick={() => {
                        settype("Domain Nam");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label for="DomainNamebox">Domain Name</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="Financebox"
                      onClick={() => {
                        settype("Finance");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label for="Financebox">Finance</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="Gamingbox"
                      onClick={() => {
                        settype("Gaming");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label for="Gamingbox">Gaming</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="TradingCardbox"
                      onClick={() => {
                        settype("Trading Card");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label for="TradingCardbox">Trading Card</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="Sportbox"
                      onClick={() => {
                        settype("Sport");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label for="Sportbox">Sport</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="Musicbox"
                      onClick={() => {
                        settype("Music");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label for="Musicbox">Music</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="Otherbox"
                      onClick={() => {
                        settype("Other");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label for="Otherbox">Other</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="LoadMorebox"
                      onClick={() => {
                        settype("Load More");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label for="LoadMorebox">Load More</label>
                  </li>
                </ul>
              </div>

              <div class="creatingNFT_Description">
                <h2>Description</h2>
                <textarea
                  class="form-control"
                  name=""
                  id=""
                  placeholder="Please describe your NFT in 300 words or less..."
                  onChange={changedesciption}
                  disabled={overalldis}
                ></textarea>
                <div class="Description_termofService">
                  <input
                    type="checkbox"
                    id="Musicbox"
                    onChange={() => {
                      setverify(true);
                    }}
                    disabled={verify}
                  />
                  &nbsp;&nbsp;
                  <label for="I_verifyed">
                    I verify that I am the actual owner of this NFT and it
                    represents original work
                  </label>
                </div>
                <button
                  type="submit"
                  onClick={mainfunc}
                  class="creatingNFTUpload"
                >
                  UPLOAD
                  <span 
                  title="Add details about your NFT and them to Mintpact’s on chain Marketplace. You will get paid instantly when your NFT is sold through an influencer." style={{position:"absolute",marginLeft:"200px",marginBottom:"40px"}}>                 &#63;</span>
                
                </button>
                <br></br>
                <br></br>
                {textshowup ? (
                  <h4 style={{ marginLeft: "200px", position: "absolute" }}>
                    Please wait while your transaction confirms.
                  </h4>
                ) : (
                  <div></div>
                )}
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
          <NumberContext.Consumer>
            {(value) => <div>The answer is {value}.</div>}
          </NumberContext.Consumer>

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
        content
      )}
    </div>
  );
};

export default Createnft_4;
