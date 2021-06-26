import React, { Component } from "react";

export class footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-app">
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
                      <a
                        href="https://www.twitter.com/mintpact"
                        target="_blank"
                      >
                        Twitter
                      </a>
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

export default footer;
