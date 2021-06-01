import React, { Component, useEffect, useState } from "react";
import { Link,Route, useHistory } from "react-router-dom";
import axios from "axios";
import NftReseller from "../contracts/NftReseller.json";
import { ethers, Contract } from "ethers";
import NFT721 from "../contracts/TestNft721Token.json";
import swal from "sweetalert";
import Thanks from "./thanks";

function Nftname2() {
  const [state, setstate] = useState({});
  const [meta, setmeta] = useState();
  const [shareid, setshareid] = useState("");
  const [nftresellerr, setnftresellerr] = useState({});
  const [tokeninfo, settokeninfo] = useState();
  const [txdone, settxdone] = useState(false);
  const [loader,setloader]=useState(false)
  const [tx,settx]=useState("")
  const [nftaddress,setnftaddress]=useState("")
  
   let content
   let history = useHistory();

  useEffect(async () => {
    settxdone(false);
    const tokenurifunc = async (id,nftaddress) => {
      console.log(nftaddress)
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
  
      const nft721 = new Contract(
        nftaddress,
        NFT721.abi,
        signer
      );
      const tokenURI = await nft721.tokenURI(id);
      console.log(tokenURI);
      setmeta(tokenURI);
      await axios.get(tokenURI).then(function (response) {
        // console.log(response.data.result.image);
        settokeninfo(response.data.result.image);
      });
    };

    var resp;
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const nftreseller = await new Contract(
      "0x7C31136E28570e972472277338f62ae1B7fF1B94",
      NftReseller.abi,
      signer
    );
    setnftresellerr(nftreseller)
    const nftdetails = (e) => {
      axios
        .get("https://newinfluencerapi.herokuapp.com/users")
        .then(function (response) {
          console.log(response,"nftname")
          for (var i = 0; i < response.data.length; i++) {
            console.log("in loop")
            if (response.data[i].Shareid === e) {
              resp = response.data[i].Id;
              setstate(response.data[i]);
              setshareid(response.data[i].Shareid)
              console.log(response.data[i])
              tokenurifunc(response.data[i].Id,response.data[i].NftAddress);
              setnftaddress(response.data[i].NftAddress)
            }
          }
        });
    };
    var str = window.location.pathname;
    var substr = str.substr(10);

    nftdetails(substr);

    //console.log(state);
  }, []);

  const buyTokenWithEther = async (amount) => {
    try {
      var x = ethers.utils.parseEther(amount.toString());
      let overrides = {
        value: x.toString(),
      };

      console.log(x + "hi");
      console.log(nftaddress,"address bhi aa rha hn")
      console.log(shareid)
     const tx = await nftresellerr.buy(shareid,overrides);
      //swal("Please wait while we process your transaction");
      setloader(true)
      console.log(tx);
      const txsign = await tx.wait();
      console.log(tx.hash,"ye hn hash")
       settx(tx.hash)
       settxdone(true)
       
    } catch (e) {
      setloader(false)
      console.log(e);
      swal("Transaction failed");
    }
    //settxdone(true)
    // setloading(false);
  };
  const onclickbuytoken = (e) => {
    

    console.log('inn function two'+state.Price);
    
    buyTokenWithEther(state.Price);
  };
  // if (txdone == true) {
  //   content = (
  //     <div>
  //       {history.push("/thanks")}
  //       <Route
  //         path="/thanks"
  //         exact
  //         render=
  //          { <Thanks nftaddress={nftaddress} tx={tx}/>}
  //       >
         
  //       </Route>
  //     </div>
  //   );
  // }
 
  return (
    <div>
      {txdone == false ? (
    <div>
      <div class="buyWithMetamask">
        <div class="bgbuyWithMetamask">
          <div class="topNFTNameBox">
            <h1>{state.Nftname}</h1>
            <span>{state.Creatorname}</span>
            <p>{state.Price} ETH</p>
          </div>
          <div class="ThanksNFTPlaceholder">
            <img src={tokeninfo}  alt="" />
          </div>
          <div class="buyDescriptions">
            <h2>Description</h2>
            <p>{state.Description}</p>
            <button
              onClick={() => {
                onclickbuytoken()
              }}
            >
              BUY WITH METAMASK
            </button>
            <br></br><br></br>
            {loader===true?<h4>Please wait while we process your transaction</h4>:<div></div>}
          </div>
        </div>
      </div>
    </div>
   ) : (
    (
      <div>
        {/* {history.push("/thanks")} */}
       
            <Thanks nftaddress={nftaddress} tx={tx}/>
       
      </div>
    )

  )}
  </div>
  );
}

export default Nftname2;
