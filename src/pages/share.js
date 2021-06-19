import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import NftReseller from "../contracts/NftReseller.json";
import { ethers, Contract } from "ethers";
import NFT721 from "../contracts/TestNft721Token.json";
import swal from "sweetalert";
import Thanks from "./thanks";
import { shortenAddress } from '../utils';

const Share = () => {
  const history = useHistory();
  const { id  } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [share, setShare] = useState();

  const [shareid, setshareid] = useState("");
  const [nftresellerr, setnftresellerr] = useState({});
  const [txdone, settxdone] = useState(false);
  const [loader, setloader] = useState(false)
  const [tx, settx] = useState("")
  const [nftaddress, setnftaddress] = useState("")

  useEffect(async () => {
    const fetchShareDetails = async () => {
      try {
        const res = await fetch(`https://mintpactnftbackend.herokuapp.com/api/share/${id}`)
        const { data } = await res.json()
        setShare(data)
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        history.push('/')
      }
    }

    if (id) {
      fetchShareDetails()
    }
  }, []);

  const buyTokenWithEther = async (amount) => {
    try {
      var x = ethers.utils.parseEther(amount.toString());
      let overrides = {
        value: x.toString(),
      };
      const tx = await nftresellerr.buy(shareid, overrides);
      //swal("Please wait while we process your transaction");
      setloader(true)
      console.log(tx);
      const txsign = await tx.wait();
      console.log(tx.hash, "ye hn hash")
      settx(tx.hash)
      settxdone(true)

    } catch (e) {
      setloader(false)
      console.log(e);
      swal("Transaction failed");
    }
  };

  const onclickbuytoken = (e) => {
    buyTokenWithEther(share.offer.price);
  };

  if (isLoading) {
    return (
      <div style={{ height: "100vh" }}>
        <div className="loader" />
      </div>
    );
  }

  return (
    <div>
      {!txdone ? (
        <div>
          <div className="buyWithMetamask">
            <div className="bgbuyWithMetamask">
              <div className="topNFTNameBox">
                <h1>{share.offer.nft.name}</h1>
                <span>{shortenAddress(share.offer.artist)}</span>
                <p>{Number(share.margin) + Number(share.offer.price)} ETH</p>
              </div>
              <div className="ThanksNFTPlaceholder">
                <img src={share.offer.nft.image} alt={share.offer.nft.name} />
              </div>
              <div className="buyDescriptions">
                <h2>Description</h2>
                <p>{share.offer.description}</p>
                <button
                  onClick={onclickbuytoken}
                >
                  BUY WITH METAMASK
                </button>
                <br/>
                <br/>
                {loader ? <h4>Please wait while we process your transaction</h4> : <div/>}
              </div>
            </div>
          </div>
        </div>
      ) : (
        (
          <div>
            <Thanks nftaddress={share.offer.nft.address} tx={tx} />
          </div>
        )
      )}
    </div>
  );
}

export default Share;
