import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { ethers, Contract } from "ethers";
import NftReseller from "../contracts/NftReseller.json";
import swal from "sweetalert";
import axios from "axios";
import NFT721 from '../contracts/TestNft721Token.json';

const Upload = () => {
  const [price, setprice] = useState();
  const [type, settype] = useState("");
  const [Checked, setChecked] = useState(false)
  const history = useHistory();

  const [description, setDescription] = useState();
  const [isAccepted, setIsAccepted] = useState(false);
  const [isTransactionPending, setIsTransactionPending] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [selectedNft, setSelectedNft] = useState(null)
  const [step, setStep] = useState(0)

  const toggleCheckbox = () => setIsAccepted(previous => !previous)

  useEffect(() => {
    const fetchUserNfts = async () => {
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        axios
          .get(
            // `https://rinkeby-api.opensea.io/api/v1/assets?owner=0x105f0a4961C8F69cB4F8cFD2AE69954021F66Dfe&order_direction=asc&offset=0&limit=20`
            `https://rinkeby-api.opensea.io/api/v1/assets?owner=${address}&order_direction=asc&offset=0&limit=20`
          )
          .then((response) => {
            setNfts(response.data.assets);
          });
      }
    };

    fetchUserNfts();
  }, []);

  const onClickUpload = async () => {
    let error = ''

    if (!price) {
      error = 'Please enter minimum price'
    } else if (!type) {
      error = 'Please select the type of NFT'
    } else if (!description) {
      error = 'Please enter description for NFT'
    } else if (!isAccepted) {
      error = 'Please accept the terms'
    }

    if (error) {
      swal(error)
      return
    }

    try {
      setIsTransactionPending(true);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress()

      const nftAddress = selectedNft.asset_contract.address
      const nftImage = selectedNft.image_url
      const nftName = selectedNft.name
      const nftTokenId = selectedNft.token_id

      const nft721Contract = new Contract(nftAddress, NFT721.abi, signer);

      const approveTx = await nft721Contract.approve("0xCB996552a7ba1596C8B71395D73166026dfA8dFD", nftTokenId);
      await approveTx.wait();

      const nftResellerContract = new Contract(
        "0xCB996552a7ba1596C8B71395D73166026dfA8dFD",
        NftReseller.abi,
        signer
      )

      const priceInWei = ethers.utils.parseEther(price.toString());

      const offerTx = await nftResellerContract.createOffer(nftAddress, nftTokenId, priceInWei);
      const offerTxData = await offerTx.wait();
      const offerId = offerTxData.events[0].args.offerId.toString()

      const data = {
        nft: {
          address: nftAddress,
          category: type,
          image: nftImage,
          name: nftName,
          tokenId: nftTokenId,
        },
        offer: {
          artist: address,
          description,
          offerId,
          price,
        }
      }

      await axios
        .post("https://mintpactnftbackend.herokuapp.com/api/offer", data)

      history.push("/submitnft")
    } catch (e) {
      console.error(e);
      setIsTransactionPending(false);
      swal("Transaction Failed");
    }
  }

  const onChangePrice = (e) => {
    setprice(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <div className="adminLayoutSection CreatingNFTMain">
        <div className="adminLeftside">
          <div className="logoSections">
            <Link to="/">
              <img src="/assets/images/logo.svg" alt=""/>
            </Link>
          </div>
          <div className="leftsideMenus">
            <h3>Artist</h3>
            <ul>
              <li>
                <a href="">
                  <Link to="/approve">
                    <img src="/assets/images/SubmitNFT.svg" alt=""/>
                    <span>Submit NFT</span>
                  </Link>
                </a>
              </li>
              <li>
                <a href="">
                  <Link to="/admindashboard">
                    <img src="/assets/images/dashboard.png" alt=""/>
                    <span>Dashboard</span>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="adminRightSide CreateNFTSections">
          <div className="responsiveHeader">
            <nav className="navbar navbar-expand-xl navbar-light">
              <a className="navbar-brand" href="#">
                <Link to="/"><img src="/assets/images/logo.svg" alt=""/></Link>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img src="/assets/images/menu_icons.svg" alt=""/>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{ marginTop: "30px" }}>
                  <h3>Artist</h3>
                  <li className="nav-item active">
                    <a className="nav-link" href="">
                      <img src="/assets/images/SubmitNFT.svg" alt=""/> Submit
                      NFT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      <img src="/assets/images/dashboard.png" alt=""/> Dashboard
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav" style={{ marginTop: "30px" }}>
                  <h3>Influencer</h3>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      {" "}
                      <img src="/assets/images/Gallery.svg" alt=""/> Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      <img src="/assets/images/dashboard.png" alt=""/> Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <h1>{`${step === 0 ? 'Select' : 'Upload'}`} NFT</h1>

          {step === 0 && nfts.length !== 0 && (
            <>
              <div className="NFTCardSections">
                <div className="container">
                  <div className="row">
                    {nfts.map((nft) => {
                        const isSelected = selectedNft && (selectedNft.id === nft.id)
                        return (
                          <div className="col-lg-4 col-md-6 col-6" onClick={() => setSelectedNft(nft)} key={nft._id}>
                            <div className="NFTCard">
                              <div className="NFTuserCard position-relative">
                                {isSelected && (
                                  <img className="icon-selected" src="/assets/images/checked.svg" width="24" alt="selected"/>
                                )}
                                <img src={nft.image_url} alt={nft.name}/>
                              </div>
                              <h2>{nft.name}</h2>
                            </div>
                          </div>
                        )
                      }
                    )}
                  </div>
                </div>
              </div>

              <div className="upload-actions">
                <button
                  type="submit"
                  className="creatingNFTUpload"
                  disabled={!selectedNft}
                  onClick={() => setStep(1)}
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <form>
                <div className="form-group">
                  <label>Creator Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedNft.name}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label>Price Demand...</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={onChangePrice}
                    disabled={isTransactionPending}
                  />
                  <span>ETH</span>
                </div>
              </form>

              <div className="CreatingNFT_Types">
                <h2>Type</h2>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="art"
                      onClick={() => {
                        settype("Art");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label htmlFor="art">Art</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="access"
                      onClick={() => {
                        settype("Access");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label htmlFor="access">Access</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="collectible"
                      onClick={() => {
                        settype("Collectible");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label htmlFor="collectible">Collectible</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="domain"
                      onClick={() => {
                        settype("Domain Nam");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label htmlFor="domain">Domain Name</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="finance"
                      onClick={() => {
                        settype("Finance");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label htmlFor="finance">Finance</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="gaming"
                      onClick={() => {
                        settype("Gaming");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label htmlFor="gaming">Gaming</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="trading"
                      onClick={() => {
                        settype("Trading Card");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label htmlFor="trading">Trading Card</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="sport"
                      onClick={() => {
                        settype("Sport");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label htmlFor="sport">Sport</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="music"
                      onClick={() => {
                        settype("Music");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label htmlFor="music">Music</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="other"
                      onClick={() => {
                        settype("Other");
                        setChecked(true);
                      }}
                      disabled={Checked}
                    />
                    <label htmlFor="other">Other</label>
                  </li>
                </ul>
              </div>

              <div className="creatingNFT_Description">
                <h2>Description</h2>
                <textarea
                  className="form-control"
                  placeholder="Please describe your NFT in 300 words or less..."
                  onChange={onChangeDescription}
                />

                <div className="form-group form-check Description_termofService">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="terms"
                    onClick={toggleCheckbox}
                    value={isAccepted}
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I verify that I am the actual owner of this NFT and it
                    represents original work
                  </label>
                </div>

                <div className="upload-actions">
                  <button
                    type="button"
                    className="btn btn-link btn-cancel"
                    onClick={() => setStep(0)}
                  >
                    CANCEL
                  </button>

                  <button
                    type="submit"
                    className="creatingNFTUpload"
                    disabled={isTransactionPending}
                    onClick={onClickUpload}
                  >
                    UPLOAD
                  </button>
                </div>

                <br/>
                <br/>

                {isTransactionPending && (
                  <h4 style={{ marginLeft: "200px", position: "absolute" }}>
                    Please wait while your transaction confirms.
                  </h4>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="footercontents">
                <p>© Mintpact 2021</p>
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
    </>
  );
};

export default Upload;
