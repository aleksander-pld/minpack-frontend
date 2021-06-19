import React, { Component,useEffect,useState ,useRef} from 'react'
import {Link } from 'react-router-dom'
import { ethers, Contract } from 'ethers';
import NftReseller from '../contracts/NftReseller.json';
import swal from 'sweetalert'
import axios from 'axios'


function Admindash() {
    const [ccontract,setccontract]=useState({})
    const [offerid,setofferid]=useState()
    const [data,setdata]=useState([])
    let btnRef = useRef();

    useEffect(() => {
        if(window.ethereum) {
            window.ethereum.enable();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
    
            const nftreseller = new Contract(
              '0xCB996552a7ba1596C8B71395D73166026dfA8dFD',
              NftReseller.abi,
              signer
            );
            console.log({ signer , nftreseller})
            setccontract(nftreseller)
            nftdetails()
        }
    }, []);

    const nftdetails = e => {
        axios.get('https://submitnftapi.herokuapp.com/users')
               .then( async (response) => {
                  // setdata(response.data)
                  const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                  });
                  if (accounts.length === 0) {
                    return;
                  }
                  console.log(response.data.length,"length hn ye")
                   for(var i=0;i<response.data.length;i++)
                   {
                       if(response.data[i].Artistaddress===accounts[0]){
                        setdata(olddata=>[...olddata,response.data[i]])
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
                 <div class="adminLayoutSection CreatingNFTMain">
        <div class="adminLeftside">
            <div class="logoSections">
                <Link to="/"><img src="assets/images/logo.svg" alt="" /></Link>
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
            <h1>DASHBOARD</h1>
            <form action="" class="dashboardPage">
                <div class="form-group">
                    <label for="">Account Balance</label>
                    <input type="text" class="form-control" disabled/>
                    <span>CLAIM</span>
                </div>
            </form>
            <div class="customTableSection">
                <div class="tableContent">
                    <div class="SnoSection">
                        <p>S.NO.</p>
                    </div>
                    <div class="itemSections">
                        <p>ITEM NAME</p>
                    </div>
                    <div class="optionsButtons mobileDisplay" style={{visibility: 'hidden'}}>
                        <button href="" class="ViewStatusButtons">View Status</button>
                        <button  class="CancelOfferButton">Cancel Offer</button>
                    </div>
                </div>
              
                     {data.map(da => <div class="tableContent">
                         {console.log(da.Nftaddress)}
                    <div class="SnoSection">
                        <p class="SnoSectionContent">{da.Offerid}</p>
                    </div>
                    <div class="itemSections">
                        <p class="itemSectionsContent">{da.Nftname}</p>
                    </div>
                    <div class="optionsButtons">
                    <a class="ViewStatusButtons" >View Status</a>
                        <a  class="CancelOfferButton" ref={btnRef} onClick={()=>canceloffer(da.Offerid)}>Cancel Offer</a>
                    </div>
                </div>
 )} 
                {/* {data.map(da => <h2>{da.name}</h2>)} */}
                
                


            </div>
            <div class="uploadNewNFTbutotn">
                <Link to='/approve'><a href="">Upload New NFT</a></Link>
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

export default Admindash
