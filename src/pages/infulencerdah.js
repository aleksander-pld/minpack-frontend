import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Infulencerdah() {
  const [data, setdata] = useState([])
  const nftdetails = e => {
    axios.get('https://newinfluencerapi.herokuapp.com/users')
      .then(async (response) => {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length === 0) {
          return;
        }
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].Infulenceraddress === accounts[0]) {
            setdata(olddata => [...olddata, response.data[i]])
          }
          //    setdata(response.data[i])
        }
      })
  }

  useEffect(() => {

    nftdetails()

  }, []);
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
                  <Link to='/gallery'>
                    <img src="/assets/images/Gallery.svg" alt=""/>
                    <span>Gallery</span>
                  </Link>
                </a>
              </li>
              <li>
                <a href="">
                  <Link to='/influencer'>
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
                <label for="">Account Balance</label>
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
                {data.map(da =>
                  <tr>
                    <td>{da.Shareid}</td>
                    <td>{da.Nftname}</td>
                    <td>{da.Price}ETH</td>
                    <td>{da.Marginprice}ETH</td>
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
              {data.map(da =>
                <div className="tableContent">
                  <div className="SnoSection">
                    <p className="SnoSectionContent">{da.Shareid}</p>
                  </div>
                  <div className="itemSections">
                    <p className="itemSectionsContent">{da.Nftname}</p>
                  </div>
                  <div className="itemSections">
                    <p className="itemSectionsContent">{da.Sharelink}</p>
                  </div>
                  <div className="optionsButtons">
                    <a href={`/share/${da.shareId}`} className="ViewStatusButtons">Go to ShareLink</a>
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

export default Infulencerdah
