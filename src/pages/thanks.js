import React from 'react'

const Thanks = ({ nftaddress, tx }) => {
  return (
    <div>
      <div className="buyWithMetamask">
        <div className="bgbuyWithMetamask thanksSections">
          <img src="/assets/images/logo.svg" alt=""/>
          <h1>Thank you for your purchase !</h1>
          <p>The NFT will be delivered to your wallet.</p>
          <br/>
          <h4>Contract Address of purchased NFT<br/>{nftaddress}</h4>
          <br/>
          <h4><a href={`https://rinkeby.etherscan.io/tx/${tx}`} target="_blank">View your transaction</a></h4>
        </div>
      </div>
    </div>
  )
}

export default Thanks
