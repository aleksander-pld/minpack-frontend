import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ethers } from 'ethers';


const Influencer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchInfluencerShares = async () => {
      try {
        if (window.ethereum) {
          await window.ethereum.enable();
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();

          const res = await fetch(`https://mintpactnftbackend.herokuapp.com/api/shares?influencer=${address}`)
          const { data } = await res.json()

          setData(data)
        }
      } catch (e) {
        console.error(e)
      }
    }

    fetchInfluencerShares()
  }, []);

  return (
    <div>
      <div className="adminLayoutSection CreatingNFTMain">
        <div className="adminLeftside">
          <div className="logoSections">
            <Link to="/"><img src="/assets/images/logo.svg" alt="Mintpact"/></Link>
          </div>

          <div className="leftsideMenus">
            <h3>Influencer</h3>
            <ul>
              <li>
                <Link to='/gallery'>
                  <img src="/assets/images/Gallery.svg" alt=""/>
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to='/influencer'>
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

          <div className="influencerDashboard">
            <h1>Influencer Dashboard</h1>
            <form action="" className="dashboardPage">
              <div className="form-group">
                <label>Account Balance</label>
                <input type="text" className="form-control" disabled/>
                <span>CLAIM</span>
              </div>
            </form>

            <div className="customTableSection">
              <h2>SALES HISTORY</h2>
              <table className="table ">
                <tr>
                  <th>S.NO.</th>
                  <th>NFT NAME</th>
                  <th>PRICE</th>
                  <th>MARGIN</th>
                </tr>
                {data.map(share =>
                  <tr>
                    <td>{share.shareId}</td>
                    <td>{share.offer.nft.name}</td>
                    <td>{share.offer.price} ETH</td>
                    <td>{share.margin} ETH</td>
                  </tr>
                )}
              </table>

              <div className="loadMoreButton">
                <a href="">Load More</a>
              </div>
            </div>

            <div className="customTableSection">
              <h2>OFFER LINKS</h2>
              <div className="tableContent">
                <div className="SnoSection">
                  <p>S.NO.</p>
                </div>
                <div className="itemSections">
                  <p>ITEM NAME</p>
                </div>
                <div className="itemSections">
                  <p>ShareLink</p>
                </div>
                <div className="optionsButtons" style={{ visibility: 'hidden' }}>
                  <a href="" className="ViewStatusButtons">Copy Link To Share</a>
                </div>
              </div>

              {data.map(share =>
                <div className="tableContent">
                  <div className="SnoSection">
                    <p className="SnoSectionContent">{share.shareId}</p>
                  </div>
                  <div className="itemSections">
                    <p className="itemSectionsContent">{share.offer.nft.name}</p>
                  </div>
                  <div className="itemSections">
                    <p className="itemSectionsContent">
                      {`${window.location.origin}/share/${share.shareId}`}
                    </p>
                  </div>
                  <div className="optionsButtons">
                    <a href={`/share/${share.shareId}`} className="ViewStatusButtons">Go to ShareLink</a>
                  </div>
                </div>
              )}


              <div className="loadMoreButton">
                <a href="">Load More</a>
              </div>
            </div>
          </div>

          {/* <!-- <div className="uploadNewNFTbutotn">
                <a href="">Upload New NFT</a>
            </div> --> */}
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="footercontents">
                <p>Copyright Mintpact © 2021</p>
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

export default Influencer
