import React, { Component,useEffect,useState} from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'



function Infulencerdah() {
    const [data,setdata]=useState([])
    const nftdetails = e => {
        axios.get('https://newinfluencerapi.herokuapp.com/users')
               .then(async (response) => {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                  });
                  if (accounts.length === 0) {
                    return;
                  }
                  for(var i=0;i<response.data.length;i++)
                  {
                      if(response.data[i].Infulenceraddress===accounts[0]){
                       setdata(olddata=>[...olddata,response.data[i]])
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
                            <Link to='/gallery'>
                            <img src="assets/images/Gallery.svg" alt=""/>
                            <span>Gallery</span>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Link to='/influencer'>
                            <img src="assets/images/dashboard.png" alt=""/>
                            <span>Dashboard</span>
                            </Link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="adminRightSide CreateNFTSections">
            <div class="respoonsiveHeader">
                <nav class="navbar navbar-expand-xl navbar-light">
                    <a class="navbar-brand" href="#">
                        <Link to="/"><img src="assets/images/logo.svg" alt="" /></Link>
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
            <div class="influencerDashboard">
                <h1>Influencer Dashboard</h1>
                <form action="" class="dashboardPage">
                    <div class="form-group">
                        <label for="">Account Balance</label>
                        <input type="text" class="form-control" disabled/>
                        <span>CLAIM</span>
                    </div>
                </form>

                <div class="customTableSection">
                    <h2>SALES HISTORY</h2>
                    <table class="table ">
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
                    <div class="loadMoreButton">
                        <a href="">Load More</a>
                    </div>
                </div>

                <div class="customTableSection">
                    <h2>OFFER LINKS</h2>
                    <div class="tableContent">
                        <div class="SnoSection">
                            <p>S.NO.</p>
                        </div>
                        <div class="itemSections">
                            <p>ITEM NAME</p>
                        </div>
                        <div class="itemSections">
                            <p>ShareLink</p>
                        </div>
                        <div class="optionsButtons" style={{visibility: 'hidden'}}>
                            <a href="" class="ViewStatusButtons">Copy Link To Share</a>
                        </div>
                    </div>
                    {data.map(da =>
                        <div class="tableContent">
                        <div class="SnoSection">
                            <p class="SnoSectionContent">{da.Shareid}</p>
                        </div>
                        <div class="itemSections">
                            <p class="itemSectionsContent">{da.Nftname}</p>
                        </div>
                        <div class="itemSections">
                            <p class="itemSectionsContent">{da.Sharelink}</p>
                        </div>
                        <div class="optionsButtons">
                       <a href={`/nftname2/${da.Shareid}`} class="ViewStatusButtons">Go to ShareLink</a>
                        </div>
                    </div>
                        )}
                    
                    
                    <div class="loadMoreButton">
                        <a href="">Load More</a>
                    </div>
                </div>
            </div>

            {/* <!-- <div class="uploadNewNFTbutotn">
                <a href="">Upload New NFT</a>
            </div> --> */}
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

export default Infulencerdah
