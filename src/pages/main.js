import React, { Component } from "react";
import { Link } from "react-router-dom";

export class main extends Component {
  render() {
    return (
      <div>
        <div className="main_slider_sections">
          <div className="mainSliderOverlay">
            <img src="./assets/images/homeBackgrounds.png" alt=""/>
          </div>
          <div className="hometopButton">
            <Link to="/select">
              <a href="" className="homepageTopButton">
                Enter App
              </a>
            </Link>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div
            className="homeSliderContent"
            style={{ position: "absolute", marginBottom: "10px" }}
          >
            <img src="/assets/images/logo.svg" alt=""/>
            <p>
              MintPact is the world’s first NFT based Affiliate Protocol that
              enables trustless collaboration between Creators and Marketers.
            </p>
            <Link to="/select">ENTER APP</Link>
          </div>
        </div>
        <div className="NoInvestmentSection">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="NoInvestmentContent">
                  <div>
                    <h3>Trustless</h3>
                  </div>
                  <p>
                    <h5>
                      Always stay in control
                      <br/> of your assets & funds.
                    </h5>
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="NoInvestmentContent">
                  <div>
                    <h3>Collaborative</h3>
                  </div>
                  <p>
                    <h5>
                      Bringing together leading <br/>
                      creators & influencers.
                    </h5>
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="NoInvestmentContent lastNoborder">
                  <div>
                    <h3>Earn</h3>
                  </div>
                  <p>
                    <h5>
                      Make a steady income <br/>
                      without any investment.
                    </h5>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="howItWorkSection">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="commoneHeading">
                  <h2>How It Works</h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="howItWorkscount lastNoborder">
                  <h3>1</h3>
                  <p>
                    Create offers <br/>
                    For NFTs
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="howItWorkscount">
                  <h3>2</h3>
                  <p>
                    Marketers add a margin <br/>& promote your NFT
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="howItWorkscount">
                  <h3>3</h3>
                  <p>
                    Get paid instantly <br/>
                    on a successful sale.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="HomeFAQSection">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="commoneHeading">
                  <h2>Frequently Asked Questions</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="faqQuestions">
                  <h3>Q. Who should use Minpact? </h3>
                  <p>
                    A. Mintpact is a Web3 collaboration tool for NFT owners &
                    Marketers. NFT owners can use Mintpact to promote their NFT
                    to influencers. Influencers can use Mintpact to source NFT
                    offers on which they can add a fee for themselves and
                    monetise their audience. .
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="faqQuestions">
                  <h3>Q. Does Mintpact take custody of NFTs or payments?</h3>
                  <p>
                    A. Mintpact is a non-custodial De-Fi platform and never
                    takes possession of any NFTs or payments. All stakeholders
                    remain in full control of their assets and mintpact smart
                    contracts are designed to replace intermediaries without
                    gaining access to your assets.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="faqQuestions">
                  <h3>Q. What Problem Does Mintpact Solve?</h3>
                  <p>
                    A. Mintpact has solves the fundamental problem afflicting
                    the affiliate world - trust & payments. Mintpact replaces
                    obsolete affiliate networks with its smart contracts thereby
                    eliminating the possibility of delays, unfair trade terms,
                    rogue payment cancellations and ad fraud.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="faqQuestions">
                  <h3>Q. What are some use cases for Minpact?</h3>
                  <p>
                    A. Mintpact’s can be used to promote all tokenised goods
                    such as Digital Art, Books, Digital Theme, Music, Finance
                    Tokens, Access Tokens, Fan Tokens, Collectibles, Minted
                    Tweets and anything else that can be tokenised on an NFT.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="faqQuestions">
                  <h3> Q. How does Mintpact make money?</h3>
                  <p>A. Mintpact charges a commission on every transaction.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="faqQuestions">
                  <h3>Q. What token standards does Mintpact Support?</h3>
                  <p>
                    A. Mintpact currently supports ERC-721 tokens. More token
                    standards like ERC-1155, TRC-721 and Binance Smart Chain are
                    under active development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="footercontents">
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

export default main;
