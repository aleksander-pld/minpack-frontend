import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch('https://mintpactnftbackend.herokuapp.com/api/offers')
        const { data } = await res.json()
        setOffers(data)
      } catch (e) {
        console.error(e)
      }
    }

    fetchOffers()
  }, [])

  return (
    <div>
      <div className="adminLayoutSection CreatingNFTMain">
        <div className="adminLeftside">
          <div className="logoSections">
            <Link to="/"><img src="/assets/images/logo.svg" alt=""/></Link>
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

          <h1>GALLERY</h1>

          <div className="galleryFilterSection">
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="NFTFilterSection">
                    <span>SORT BY:</span>
                    <ul>
                      <li>
                        <a className="active">
                          Newest to oldest
                        </a>
                      </li>
                      <li>
                        <a>Oldest to newest</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="NFTFilterSection prcieFilterSection">
                    <span>PRICE:</span>
                    <ul>
                      <li>
                        <a>Low to High</a>
                      </li>
                      <li>
                        <a>High to low</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="NFTCardSections">
            <div className="container">
              <div className="row">
                {offers.map((offer) => {
                    return (
                      <div className="col-lg-4 col-md-6 col-6" key={offer.offerId}>
                        <div className="NFTCard">
                          <div className="NFTuserCard">
                            <img src={offer.nft.image} alt=""/>
                          </div>
                          <Link to={{ pathname: `/offer/${offer.offerId}`, state: offer }}>
                            <h2>{offer.nft.name}</h2>
                            <p>{offer.price} ETH</p>
                          </Link>
                        </div>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
          </div>
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
    </div>
  );
}

export default Gallery;