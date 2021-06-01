import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ethers, Contract } from "ethers";
import NFT721 from "../contracts/TestNft721Token.json";

class Gallery extends Component {

  componentWillMount() {
    fetch('https://submitnftapi.herokuapp.com/users')
      .then(res => res.json())
      .then(res => {
        this.setState({ dataa: res })
        this.fetchNftImages(res);
      })
      .catch(err => console.log('It"s a Error: ', err))
  }

  constructor(props) {
    super(props)
    this.state = {
      dataa: [],
      TokenInfo: "",
      nftaddress: "",
    }
  }

  fetchNftImages = async (tokens) => {
    const promises = tokens.map(async token => {
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
       console.log(token.Nftaddress)
      const nft721 = new Contract(
        token.Nftaddress,
        NFT721.abi,
        signer
      );

      const tokenUri = await nft721.tokenURI(token.Id)
      console.log(tokenUri)
       token.image = (await axios.get(tokenUri)).data.result.image;
      console.log(token.image)
      return token;
    });

    const dataa = await Promise.all(promises);
    this.setState({ dataa });
  };

  render() {
    return (
      <div>
        <div class="adminLayoutSection CreatingNFTMain">
          <div class="adminLeftside">
            <div class="logoSections">
              <Link to="/"><img src="assets/images/logo.svg" alt="" /></Link>
            </div>

            <div class="leftsideMenus">
              <h3>Influencer</h3>
              <ul>
                <li>
                  <a href="">
                    <Link to="/gallery">
                      <img src="assets/images/Gallery.svg" alt=""/>
                      <span>Gallery</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a href="">
                    <Link to="/influencer">
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
                  <Link to="/"><img src="assets/images/logo.svg" alt="" /></Link>
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
                  <img src="assets/images/menu_icons.svg" alt=""/>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav" style={{ marginTop: "30px" }}>
                    <h3>Artist</h3>
                    <li class="nav-item active">
                      <a class="nav-link" href="">
                        <img src="assets/images/SubmitNFT.svg" alt=""/> Submit
                        NFT
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="">
                        <img src="assets/images/dashboard.png" alt=""/> Dashboard
                      </a>
                    </li>
                  </ul>
                  <ul class="navbar-nav" style={{ marginTop: "30px" }}>
                    <h3>Influencer</h3>
                    <li class="nav-item">
                      <a class="nav-link" href="">
                        {" "}
                        <img src="assets/images/Gallery.svg" alt=""/> Gallery
                      </a>
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
            <h1>GALLERY</h1>
            <div class="galleryFilterSection">
              <div class="container">
                <div class="row">
                  <div class="col-xl-6">
                    <div class="NFTFilterSection">
                      <span>SORT BY:</span>
                      <ul>
                        <li>
                          <a class="active" >
                            Newest to oldest
                          </a>
                        </li>
                        <li>
                          <a>Oldest to newest</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="NFTFilterSection prcieFilterSection">
                      <span>PRICE:</span>
                      <ul>
                        <li>
                          <a >Low to High</a>
                        </li>
                        <li>
                          <a >High to low</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="NFTCardSections">
              <div class="container">
                <div class="row">
                  {this.state.dataa.map((da, key) => {
                      return (
                        <div class="col-lg-4 col-md-6 col-6" key={key}>
                          {/* {this.onloadnftimage(da.Id)} */}
                          <div class="NFTCard">
                            {/* <div class="NFTuserCard" onLoad={ onloadnftimage(da)}> */}

                            <div class="NFTuserCard">
                              <img src={da.image} alt=""/>
                            </div>

                            <Link to={{ pathname: "/nftname", state: da }}>

                              <h2>{da.Nftname}</h2>
                              <p>{da.Price} ETH</p>
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
    );
  }
}

export default Gallery;