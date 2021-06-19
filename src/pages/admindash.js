import React, { Component, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ethers, Contract } from 'ethers';
import NftReseller from '../contracts/NftReseller.json';
import swal from 'sweetalert'
import axios from 'axios'


function Admindash() {
  const [ccontract, setccontract] = useState({})
  const [offerid, setofferid] = useState()
  const [data, setdata] = useState([])
  let btnRef = useRef();

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const nftreseller = new Contract(
        '0xCB996552a7ba1596C8B71395D73166026dfA8dFD',
        NftReseller.abi,
        signer
      );
      console.log({ signer, nftreseller })
      setccontract(nftreseller)
      nftdetails()
    }
  }, []);

  const nftdetails = e => {
    axios.get('https://submitnftapi.herokuapp.com/users')
      .then(async (response) => {
        // setdata(response.data)
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length === 0) {
          return;
        }
        console.log(response.data.length, "length hn ye")
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].Artistaddress === accounts[0]) {
            setdata(olddata => [...olddata, response.data[i]])
          }
          //    setdata(response.data[i])
        }

      })
  }

  const canceloffer = async (id) => {
    // setloading(true);
    try {
      console.log(offerid)
      console.log(ccontract)
      const tx = await ccontract.cancelOffer(id);
      console.log(tx);
      const txsign = await tx.wait();

    } catch (e) {
      console.log(e);
      swal("transaction failed");
    }
    // setloading(false);
  };
  const onclickcanceloffer = async (id) => {
    await canceloffer(id);
  };

  return (
    <div>
      <div className="adminLayoutSection CreatingNFTMain">
        <div className="adminLeftside">
          <div className="logoSections">
            <Link to="/"><img src="/assets/images/logo.svg" alt=""/></Link>
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
                  <Link to='/admindashboard'>
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
          <h1>DASHBOARD</h1>
          <form action="" className="dashboardPage">
            <div className="form-group">
              <label for="">Account Balance</label>
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
                <button href="" className="ViewStatusButtons">View Status</button>
                <button className="CancelOfferButton">Cancel Offer</button>
              </div>
            </div>

            {data.map(da => <div className="tableContent">
                {console.log(da.Nftaddress)}
                <div className="SnoSection">
                  <p className="SnoSectionContent">{da.Offerid}</p>
                </div>
                <div className="itemSections">
                  <p className="itemSectionsContent">{da.Nftname}</p>
                </div>
                <div className="optionsButtons">
                  <a className="ViewStatusButtons">View Status</a>
                  <a className="CancelOfferButton" ref={btnRef} onClick={() => canceloffer(da.Offerid)}>Cancel Offer</a>
                </div>
              </div>
            )}
            {/* {data.map(da => <h2>{da.name}</h2>)} */}


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

export default Admindash
