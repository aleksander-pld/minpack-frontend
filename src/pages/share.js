import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import NftReseller from "../contracts/NftReseller.json";
import NFT721 from '../contracts/TestNft721Token.json';
import { ethers, Contract } from "ethers";
import { parseEther } from "ethers/lib/utils";
import swal from "sweetalert";
import Thanks from "./thanks";
import { shortenAddress } from '../utils';

const Share = () => {
  const history = useHistory();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isSold, setIsSold] = useState(false);
  const [isTransactionPending, setIsTransactionPending] = useState(false);
  const [share, setShare] = useState();
  const [txHash, setTxHash] = useState("")

  useEffect(async () => {
    const fetchShareDetails = async () => {
      try {
        const res = await fetch(`https://mintpactnftbackend.herokuapp.com/api/share/${id}`)
        const { data } = await res.json()

        setShare(data)
        setIsLoading(false)

        // Check if token has been sold already
        if (window.ethereum) {
          await window.ethereum.enable();
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          const nft721Contract = new Contract(data.offer.nft.address, NFT721.abi, signer);
          const owner = await nft721Contract.ownerOf(data.offer.nft.tokenId)

          if (owner.toLowerCase() !== data.offer.artist.toLowerCase()) {
            setIsSold(true)
          }
        }
      } catch (e) {
        console.error(e)
        history.push('/')
      }
    }

    if (id) {
      fetchShareDetails()
    }
  }, []);

  const onClickBuy = async () => {
    setIsTransactionPending(true)

    try {
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const nftResellerContract = new Contract(
          '0xCB996552a7ba1596C8B71395D73166026dfA8dFD',
          NftReseller.abi,
          signer
        );

        const value = parseEther((Number(share.margin) + Number(share.offer.price)).toString())

        const tx = await nftResellerContract.buy(share.shareId, {
          value
        })
        await tx.wait()

        setTxHash(tx.hash)
        setIsTransactionPending(false)
      }
    } catch (e) {
      console.error(e);
      setIsTransactionPending(false)
      swal("Transaction failed");
    }
  };

  if (isLoading || !share) {
    return (
      <div style={{ height: "100vh" }}>
        <div className="loader"/>
      </div>
    );
  }

  return (
    <div>
      {!txHash ? (
        <div>
          <div className="buyWithMetamask">
            <div className="bgbuyWithMetamask">
              <div className="topNFTNameBox">
                <h1>{share.offer.nft.name}</h1>
                <span>{shortenAddress(share.offer.artist)}</span>
                <p>{Number(share.margin) + Number(share.offer.price)} ETH</p>
              </div>
              <div className="ThanksNFTPlaceholder">
                <img src={share.offer.nft.image} alt={share.offer.nft.name}/>
              </div>
              <div className="buyDescriptions">
                <h2>Description</h2>
                <p>{share.offer.description}</p>

                {isSold ? (
                  <h4>Token has been sold already!</h4>
                ) : (
                  <button onClick={onClickBuy}>
                    BUY WITH METAMASK
                  </button>
                )}

                <br/>
                <br/>
                {isTransactionPending ? <h4>Please wait while we process your transaction</h4> : <div/>}
              </div>
            </div>
          </div>
        </div>
      ) : (
        (
          <div>
            <Thanks nftaddress={share.offer.nft.address} tx={txHash}/>
          </div>
        )
      )}
    </div>
  );
}

export default Share;
