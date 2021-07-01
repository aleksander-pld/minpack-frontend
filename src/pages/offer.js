import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { ethers, Contract } from "ethers";
import NftReseller from "../contracts/NftReseller.json";
import swal from "sweetalert";
import axios from "axios";
import { shortenAddress } from '../utils';
import ModalComponent from '../components/modal';

const Offer = (props) => {
  const history = useHistory()
  const { id } = useParams()
  const containerRef = useRef()
  const [isLoading, setIsLoading] = useState(true);
  const [isTransactionPending, setIsTransactionPending] = useState(false);
  const [margin, setMargin] = useState();
  const [modalText, setModalText] = useState({ message: '', tip: '' });
  const [offer, setOffer] = useState(null)
  const [totalPrice, setTotalPrice] = useState()

  const [showResults, setShowResults] = useState(false);
  const [showResults2, setShowResults2] = useState(false);
  const [shareId, setShareId] = useState(Number);
  const [valuee, setvaluee] = useState("");

  const showdataclick = () => setShowResults(true);

  const onChangeMargin = (e) => {
    const value = e.target.value
    const total = parseFloat(
      Number(value) + Number(offer.price)
    ).toFixed(3);

    setMargin(value);
    setTotalPrice(total);
  };

  useEffect(() => {
    const fetchOfferDetails = async () => {
      try {
        const res = await fetch(`https://mintpactnftbackend.herokuapp.com/api/offer/${id}`)
        const { data } = await res.json()
        setOffer(data)
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        history.push('/gallery')
      }
    }

    if (props.location.state) {
      setOffer(props.location.state)
      setIsLoading(false)
    } else if (id) {
      fetchOfferDetails()
    }
  }, []);

  const gotoScrollDown = () => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }

  const onCreateShare = async () => {
    try {
      setIsTransactionPending(true)

      setModalText({
        message: `Confirm this Transaction with 
        your wallet to create Sharelink.`,
        tip: ''
      })

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress()

      const nftResellerContract = new Contract(
        "0xCB996552a7ba1596C8B71395D73166026dfA8dFD",
        NftReseller.abi,
        signer
      )

      const priceInWei = ethers.utils.parseEther(margin.toString())
      const shareTx = await nftResellerContract.createShareLink(offer.offerId, priceInWei)
      const shareTxData = await shareTx.wait()
      
      setModalText({
        message: `Please wait while we
        conjure up your Sharelink`,
        tip: ''
      })
      const shareId = shareTxData.events[0].args.shareId.toString()
      const data = {
        offer: offer._id,
        influencer: address,
        margin,
        shareId,
      }

      await axios
        .post("https://mintpactnftbackend.herokuapp.com/api/share", data)

      setShareId(shareId)
      setShowResults2(true)
      setIsTransactionPending(false)
      gotoScrollDown()
    } catch (e) {
      console.error(e)
      setIsTransactionPending(false)
      swal("Transaction Failed")
    }
  }

  if (isLoading) {
    return (
      <div style={{ height: "100vh" }}>
        <div className="loader"/>
      </div>
    );
  }

  return (
    <div>
      <div className="adminLayoutSection CreatingNFTMain">
        <div className="adminLeftside">
          <div className="logoSections">
            <Link to="/">
              <img src="/assets/images/logo.svg" alt=""/>
            </Link>
          </div>

          <div className="leftsideMenus">
            <h3>Influencer</h3>
            <ul>
              <li>
                <a href="">
                  <Link to="/gallery">
                    <img src="/assets/images/Gallery.svg" alt=""/>
                    <span>Gallery</span>
                  </Link>
                </a>
              </li>
              <li>
                <a href="">
                  <Link to="/influencer">
                    <img src="/assets/images/dashboard.png" alt=""/>
                    <span>Dashboard</span>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="adminRightSide CreateNFTSections" ref={containerRef}>
          <div className="responsiveHeader">
            <nav className="navbar navbar-expand-xl navbar-light">
              <a className="navbar-brand" href="#">
                <img src="/assets/images/logo.svg" alt=""/>
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
                      <img src="/assets/images/dashboard.png" alt=""/>{" "}
                      Dashboard
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
                      <img src="/assets/images/dashboard.png" alt=""/>{" "}
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="NFTNameSection">
            <div className="NFTNameCard">
              <div className="NFTNameCard_img">
                <img src={offer.nft.image} alt={offer.nft.name}/>
              </div>
              <div className="NFTNameCard_userName">
                <h2>{offer.nft.name}</h2>
                <span>{shortenAddress(offer.artist)}</span>
                <p>{offer.price} ETH</p>
                <span>Category: {offer.nft.category}</span>
              </div>
            </div>
            <div className="NFTDescriptions">
              <h2>Description</h2>
              <p>{offer.description}</p>
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
            <br/>

            {showResults ? (
              <div className="CreatesharingLink">
                <br/>
                <h4>Add a fee for yourself and create Sharelink</h4>
                <br/>
                <ul>
                  <li>
                    <input
                      type="text"
                      placeholder={offer.price}
                      disabled
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      min="0"
                      placeholder="Add Your Fee"
                      onChange={onChangeMargin}
                      value={margin}
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      style={{ width: "200px" }}
                      placeholder="Customer Total"
                      value={totalPrice}
                      disabled
                    />
                  </li>
                </ul>
                <a
                  onClick={onCreateShare}
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
                <br/>
                <br/>

                {isLoading ? (
                  <h4 style={{ marginLeft: "210px", position: "absolute" }}>
                    Please wait while we conjure up your Sharelink!
                  </h4>
                ) : (
                  <div/>
                )}
              </div>
            ) : null}

            {showResults2 ? (
              <div className="link-ready">
                <h3>YOUR LINK IS READY !</h3>
                <form action="">
                  <input
                    type="text"
                    value={`${window.location.origin}/share/${shareId}`}
                    style={{ width: "1000px" }}
                  />
                  <Link to={`/share/${shareId}`}>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`${window.location.origin}/share/${shareId}`);
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

      <footer className="footer-app">
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

      <ModalComponent
        isOpen={isTransactionPending}
        message={modalText.message}
        tip={modalText.tip}
      />
    </div>
  );
}

export default Offer;
