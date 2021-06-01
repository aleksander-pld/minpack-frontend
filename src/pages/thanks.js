import React, { Component } from 'react'
import {Link } from 'react-router-dom'

    

const Thanks =  ({nftaddress,tx}) => {
   // const txx = "0x67b0496273fe3e01ad109542d13b80418d915ee78ad599d996823a9cbcccf548"
    console.log(tx,nftaddress,"yyyyy")
        return (
            <div>
                 <div class="buyWithMetamask">
        <div class="bgbuyWithMetamask thanksSections">
            <img src="assets/images/logo.svg" alt=""/>
            <h1>Thank you for your purchase !</h1>
            <p>The NFT will be delivered to your wallet.</p>
            <br></br>
            <h4>Contract Address of purchased NFT<br></br>{nftaddress} </h4>
            <br></br>
            <h4><a href={`https://rinkeby.etherscan.io/tx/${tx}` } target="_blank">View your transaction</a></h4>
        </div>
        
    </div>
            </div>
        )
    
}

export default Thanks
