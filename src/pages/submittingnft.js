import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SubmittingNFT extends Component {
  render() {
    return (
      <div>
        <div className="adminLayoutSection CreatingNFTMain">
          <div className="adminLeftside">
            <div className="logoSections">
              <img src="/assets/images/logo.svg" alt=""/>
            </div>
            <div className="leftsideMenus">
              <h3>Artist</h3>
              <ul>
                <li>
                  <a href="">
                    <Link to="/upload">
                      <img src="/assets/images/SubmitNFT.svg" alt=""/>
                      <span>Submit NFT</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="">
                    <Link to='/artist'>
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
                  <img src="/assets/images/logo.svg" alt=""/>
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
            <div className="submmitingNFTSections">
              <h1 style={{ marginBottom: '20px' }}>Thank you for submitting your NFT.</h1>
              <p>Please give us 24 hours to approve your request.</p>
              <Link to="/artist"><a href="" className="ViewYourDashboard">View Your Dashboard</a></Link>
              <Link to="/upload"><a href="" className="UploadAnotherNFT">Upload Another NFT</a></Link>
              <br/><br/>
              <Link to="/gallery">
                <a href="" style={{ textDecoration: "none" }} className="ViewYourDashboard">GALLERY</a></Link>
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
}

export default SubmittingNFT
