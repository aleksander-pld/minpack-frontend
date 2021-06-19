import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ethers, Contract } from 'ethers';
import NftReseller from '../contracts/NftReseller.json';
import swal from 'sweetalert'

const Artist = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchArtistOffers = async () => {
      try {
        if (window.ethereum) {
          await window.ethereum.enable();
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();

          const res = await fetch(`https://mintpactnftbackend.herokuapp.com/api/offers?artist=${address}`)
          const { data } = await res.json()
          setData(data)
        }
      } catch (e) {
        console.error(e)
      }
    }

    fetchArtistOffers()
  }, []);

  const cancelOffer = async (id) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const nftResellerContract = new Contract(
        '0xCB996552a7ba1596C8B71395D73166026dfA8dFD',
        NftReseller.abi,
        signer
      );

      const tx = await nftResellerContract.cancelOffer(id);
      await tx.wait();
    } catch (e) {
      console.error(e);
      swal("Transaction failed");
    }
  };

  return (
    <div>
      <div className="adminLayoutSection CreatingNFTMain">
        <div className="adminLeftside">
          <div className="logoSections">
            <Link to="/"><img src="/assets/images/logo.svg" alt="Mintpact"/></Link>
          </div>
          <div className="leftsideMenus">
            <h3>Artist</h3>
            <ul>
              <li>
                <Link to="/upload">
                  <img src="/assets/images/SubmitNFT.svg" alt=""/>
                  <span>Submit NFT</span>
                </Link>
              </li>
              <li>
                <Link to='/artist'>
                  <img src="/assets/images/dashboard.png" alt=""/>
                  <span>Dashboard</span>
                </Link>
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
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <img src="/assets/images/menu_icons.svg" alt=""/>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{ marginTop: '30px' }}>
                  <h3>Artist</h3>
                  <li className="nav-item active">
                    <a className="nav-link" href=""><img src="/assets/images/SubmitNFT.svg" alt=""/> Submit NFT</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      <img src="/assets/images/dashboard.png" alt=""/> Dashboard
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav" style={{ marginTop: '30px' }}>
                  <h3>Influencer</h3>
                  <li className="nav-item">
                    <a className="nav-link" href=""> <img src="/assets/images/Gallery.svg" alt=""/> Gallery</a>
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

          <h1>DASHBOARD</h1>

          <form action="" className="dashboardPage">
            <div className="form-group">
              <label htmlFor="">Account Balance</label>
              <input type="text" className="form-control" disabled/>
              <span>CLAIM</span>
            </div>
          </form>

          <div className="customTableSection">
            <div className="tableContent">
              <div className="SnoSection">
                <p>S.NO.</p>
              </div>
              <div className="itemSections">
                <p>ITEM NAME</p>
              </div>
              <div className="optionsButtons mobileDisplay" style={{ visibility: 'hidden' }}>
                <button className="ViewStatusButtons">View Status</button>
                <button className="CancelOfferButton">Cancel Offer</button>
              </div>
            </div>

            {data.map(offer => (
              <div className="tableContent">
                <div className="SnoSection">
                  <p className="SnoSectionContent">{offer.offerId}</p>
                </div>
                <div className="itemSections">
                  <p className="itemSectionsContent">{offer.nft.name}</p>
                </div>
                <div className="optionsButtons">
                  <a className="ViewStatusButtons">View Status</a>
                  <a className="CancelOfferButton" onClick={() => cancelOffer(offer.offerId)}>Cancel Offer</a>
                </div>
              </div>
            ))}
          </div>

          <div className="uploadNewNFTbutotn">
            <Link to='/upload'><a href="">Upload New NFT</a></Link>
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
                  <li><a href="https://discord.gg/bVaXT2VT" target="_blank">Discord</a></li>
                  <li>
                    <a href="https://www.twitter.com/mintpact" target="_blank">Twitter</a>
                  </li>
                  <li><a href="https://github.com/Mintpact" target="_blank">Github</a></li>
                  <li><a href="https://t.me/joinchat/MIlqWUZUAs8xODdl" target="_blank">Telegram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Artist
