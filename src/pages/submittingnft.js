import React, { Component } from 'react'
import {Link } from 'react-router-dom'
export class submittingnft extends Component {
    render() {
        return (
            <div>
                 <div class="adminLayoutSection CreatingNFTMain">
        <div class="adminLeftside">
            <div class="logoSections">
                <img src="assets/images/logo.svg" alt=""/>
            </div>
            <div class="leftsideMenus">
                <h3>Artist</h3>
                <ul>
                    <li>
                        <a href="">
                           <Link to="/approve">
                            <img src="assets/images/SubmitNFT.svg" alt=""/>
                            <span>Submit NFT</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Link to='/admindashboard'>
                            <img src="assets/images/dashboard.png" alt=""/>
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
                        <img src="assets/images/logo.svg" alt=""/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="assets/images/menu_icons.svg" alt=""/>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav" style={{marginTop: '30px'}}>
                            <h3>Artist</h3>
                            <li class="nav-item active">
                                <a class="nav-link" href=""><img src="assets/images/SubmitNFT.svg" alt=""/> Submit NFT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">
                                    <img src="assets/images/dashboard.png" alt=""/> Dashboard
                                </a>
                            </li>
                        </ul>
                        <ul class="navbar-nav" style={{marginTop: '30px'}}>
                            <h3>Influencer</h3>
                            <li class="nav-item">
                                <a class="nav-link" href=""> <img src="assets/images/Gallery.svg" alt=""/> Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">
                                    <img src="assets/images/dashboard.png" alt=""/> Dashboard
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="submmitingNFTSections">
                <h1 style={{marginBottom: '20px'}}>Thank you for submitting your NFT.</h1>
                <p>Please give us 24 hours to approve your request.</p>
                <Link to="/admindashboard"><a href="" class="ViewYourDashboard">View Your Dashboard</a></Link>
                <Link to="/approve"><a href="" class="UploadAnotherNFT">Upload Another NFT</a></Link>
                 <br></br><br></br>
                <Link to="/gallery"><a href="" style={{textDecoration:"none"}} class="ViewYourDashboard">GALLERY</a></Link>
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
                            <li>  <a href="https://discord.gg/bVaXT2VT" target="_blank">Discord</a></li>
                            <li>
                        <a href="https://www.twitter.com/mintpact" target="_blank">Twitter</a>
                      </li>
                            <li>   <a href="https://github.com/Mintpact" target="_blank">Github</a></li>
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

export default submittingnft
